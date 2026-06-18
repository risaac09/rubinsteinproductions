import { useEffect } from 'react'

const BASE_URL = 'https://rubinsteinproductions.com'
const SITE_NAME = 'Rubinstein Productions'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

export default function usePageMeta({ title, description, path, ogImage }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} · ${SITE_NAME}`
      : `${SITE_NAME}: Say Why`
    const canonicalUrl = `${BASE_URL}${path || '/'}`
    const image = ogImage || DEFAULT_OG_IMAGE

    document.title = fullTitle

    setMeta('description', description)
    setMeta('robots', 'index, follow')

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    // Open Graph
    setMetaProperty('og:title', fullTitle)
    setMetaProperty('og:description', description)
    setMetaProperty('og:url', canonicalUrl)
    setMetaProperty('og:image', image)
    setMetaProperty('og:image:width', '1200')
    setMetaProperty('og:image:height', '630')
    setMetaProperty('og:type', 'website')
    setMetaProperty('og:site_name', SITE_NAME)

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)
  }, [title, description, path, ogImage])
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}
