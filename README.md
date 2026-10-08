# Rubinstein Productions

Facilitation, film, and program evaluation for people and programs in transition. A camera, a conversation, and a short film that says what you've become.

**Live site:** [rubinsteinproductions.com](https://rubinsteinproductions.com)

## Sections

- **Home / About / Services** — the facilitation and film practice (Say Why)
- **Evaluation** — independent program evaluation (Isaac Rubinstein, MPH)
- **Writing** — short essays on evaluation practice
- **Films** — documentary and vertical-format work
- **/hr1-tracker** — Cross-State H.R. 1 Implementation Tracker (static, in `public/`)
- **/say-why** — Say Why static series page (static, in `public/say-why/`)

## Stack

- React + Vite
- react-router (client-side routing; `public/_redirects` is the Netlify SPA fallback, `public/404.html` covers the GitHub Pages mirror)
- GSAP scroll animations
- Production served by Netlify; GitHub Pages carries a mirror

## Development

```bash
npm install
npm run dev
```

## Deploy

Netlify serves production (DNS points there; `server: Netlify`) and builds
`main` on push, so merging to main ships. It also builds a deploy preview for
every pull request, which is the place to check a change before it lands.

Pushing to `main` additionally runs `.github/workflows/deploy.yml`, which builds
with Vite and publishes `dist/` to GitHub Pages as a mirror, not the live site.
The custom domain is set by `public/CNAME`.

A manual `netlify deploy --prod --dir=dist` stays available for the case where
automatic builds are paused, and it is not part of the normal path. Verified
2026-09-16: PR #30 merged and production served the new asset minutes later,
on a machine with no Netlify CLI installed.

```bash
# manual build (CI does this for you)
npm run build
```

## License

Code is MIT, see `LICENSE`. Site copy, images, film stills, and brand assets remain the property of Rubinstein Productions.
