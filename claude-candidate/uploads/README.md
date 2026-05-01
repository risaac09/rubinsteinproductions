# Rubinstein Productions — Publish Bundle

Six self-contained HTML files. Each is a single, offline-capable page with all assets, fonts, and components inlined. **Drop them on any host.**

## Files

| File | Purpose | URL idea |
|---|---|---|
| `index.html` | Public homepage | `rubinsteinproductions.com/` |
| `about.html` | Long-scroll bio | `/about` |
| `press.html` | Press kit + downloads | `/press` |
| `proposal-template.html` | 12-slide proposal scaffold | private |
| `pitch-deck.html` | 10-slide live talk | `/talk` (optional) |
| `operations-toolkit.html` | Internal artifact toolkit | private |

## Deploy options

**Vercel / Netlify (drag-and-drop):**
1. Drag the entire `publish/` folder onto vercel.com or netlify.com.
2. They'll serve `index.html` at the root.
3. Point your domain at the deployment.

**S3 / Cloudflare R2:**
1. Upload all files to the bucket.
2. Set `index.html` as the index document.
3. Public-read on each file.

**GitHub Pages:**
1. Push `publish/` contents to `gh-pages` branch (or `docs/` on main).
2. Enable Pages in repo settings.

**Email/share a single page:**
Each file works offline — attach to email, paste into a Gist, host anywhere.

## Internal links

`index.html` links to `about.html` and `press.html` by relative path. Keep them in the same folder. The bundles ALSO have hard links to the original named files — those will break on a clean host but are harmless (they're inline anchors). If you want them perfectly clean, edit `RP Homepage.html` source to point to `about.html` / `press.html` and re-publish.

## Versioning

Files reflect **v 1.0 · 2027** — arc closes september 25, 2027. To update copy, edit the source `.html` files in the project root and re-bundle.

— Isaac Rubinstein
