# Rubinstein Productions — SEO & Site Improvement Roadmap

**For:** Claude Sonnet (autonomous execution)
**Budget:** 7–10 hours, 5M–10M tokens
**Project root:** `/Users/isaacrubinstein/rubinsteinproductions/`
**Tech stack:** React 19 + React Router DOM 7 + Vite 6 + GSAP 3 + vanilla CSS
**Production URL:** `https://rubinsteinproductions.com`
**Repo:** `https://github.com/risaac09/rubinsteinproductions.git`

---

## How to use this document

Execute tasks in order. Each task has:
- **What:** the change
- **Why:** the SEO/UX reason
- **Files:** exact paths to create or modify
- **Instructions:** step-by-step implementation
- **Verify:** how to confirm it worked

Run `npm run dev` from the project root to preview changes at `localhost:5174`.
Run `npm run build` after each major task to confirm the build still succeeds.

Do NOT install unnecessary packages. This project is intentionally lightweight.
Do NOT add TypeScript. Do NOT add a CSS framework.
Do NOT change the visual design, color palette, typography, or animation system.
Do NOT modify GSAP animations or the `useScrollAnimations.js` hook.
Do NOT restructure the component architecture beyond what's specified here.

---

## Task 1: Switch from HashRouter to BrowserRouter

**Priority:** P0 — Existential. Without this, Google sees 1 page instead of 5.
**Estimated effort:** 30 min
**Files to modify:**
- `src/App.jsx`
- `vite.config.js`
- Create: `public/404.html` (for GitHub Pages SPA fallback)
- Create: `public/CNAME` (if custom domain is ready)

### Instructions

**1a. Modify `src/App.jsx`:**

Replace `HashRouter` with `BrowserRouter`:

```jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
```

Change line 31 from `<HashRouter>` to `<BrowserRouter>` and the closing tag likewise.

**1b. Modify `vite.config.js`:**

Change `base` from `'./'` to `'/'`:

