# Rubinstein Productions

Facilitation, film, and program evaluation for people and programs in transition. A camera, a conversation, and a short film that says what you've become.

**Live site:** [rubinsteinproductions.com](https://rubinsteinproductions.com)

## Sections

- **Home / About / Services** — the facilitation and film practice (Say Why)
- **Evaluation** — independent program evaluation (Isaac Rubinstein, MPH)
- **Writing** — short essays on evaluation practice
- **Films** — documentary and vertical-format work
- **/hr1-tracker** — Cross-State H.R. 1 Implementation Tracker (static, in `public/`)

## Stack

- React + Vite
- react-router (client-side routing; `public/404.html` is the SPA fallback on GitHub Pages)
- GSAP scroll animations
- Hosted on GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Deploy

Deployment is automatic. Pushing to `main` runs `.github/workflows/deploy.yml`,
which builds with Vite and publishes `dist/` to GitHub Pages. The custom domain
is set by `public/CNAME`.

```bash
# manual build (CI does this for you)
npm run build
```
