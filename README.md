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

Netlify serves production (DNS points there; `server: Netlify`), deployed via
the CLI recipe in the netlify-deploy memory. Pushing to `main` runs
`.github/workflows/deploy.yml`, which builds with Vite and publishes `dist/` to
GitHub Pages as a mirror, not the live site. Merging to main does not ship until
the Netlify deploy runs. The custom domain is set by `public/CNAME`.

```bash
# manual build (CI does this for you)
npm run build
```

## License

Code is MIT, see `LICENSE`. Site copy, images, film stills, and brand assets remain the property of Rubinstein Productions.