```js
export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

**1c. Create `public/` directory and `public/404.html`:**

GitHub Pages doesn't support SPA fallback natively. The standard workaround is a 404.html that redirects to index.html with the path preserved as a query parameter.

Create `public/404.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // Single Page App redirect for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    var pathSegmentsToKeep = 0;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body></body>
</html>
```

**1d. Add redirect handler to `index.html`:**

Add this script BEFORE the closing `</head>` tag in `index.html`, just before line 20:

```html
  <!-- GitHub Pages SPA redirect handler -->
  <script>
    (function(l) {
      if (l.search[1] === '/') {
        var decoded = l.search.slice(1).split('&').map(function(s) {
          return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
      }
    }(window.location))
  </script>
```

**1e. Update all internal links in components:**

The NavLink components in `Nav.jsx` already use `to="/about"` style paths — no change needed there. But search the entire `src/` directory for any remaining `#/` references in href attributes. Grep for `#/` in all `.jsx` and `.css` files and replace any found with plain `/` paths.

Known locations to check:
- `src/pages/Home.jsx` — CTA links ("How it works" → `/services`, "Start a conversation" → `/contact`)
- `src/pages/About.jsx` — CTA link to contact
- `src/pages/Services.jsx` — tier "Start here" buttons → `/contact`
- `src/pages/Work.jsx` — CTA link to contact
- `src/components/Footer.jsx` — navigation links

React Router `<Link>` and `<NavLink>` components should NOT have `#/` prefixes — they should just be `/about`, `/services`, etc. If any `<a href="#/...">` tags exist (raw HTML links instead of Router components), convert them to `<Link to="/...">`.

### Verify

1. `npm run dev` — navigate to `localhost:5174/about` directly in the URL bar. The About page should render (not a blank page or 404).
2. Click through all nav links. URLs should show `/about`, `/services`, etc. — no `#` in the URL.
3. Refresh the browser on `/services`. The page should still render (Vite dev server handles this automatically).
4. `npm run build` — confirm no errors.

---

## Task 2: Per-page `<title>`, `<meta description>`, canonical, and OG tags

**Priority:** P0 — Each page needs unique metadata for search engines and social sharing.
**Estimated effort:** 1 hour
**Files to modify:**
- Create: `src/hooks/usePageMeta.js`
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Services.jsx`
- `src/pages/Work.jsx`
- `src/pages/Contact.jsx`
- `index.html` (minor cleanup)

### Instructions

**2a. Create `src/hooks/usePageMeta.js`:**

Do NOT install react-helmet or any package. Use a simple custom hook:

```js
import { useEffect } from 'react'

const BASE_URL = 'https://rubinsteinproductions.com'
const SITE_NAME = 'Rubinstein Productions'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`

export default function usePageMeta({ title, description, path, ogImage }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${SITE_NAME}`
      : `${SITE_NAME}: Say Why`
    const canonicalUrl = `${BASE_URL}${path || '/'}`
    const image = ogImage || DEFAULT_OG_IMAGE

    // Title
    document.title = fullTitle

    // Standard meta
    setMeta('description', description)

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
```

**2b. Add `usePageMeta` to each page component:**

Add the hook call at the top of each page component's function body (after any existing hooks):

**Home.jsx:**
```js
import usePageMeta from '../hooks/usePageMeta.js'
// ... inside the component function:
usePageMeta({
  title: null, // uses default "Rubinstein Productions: Say Why"
  description: 'Facilitation and film for mission-driven professionals. A camera, a conversation, and a 3-minute brand video that sounds like you.',
  path: '/',
})
```

**About.jsx:**
```js
import usePageMeta from '../hooks/usePageMeta.js'
// ...
usePageMeta({
  title: 'About',
  description: 'Isaac Rubinstein is a facilitator, filmmaker, and voice liberation specialist. Based between Seattle and Oslo. Grounded in relational ontology.',
  path: '/about',
})
```

**Services.jsx:**
```js
import usePageMeta from '../hooks/usePageMeta.js'
// ...
usePageMeta({
  title: 'Services & Pricing',
  description: 'Three tiers of facilitated video production. The Mirror (single session, $500), The Map (full package, $5K–$12K), The Territory (monthly, $4K–$8K/mo).',
  path: '/services',
})
```

**Work.jsx:**
```js
import usePageMeta from '../hooks/usePageMeta.js'
// ...
usePageMeta({
  title: 'Work',
  description: 'Case studies and client transformations from facilitated video production. Real voice, real results.',
  path: '/work',
})
```

**Contact.jsx:**
```js
import usePageMeta from '../hooks/usePageMeta.js'
// ...
usePageMeta({
  title: 'Contact',
  description: 'Start a conversation with Rubinstein Productions. No pitch, no onboarding form. Response within 48 hours.',
  path: '/contact',
})
```

**2c. Clean up `index.html`:**

Keep the existing meta tags in `index.html` as fallback defaults (for crawlers that don't execute JS). They will be overridden by the hook on each route. No removal needed — just leave them as-is for the base/fallback case.

### Verify

1. `npm run dev` — navigate to each page and check `document.title` in the browser tab.
2. Right-click → View Page Source should still show the default meta tags (these are the SSR fallback).
3. In DevTools Console, run `document.querySelector('link[rel="canonical"]').href` on each page — should show the correct full URL.
4. `document.querySelector('meta[property="og:title"]').content` should differ per page.

---

## Task 3: Create `robots.txt` and `sitemap.xml`

**Priority:** P0 — Required for crawl discovery.
**Estimated effort:** 15 min
**Files to create:**
- `public/robots.txt`
- `public/sitemap.xml`

### Instructions

**3a. Create `public/robots.txt`:**

```
User-agent: *
Allow: /

Sitemap: https://rubinsteinproductions.com/sitemap.xml
```

**3b. Create `public/sitemap.xml`:**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemapns.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rubinsteinproductions.com/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rubinsteinproductions.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://rubinsteinproductions.com/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://rubinsteinproductions.com/work</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://rubensteinproductions.com/contact</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

### Verify

1. `npm run build` — confirm `dist/robots.txt` and `dist/sitemap.xml` exist.
2. `npm run dev` — navigate to `localhost:5174/robots.txt` and `localhost:5174/sitemap.xml` in the browser.

---

## Task 4: JSON-LD Structured Data

**Priority:** P1 — Enables rich search results.
**Estimated effort:** 45 min
**Files to modify:**
- Create: `src/components/StructuredData.jsx`
- `src/pages/Home.jsx`
- `src/pages/Services.jsx`
- `src/pages/About.jsx`

### Instructions

**4a. Create `src/components/StructuredData.jsx`:**

A simple component that injects a JSON-LD script tag:

```jsx
import { useEffect, useRef } from 'react'

export default function StructuredData({ data }) {
  const ref = useRef(null)

  useEffect(() => {
    // Create and inject script element
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(data)
    document.head.appendChild(script)
    ref.current = script

    return () => {
      if (ref.current && ref.current.parentNode) {
        ref.current.parentNode.removeChild(ref.current)
      }
    }
  }, [data])

  return null
}
```

**4b. Add to `Home.jsx`:**

Import the component and render it inside the page (anywhere — it renders nothing visible):

```jsx
import StructuredData from '../components/StructuredData.jsx'

// Inside the JSX return, at the top:
<StructuredData data={{
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rubinstein Productions',
  description: 'Facilitation and film for mission-driven professionals',
  url: 'https://rubinsteinproductions.com',
  founder: {
    '@type': 'Person',
    name: 'Isaac Rubinstein',
    jobTitle: 'Facilitator, Filmmaker & Voice Liberation Specialist',
  },
  areaServed: [
    { '@type': 'City', name: 'Seattle' },
    { '@type': 'City', name: 'Oslo' },
  ],
  priceRange: '$500 - $12,000',
  serviceType: ['Video Production', 'Facilitation', 'Brand Strategy', 'Voice Liberation'],
  sameAs: [
    'https://www.linkedin.com/in/isaacrubinstein/',
    'https://substack.com/@isaacrubinstein',
    'https://www.youtube.com/@risaac09',
  ],
}} />
```

**4c. Add to `Services.jsx`:**

Add an `OfferCatalog` schema with the three tiers:

```jsx
import StructuredData from '../components/StructuredData.jsx'

<StructuredData data={{
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Rubinstein Productions Services',
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'The Mirror — Single Session',
      description: 'One facilitated conversation. 90-minute session with narrative synthesis document and recording.',
      price: '500',
      priceCurrency: 'USD',
    },
    {
      '@type': 'Offer',
      name: 'The Map — Full Say Why Package',
      description: 'Facilitation, camera, film, and a 3-minute produced brand video with all raw footage.',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '5000',
        maxPrice: '12000',
        priceCurrency: 'USD',
      },
    },
    {
      '@type': 'Offer',
      name: 'The Territory — Ongoing Partnership',
      description: 'Monthly facilitation and production with 2–4 produced videos and strategic narrative guidance.',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice: '4000',
        maxPrice: '8000',
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
    },
  ],
}} />
```

**4d. Add to `About.jsx`:**

Add a `Person` schema for Isaac:

```jsx
import StructuredData from '../components/StructuredData.jsx'

