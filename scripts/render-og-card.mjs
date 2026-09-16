#!/usr/bin/env node
/**
 * Renders public/og-card.svg to public/og-card.png at 1200x630.
 *
 * Social platforms do not render SVG, so the card ships as a raster. This
 * script is the only sanctioned way to produce it: edit the SVG, re-run this,
 * commit both. Hand-placing a PNG is how a retired Brand A card ended up on
 * every RP social preview between June and September 2026.
 *
 * Needs a Chromium build and network access to fonts.gstatic.com, because the
 * card is set in EB Garamond and headless Chromium has no system serif that
 * matches. Override the browser with CHROME_PATH=/path/to/chrome.
 *
 *   node scripts/render-og-card.mjs
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SVG = join(ROOT, 'public', 'og-card.svg')
const PNG = join(ROOT, 'public', 'og-card.png')
const WIDTH = 1200
const HEIGHT = 630

const FONT_CSS =
  'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;1,400&display=swap'
// Google serves woff2 only to browser user agents.
const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH
  const pwRoot = process.env.PLAYWRIGHT_BROWSERS_PATH
  if (pwRoot && existsSync(pwRoot)) {
    for (const entry of readdirSync(pwRoot)) {
      if (!entry.startsWith('chromium-')) continue
      const bin = join(pwRoot, entry, 'chrome-linux', 'chrome')
      if (existsSync(bin)) return bin
    }
  }
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/usr/bin/google-chrome',
  ]
  const found = candidates.find((p) => existsSync(p))
  if (found) return found
  throw new Error('No Chromium found. Set CHROME_PATH=/path/to/chrome and re-run.')
}

/** The latin subset is all the card needs; the rest of the CSS is other scripts. */
async function latinFontFaces() {
  const res = await fetch(FONT_CSS, { headers: { 'User-Agent': UA } })
  if (!res.ok) throw new Error(`Google Fonts returned ${res.status} for the EB Garamond CSS.`)
  const css = await res.text()

  const faces = []
  for (const [, body] of css.matchAll(/@font-face\s*\{(.*?)\}/gs)) {
    const range = body.match(/unicode-range:\s*([^;]+);/)
    if (!range || !range[1].trim().startsWith('U+0000-00FF')) continue
    const style = body.match(/font-style:\s*(\w+)/)[1]
    const url = body.match(/url\((https:\/\/[^)]+)\)/)[1]
    const font = await fetch(url, { headers: { 'User-Agent': UA } })
    if (!font.ok) throw new Error(`Font download failed (${font.status}): ${url}`)
    const b64 = Buffer.from(await font.arrayBuffer()).toString('base64')
    faces.push(
      `@font-face{font-family:'EB Garamond';font-style:${style};font-weight:400;` +
        `src:url(data:font/woff2;base64,${b64}) format('woff2');}`
    )
  }
  if (faces.length !== 2) {
    throw new Error(`Expected a roman and an italic latin face, got ${faces.length}.`)
  }
  return faces.join('')
}

/**
 * Inlines the webfont into the SVG so it still applies once the SVG is loaded
 * as an <img>, where the surrounding page's styles no longer reach it.
 */
function inlineFont(svgText, faces) {
  const svg = svgText.replace(/<\?xml[^>]*\?>/, '').trim()
  const rootEnd = svg.indexOf('>', svg.indexOf('<svg ')) + 1
  return svg.slice(0, rootEnd) + `<style>${faces}</style>` + svg.slice(rootEnd)
}

const chrome = findChrome()
const work = mkdtempSync(join(tmpdir(), 'og-card-'))
const svg = inlineFont(readFileSync(SVG, 'utf8'), await latinFontFaces())
const page = join(work, 'card.html')

/*
 * Chromium's --screenshot is sized by --window-size, not by the viewport, and
 * headless reserves part of the window for chrome it never draws. That crops
 * the card and pads the rest. Painting into a canvas sidesteps the viewport
 * entirely and gives exactly WIDTH x HEIGHT.
 */
writeFileSync(
  page,
  `<!DOCTYPE html><html><body><pre id="out">PENDING</pre><script>
  const say = (m) => { document.getElementById('out').textContent = m }
  const img = new Image()
  img.onerror = () => say('ERR the SVG failed to load; check that it is well-formed XML')
  img.onload = () => {
    try {
      const c = document.createElement('canvas')
      c.width = ${WIDTH}; c.height = ${HEIGHT}
      c.getContext('2d').drawImage(img, 0, 0, ${WIDTH}, ${HEIGHT})
      say('BEGIN' + c.toDataURL('image/png').split(',')[1] + 'END')
    } catch (err) { say('ERR ' + err.name + ': ' + err.message) }
  }
  img.src = 'data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}'
  </script></body></html>`
)

const dom = execFileSync(
  chrome,
  ['--headless', '--no-sandbox', '--disable-gpu', '--virtual-time-budget=15000',
    '--dump-dom', `file://${page}`],
  { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 }
)

const failed = dom.match(/<pre id="out">(ERR [^<]*)</)
if (failed) throw new Error(`Render failed: ${failed[1]}`)

const png = dom.match(/BEGIN([A-Za-z0-9+/=]+)END/)
if (!png) throw new Error('Chromium produced no image. The page may not have finished loading.')

writeFileSync(PNG, Buffer.from(png[1], 'base64'))
console.log(`Wrote ${PNG} at ${WIDTH}x${HEIGHT}.`)
