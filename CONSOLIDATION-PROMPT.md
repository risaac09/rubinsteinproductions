# M2 Pro run-book: fold isaacrubinstein.com into Rubinstein Productions

Paste this whole file into a Claude Code session on the M2 Pro, started from the
folder that holds both repos (`~/code` or wherever `rubinsteinproductions/` and
`isaacrubinstein.com/` sit side by side). It is written to be executed, not just read.

---

## First, the truth about where these sites live

Before you touch anything, correct one assumption: **none of these sites are
served from the M2 Pro.** The Mac is the authoring and deploy box. The bytes are
served by GitHub. Verified topology as of June 2026:

| Property | Repo | Host | Trigger |
|---|---|---|---|
| `rubinsteinproductions.com` | `risaac09/rubinsteinproductions` | GitHub Pages | `.github/workflows/deploy.yml` runs on push to `main`, builds Vite, publishes `dist/` |
| `rubinsteinproductions.com/hr1-tracker/` | same repo, `public/hr1-tracker/` | GitHub Pages | ships with the Vite build, already live |
| `isaacrubinstein.com` | `risaac09/isaacrubinstein.com` | GitHub Pages | static, `CNAME` + repo Pages setting |
| `risaac09.github.io/royal-metrics` | `risaac09/royal-metrics` | GitHub Pages | static PWA, internal business dashboard |

Two stale things to clean up while you are in there:
- `rubinsteinproductions/README.md` says "Deployed via Netlify" and gives a
  `netlify-cli deploy` command. That is no longer how it ships. The live path is
  the GitHub Actions workflow above. `public/_redirects` is a Netlify-only file
  and does nothing on GitHub Pages; the SPA fallback is handled by
  `public/404.html`. Fix the README to describe the GitHub Pages flow and delete
  `_redirects` (confirm `404.html` is doing the SPA fallback first).
- The RP footer already links to `isaacrubinstein.com` as "Evaluation Practice".
  That link gets repointed to the new in-site `/evaluation` route below.

The "Royal Metrics" dashboard is a private business tracker. Leave it where it
is. It is not part of this consolidation.

---

## The goal

One business address: **rubinsteinproductions.com**. Isaac is one person with a
range, not two brands. After this, the evaluation practice, the writing, and the
vertical-video work all live under Rubinstein Productions. The
`isaacrubinstein.com` domain gets retired once its content is ported.

Decisions already made (do not re-litigate):
1. **Retire `isaacrubinstein.com` fully** once content is ported. Let the domain
   lapse and archive the repo. (Optional safety net: before lapse, replace the
   repo contents with a meta-refresh stub so old links land on the new home
   instead of 404ing. Recommended for the first 60–90 days even if retiring.)
2. **Evaluation is a first-class section** inside RP: its own nav presence,
   services, the Central Providence case study, and the method page.
3. **Writing and Films are first-class sections** too: `/writing` for the essays,
   `/films` for the vertical-video work.

---

## What to port (inventory, already confirmed to exist)

From `isaacrubinstein.com/`:
- **Evaluation positioning** — the About, Approach, and Services copy from
  `index.html` (MPH, independent program evaluator, utilization-focused).
- **Method page** — `method/index.html`, "How I structure an evaluation
  engagement."
- **Case study** — `work/central-providence-hez/index.html`, Central Providence
  Health Equity Zone.
- **Writing** — `writing/index.html` plus the two essays:
  - `naming-the-question-is-the-work/`
  - `dashboard-delivery-isnt-dashboard-utilization/`
- **Assets** — `cv.pdf`, `headshot.jpg`, favicons, OG image. Pull what you reuse.

New (not ported, built fresh):
- **Films / vertical video** — the vertical work. Source is YouTube `@risaac09`
  (Shorts). Build a simple responsive gallery that embeds them. No new
  dependencies; use plain `<iframe>` lite-embeds or thumbnail-to-YouTube links so
  it stays fast.

---

## Steps

The RP app is React 19 + Vite + react-router (`src/App.jsx`,
`src/components/Nav.jsx`, `src/pages/`). Follow the existing page/CSS pattern
(one `.jsx` + one `.css` per page, GSAP scroll hooks via
`useScrollAnimations`). Match the existing voice and the marrow/bone/blood/ash
design tokens in `src/styles/design-system.css`.

### 1. Branch and baseline
- Work on a feature branch off `main`. Run `npm install` then `npm run dev` and
  confirm the current site builds and renders before changing anything.

### 2. Add the Evaluation section
- New route `/evaluation` (`src/pages/Evaluation.jsx` + `.css`), registered in
  `src/App.jsx`.
- Port the evaluator About/Approach/Services copy. Rewrite it so it reads as one
  facet of RP, not a separate person. Keep the MPH credential and the
  utilization-of-findings angle, which is the differentiator.