<StructuredData data={{
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Isaac Rubinstein',
  jobTitle: 'Facilitator, Filmmaker & Voice Liberation Specialist',
  url: 'https://rubinsteinproductions.com/about',
  worksFor: {
    '@type': 'Organization',
    name: 'Rubinstein Productions',
    url: 'https://rubinsteinproductions.com',
  },
  knowsAbout: ['Facilitation', 'Filmmaking', 'Brand Video Production', 'Relational Ontology', 'Voice Liberation'],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Master of Public Health Program',
  },
  sameAs: [
    'https://www.linkedin.com/in/isaacrubinstein/',
    'https://substack.com/@isaacrubinstein',
    'https://www.youtube.com/@risaac09',
  ],
}} />
```

### Verify

1. In DevTools, run `document.querySelectorAll('script[type="application/ld+json"]').length` — should be 1 on Home, 1 on Services, 1 on About.
2. Navigate between pages — the script tags should be cleaned up and replaced (not accumulate).
3. Copy the JSON-LD and paste into Google's Rich Results Test (https://search.google.com/test/rich-results) to validate.

---

## Task 5: Create OG Image

**Priority:** P1 — Every LinkedIn share is a silent billboard. Right now it's blank.
**Estimated effort:** 30 min
**Files to create:**
- `public/og-image.jpg` (1200x630px)

### Instructions

**Option A — Generate with HTML + screenshot (preferred):**

Create a temporary HTML file, open it in a browser, screenshot at 1200x630, save as `og-image.jpg`. Then delete the HTML file.

The OG image should be:
- 1200x630 pixels
- Background color: `#faf8f5` (the site's `--white`)
- "Say *why*." in the site's headline style — "Say" in `EB Garamond` regular dark (`#1a1412`), "*why*." in `EB Garamond` italic deep red (`#8b2e1c`)
- "RUBINSTEIN PRODUCTIONS" in small caps `Inter` above the headline, in `#a89e93` (the `--ash` color)
- "Facilitation & Film" as a subtitle in lighter weight
- The RP logo mark (the SVG with R and P) in the bottom-left corner
- Generous whitespace — the image should breathe