- Port the method page content as a sub-section or `/evaluation/method`.
- Port the Central Providence case study. Decide: its own `/work/...` route or a
  section inside `/evaluation`. Given the IA below, a `/work/central-providence`
  route linked from Evaluation reads cleanest.

### 3. Add the Writing section
- New route `/writing` listing the essays, newest first (the source page is
  `<ol reversed>` with date + read-time meta; preserve that).
- Port both essays as individual routes or as long-form entries. Keep the deks.
- The writing index dek to reuse: "Short essays on evaluation practice, the parts
  of the work that don't make it into the report."

### 4. Add the Films section
- New route `/films` (`src/pages/Films.jsx` + `.css`).
- Responsive vertical-video grid (9:16 cards). Embed or link the `@risaac09`
  YouTube vertical pieces. Privacy-light embeds (`youtube-nocookie.com`) or
  click-to-load thumbnails so the page stays fast and the Lighthouse score holds.
- Leave a clear, repeatable pattern so adding the next clip is a one-line data
  entry, not a layout rebuild.

### 5. Navigation and information architecture
- Current nav: Home · About · Services · Contact.
- Target sections: Home, About, Services, Evaluation, Writing, Films, Contact.
  Seven top-level items is heavy on mobile. Recommended compromise: keep the top
  nav to **Home · Work · Services · Writing · Contact**, where a "Work" landing
  page fans out to Evaluation, the case study, and Films; or promote Films and
  Writing to the top bar and let Evaluation live as the lead Services pillar plus
  the case study. Pick one and keep the nav under six items. Update
  `src/components/Nav.jsx` and the mobile menu together.
- Repoint the footer "Evaluation Practice" link from `https://isaacrubinstein.com`
  to the in-site `/evaluation` route. Keep the LinkedIn, Substack, YouTube links.

### 6. Identity and metadata
- One email everywhere: **isaac@rubinsteinproductions.com**. The personal site
  used `isaac@isaacrubinstein.com`; either retire that mailbox or forward it.
- Update `StructuredData.jsx`: a single `Person` (Isaac Rubinstein, MPH) plus the
  `ProfessionalService` for RP, with `sameAs` covering LinkedIn, Substack,
  YouTube. Fold the evaluator `Person`/`ProfessionalService` schema from the old
  site into this one. Do not ship two competing `Person` graphs.
- Update `public/sitemap.xml` and `public/robots.txt` to include the new routes.
- Reuse the OG image system already in `public/`.

### 7. Retire isaacrubinstein.com
- After the RP build is live and verified, decommission the old repo.
- Safety net (recommended for ~60–90 days even though the call is to retire):
  replace `isaacrubinstein.com/index.html` and the sub-pages with redirect stubs
  pointing at the matching new URLs, so existing links and search results land
  somewhere useful:
  ```html
  <!doctype html><meta charset="utf-8">
  <title>Rubinstein Productions</title>
  <link rel="canonical" href="https://rubinsteinproductions.com/evaluation">
  <meta http-equiv="refresh" content="0; url=https://rubinsteinproductions.com/evaluation">
  <a href="https://rubinsteinproductions.com/evaluation">rubinsteinproductions.com</a>
  ```
  Map old paths to new ones: `/` and `/method` and `/work/...` to `/evaluation`,
  `/writing/...` to the new `/writing` entries.
- When you let the domain lapse, archive the GitHub repo (Settings → Archive) so
  it stays as a record without a live Pages deploy.

### 8. Deploy and verify
- Merge the RP branch to `main`. The push triggers `deploy.yml`. Watch the run
  to green (`gh run watch` or the Actions tab).
- Confirm DNS for `rubinsteinproductions.com` is unchanged and the apex still
  resolves to GitHub Pages.
- Verification checklist:
  - [ ] `/evaluation`, `/writing`, `/films` all render and are reachable from nav
  - [ ] Deep-linking to a sub-route works (the `404.html` SPA fallback handles it)
  - [ ] `/hr1-tracker/` still loads (regression check)
  - [ ] Footer "Evaluation Practice" points in-site, not to the old domain
  - [ ] One email and one `Person` schema across the site
  - [ ] `sitemap.xml` lists the new routes; resubmit in Google Search Console
  - [ ] Lighthouse holds 95+ perf / 100 a11y on the new pages
  - [ ] Old `isaacrubinstein.com` URLs redirect (if you kept the safety-net stub)
  - [ ] `README.md` describes the GitHub Pages deploy, not Netlify; `_redirects` gone

---

## Voice and guardrails

- House voice: no em-dashes, no rule-of-three filler, active voice, concrete
  nouns, short sentences. The evaluation copy stays plain and professional, not
  lyrical. It is work he is selling.
- No new framework or build step. Vanilla React + Vite as it stands. No charting
  or animation libraries beyond GSAP, which is already in.
- Do not touch `royal-metrics`. It is a separate private tracker.
- Commit in small, described steps. Push only the consolidation branch. Open the
  PR, do not self-merge until the checklist is green.