Create a temporary file `/tmp/og-image.html` with this layout, open it in a headless browser or Chrome, screenshot the viewport at exactly 1200x630, and save to `public/og-image.jpg` at ~80% JPEG quality.

**Option B — If screenshot tooling is unavailable:**

Use an SVG-based approach: create `public/og-image.svg` with the same layout. Then note in a comment at the top of the file that it should be converted to JPG before production deploy. Update the `usePageMeta.js` hook to reference `og-image.svg` temporarily.

After creating the image, also create a `public/og-services.jpg` variant for the Services page that includes the three tier names (The Mirror / The Map / The Territory).

### Verify

1. `npm run build` — confirm `dist/og-image.jpg` exists.
2. Open the image and confirm it's 1200x630 and visually represents the brand.

---

## Task 6: Accessibility Fixes

**Priority:** P1 — SEO and accessibility overlap heavily. Google penalizes poor accessibility.
**Estimated effort:** 30 min
**Files to modify:**
- `index.html`
- `src/App.jsx`
- `src/pages/Contact.jsx`
- `src/styles/design-system.css`

### Instructions

**6a. Add skip-link to `src/App.jsx`:**

In the `Layout` component, add a skip link before `<Nav />`:

```jsx
function Layout({ children }) {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  )
}
```

**6b. Add skip-link styles to `src/styles/design-system.css`:**

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--marrow);
  color: var(--bone);
  z-index: 10000;
  font-size: 0.875rem;
  text-decoration: none;
  border-radius: 0 0 4px 4px;
}

.skip-link:focus {
  top: 0;
}
```

**6c. Fix form label associations in `Contact.jsx`:**

Ensure every `<label>` has a `htmlFor` attribute matching the `id` of its input. Check the Contact page form — each input should have an `id` prop, and each label should have `htmlFor` matching it:

```jsx
<label htmlFor="name">Name</label>
<input id="name" name="name" ... />

<label htmlFor="email">Email</label>
<input id="email" name="email" type="email" ... />

<label htmlFor="context">What's the context?</label>
<textarea id="context" name="context" ... />

<label htmlFor="tier">Which tier interests you? (optional)</label>
<select id="tier" name="tier" ... />
```

If these `id` and `htmlFor` attributes are already present, no change needed. If not, add them.

### Verify

1. Tab through the page from the top. The skip-link should appear on first Tab press.
2. Click the skip link — focus should move to the main content area.
3. In the contact form, clicking a label should focus its associated input.

---

## Task 7: GitHub Pages Deploy Workflow

**Priority:** P1 — Automate deployment so changes go live on push.
**Estimated effort:** 30 min
**Files to create:**
- `.github/workflows/deploy.yml`
- `public/CNAME` (if custom domain is configured)

### Instructions

**7a. Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

**7b. Create `public/CNAME`:**

If the custom domain `rubinsteinproductions.com` is pointed at GitHub Pages:

```
rubinsteinproductions.com
```

If the DNS is not yet configured, skip this file and note it as a TODO.

### Verify

1. Push to `main` — the Action should trigger in the GitHub Actions tab.
2. Once deployed, visit the production URL and confirm all pages load.

---

## Task 8: Performance & Prerender Hints

**Priority:** P2 — Helps crawlers and improves perceived load time.
**Estimated effort:** 30 min
**Files to modify:**
- `index.html`

### Instructions

**8a. Add preload for critical fonts in `index.html`:**

Add these BEFORE the Google Fonts stylesheet link (before line 19):

```html
  <link rel="preload" href="https://fonts.gstatic.com/s/ebgaramond/v27/SlGDmQSNjdsmc35JDF1K5E55YMjF_7DPuGi-6_RUA4V-e6yHgQ.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hiA.woff2" as="font" type="font/woff2" crossorigin />
```

NOTE: The exact font URLs above are approximate. To get the real URLs:
1. Open DevTools Network tab on the running site
2. Filter by "font"
3. Copy the actual .woff2 URLs being loaded
4. Use those exact URLs in the preload tags

If you can't determine the exact URLs, skip this sub-task — it's a minor optimization.

**8b. Add `robots` meta tag to `index.html`:**

Add after the description meta tag:

```html
  <meta name="robots" content="index, follow" />
```

**8c. Add a `<noscript>` fallback in `index.html`:**

Inside `<body>`, after the `<div id="root">` line:

```html
  <noscript>
    <p>Rubinstein Productions — Facilitation and film for mission-driven professionals. Please enable JavaScript to view this site.</p>
    <p><a href="mailto:risaac09@gmail.com">Contact: risaac09@gmail.com</a></p>
  </noscript>
```

### Verify

1. View source — preload tags should appear before the stylesheet link.
2. In DevTools, confirm fonts load earlier in the waterfall.
3. Disable JS in DevTools → the noscript message should appear.

---

## Task 9: Wire up Formspree (Contact Form)

**Priority:** P2 — The form currently submits to a placeholder. Leads die here.
**Estimated effort:** 15 min
**Files to modify:**
- `src/pages/Contact.jsx` (line 79)

### Instructions

This requires Isaac's Formspree account. The current code on line 79 of Contact.jsx reads:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**Option A — If Isaac has a Formspree form ID ready:**
Replace `YOUR_FORM_ID` with the actual ID.

**Option B — If no Formspree account exists yet:**
1. Leave a code comment at line 79: `// TODO: Replace YOUR_FORM_ID with actual Formspree form ID — sign up at formspree.io`
2. Create an issue or note: Isaac needs to create a Formspree account, create a form, and paste the ID here.

Also check that the form shows a success/error state after submission. The code already handles `status === 'success'` and `status === 'error'` — verify that these states render visible feedback messages. If not, ensure there are JSX blocks that show:
- Success: "Message sent. I'll be in touch within 48 hours."
- Error: "Something went wrong. Try emailing risaac09@gmail.com directly."

### Verify

1. Submit the form with test data (if Formspree is configured).
2. Confirm the success message appears.
3. Confirm the form clears after success.

---

## Task 10: Add Images to the Site

**Priority:** P2 — A filmmaker's site with zero images is a credibility gap.
**Estimated effort:** 1–2 hours
**Files to create:**
- `public/images/` directory
- At minimum: `og-image.jpg` (from Task 5)
**Files to modify:**
- Potentially `src/pages/Home.jsx`, `src/pages/About.jsx`

### Instructions

This task depends on Isaac having photos available. Check these locations for usable images:

1. `~/rubinstein-productions-toolkit/` — may contain brand assets
2. `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/Second Brain/` — may have photos in attachments
3. `~/Pictures/` or `~/Desktop/` — common photo locations

**If photos are found:**

Create `public/images/` and add them. Use descriptive filenames:
- `isaac-rubinstein-headshot.webp` — for About page
- `camera-kit-shipping.webp` — for Home/Services
- `facilitation-session.webp` — for Home

For each image added:
- Convert to WebP format (use `cwebp` CLI or similar)
- Keep dimensions reasonable (max 1200px wide for content images)
- Add `loading="lazy"` attribute for below-fold images
- Add descriptive `alt` text that includes relevant keywords

Example for About page:
```jsx
<img
  src="/images/isaac-rubinstein-headshot.webp"
  alt="Isaac Rubinstein, facilitator and filmmaker based in Seattle"
  width="600"
  height="800"
  loading="lazy"
/>
```

**If no photos are available:**

Skip this task and leave a clear TODO comment at the top of `Home.jsx` and `About.jsx`:

```jsx
// TODO: Add images — a filmmaker's site needs at least a headshot and a camera-kit photo.
// Place images in public/images/ as WebP with descriptive alt text.
```

### Verify

1. If images were added: they render on the page, have alt text, and appear in DevTools Elements panel with correct attributes.
2. `npm run build` — images should be copied to `dist/images/`.

---

## Task 11: Improve Heading Hierarchy for SEO

**Priority:** P2 — Clean heading structure helps crawlers understand page sections.
**Estimated effort:** 30 min
**Files to modify:**
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Services.jsx`

### Instructions

Audit each page's heading hierarchy. Each page should have:
- Exactly 1 `<h1>` (already the case — good)
- `<h2>` for major sections
- `<h3>` for subsections within h2 sections
- No skipped levels (no h1 → h3 without an h2 between)

Check each page and ensure headings follow a logical, non-skipping hierarchy. If any `<h2>` text is overly poetic and not descriptive of the section content, consider whether a more explicit heading would help crawlers understand the page structure. DO NOT change the visible design — if a heading needs to be more descriptive for SEO but the current wording is better visually, use `aria-label` on the heading to provide the descriptive version, or add a visually-hidden span.

Example — if `<h2>` on Home currently says "Your message doesn't need more polish. It needs metabolizing." that's fine poetically but doesn't tell Google this is the "methodology overview" section. You could add:

```jsx
<h2 aria-label="How the Say Why methodology works">
  Your message doesn't need more polish.<br />It needs metabolizing.
</h2>
```

Be conservative here. Only adjust where the heading provides zero semantic signal.

### Verify

1. Install axe DevTools browser extension (or run Lighthouse) — no heading hierarchy warnings should appear.
2. Manually review: outline view of each page should read like a table of contents.

---

## Task 12: Internal Linking Improvements

**Priority:** P3 — Helps crawlers discover all pages and improves user navigation.
**Estimated effort:** 30 min
**Files to modify:**
- `src/pages/Home.jsx`
- `src/pages/About.jsx`
- `src/pages/Services.jsx`

### Instructions

Add contextual internal links where they make natural sense:

**Home.jsx — Persona cards:**
Each persona card (Mission-Driven Analyst, Newly Independent Consultant, Academic-Turned-Practitioner) should link to the Services page. If they don't already have a CTA, add a subtle `<Link to="/services">` wrapping or a "See the tiers →" link within the card.

**About.jsx — Methodology mention:**
The About page mentions the "Say Why" methodology. Where it does, add an inline `<Link to="/services">` with text like "See the methodology in detail" or similar.

**Services.jsx — About reference:**
The Services page describes the facilitation approach. Add a link to the About page where Isaac's background is mentioned, e.g., "Learn more about Isaac's approach."

Use `<Link>` from react-router-dom, not `<a>` tags, for all internal links.

### Verify

1. Click through the new links — they should navigate correctly.
2. Check that link text is descriptive (not "click here" — use meaningful anchor text).

---

## Post-Completion Checklist

After all tasks, run through this final verification:

- [ ] `npm run build` succeeds with no errors
- [ ] All 5 routes load at distinct URLs (no `#` in any URL)
- [ ] Each page has a unique `<title>` (check browser tabs)
- [ ] Each page has a unique `<meta name="description">`
- [ ] Each page has a `<link rel="canonical">`
- [ ] OG image exists and is referenced in meta tags
- [ ] `robots.txt` is accessible at `/robots.txt`
- [ ] `sitemap.xml` is accessible at `/sitemap.xml`
- [ ] JSON-LD structured data appears on Home, About, Services
- [ ] Skip-link works (Tab → visible → click → focus moves)
- [ ] Contact form labels are properly associated with inputs
- [ ] No console errors on any page
- [ ] Mobile nav still works (resize to 375px)
- [ ] All animations still work (scroll through Home)
- [ ] `npm run build` output in `dist/` includes robots.txt, sitemap.xml, 404.html

---

## What's NOT in this roadmap (future work)

These are important but beyond the current scope:

1. **Content engine / blog** — Requires architectural decisions about where blog content lives (Substack cross-posting? Markdown files in the repo? CMS?)
2. **Google Search Console setup** — Requires domain verification, which needs the site deployed first
3. **Google Business Profile** — Manual setup in Google's interface
4. **Analytics (Plausible/Fathom)** — Requires account creation and billing decision
5. **Backlink strategy** — Ongoing outreach, not a code task
6. **Additional images / photography** — Depends on Isaac having assets ready
7. **Pre-rendering / SSG** — Would be the ideal long-term solution for SEO but requires a significant architecture change (e.g., Vite SSG plugin or switching to Astro). The current SPA + meta hook approach is the right first step.
