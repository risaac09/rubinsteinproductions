# M2 Pro run-book: fold isaacrubinstein.com into Rubinstein Productions

Paste this whole file into a Claude Code session on the M2 Pro, started from the
folder that holds both repos (`~/code` or wherever `rubinsteinproductions/` and
`isaacrubinstein.com/` sit side by side). It is written to be executed, not just read.

> **Status (June 2026): the repo-side port is already done in PR #2.** The
> `/evaluation`, `/writing`, and `/films` routes, the nav and footer wiring, the
> single-Person schema merge, the Open Graph image fix, the sitemap, the README
> fix, and the `_redirects` removal all shipped in that branch and pass
> `npm run build`. What remains for the Mac is the credential and DNS work that
> can only happen on your machine: steps 1 and 2 in "Corrections from the review
> panel" (confirm DNS / disconnect Netlify, keep the old domain and stand up the
> per-URL redirect stubs), the Google Search Console change-of-address, the email
> forward, and re-exporting `cv.pdf` with the new address. Treat the build steps
> below as the record of what was done, and focus on those credential steps.

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
- **Evaluation positioning.** The About, Approach, and Services copy from
  `index.html` (MPH, independent program evaluator, utilization-focused).
- **Method page.** `method/index.html`, "How I structure an evaluation
  engagement."
- **Case study.** `work/central-providence-hez/index.html`, Central Providence
  Health Equity Zone.
- **Writing.** `writing/index.html` plus the two essays:
  - `naming-the-question-is-the-work/`
  - `dashboard-delivery-isnt-dashboard-utilization/`
- **Assets.** `cv.pdf`, `headshot.jpg`, favicons, OG image. Pull what you reuse.

New (not ported, built fresh):
- **Films / vertical video.** The vertical work. Source is YouTube `@risaac09`
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

## Corrections from the review panel (do these, they change the outcome)

A review pass caught five things the steps above get wrong or soft-pedal. Treat
this section as overriding where it conflicts.

1. **Resolve the Netlify connection before any content work, and prove which host
   serves the apex.** The repo is still wired to Netlify (site id
   `8ed4687e-468f-4119-acc9-eb0ba077c6ce` in the README, a `.netlify/` ignore
   line, the `_redirects` file). GitHub Actions going green does not prove users
   see GitHub Pages. Run `dig +short rubinsteinproductions.com A` (GitHub Pages =
   `185.199.108-111.153`) and `curl -sI https://rubinsteinproductions.com` (look
   for `Server: GitHub.com` vs a Netlify `X-NF-Request-Id` header). Then, in the
   Netlify dashboard, disconnect the repo or delete the site so PR pushes stop
   triggering a parallel build. This is a precondition, not a step-8 afterthought.

2. **Do not let isaacrubinstein.com lapse. Keep it registered.** GitHub Pages
   cannot issue a real 301, only a meta-refresh, which Google treats as a soft
   redirect that needs time and a live referring domain to pass link equity. A
   lapsed domain kills that signal and 404s every inbound link permanently. Keep
   it (~$12/yr) pointing at per-URL stubs for at least 12 months, file a Google
   Search Console **Change of Address**, and keep the old `robots.txt` crawlable
   (no `Disallow: /`, or Google never sees the canonical). Map each old URL to its
   specific new route, not all to `/evaluation`: `/method/` to `/evaluation/method`,
   `/work/central-providence-hez/` to `/work/central-providence`, and each
   `/writing/<essay>/` to its new essay route.

3. **The OG image is already broken on RP. Fix it, do not "reuse" it.** `public/`
   ships only `og-image.svg`, but `index.html` and `usePageMeta.js` reference
   `og-image.jpg`, which does not exist, and social platforms do not render SVG
   cards. Port the old site's real raster `og-image.png` (1200x630) into `public/`,
   point the meta tags at it, and add `og:image:width`/`height`.

4. **Reconcile three Person schemas into one, not two.** RP already ships two
   competing graphs: a `ProfessionalService` with a `Person` founder in
   `Home.jsx` and a separate top-level `Person` in `About.jsx`, both
   "Facilitator & Filmmaker." The old site adds a third, "MPH, Program Evaluator,"
   with richer `knowsAbout`/`memberOf`/`address`. Collapse to a single `Person`
   `@id` whose `jobTitle` spans both facets, carry over the old site's
   `knowsAbout`/`memberOf`/`address`, and emit the core JSON-LD in static
   `index.html` so non-JS crawlers see it.

5. **Two smaller traps.** (a) The SPA-on-Pages fallback returns HTTP 404 to
   crawlers for `/evaluation`, `/writing/<essay>`, etc., even though humans see the
   page. Since the whole point is migrating SEO equity to these routes, either
   pre-render the SEO-critical pages to real 200 HTML or at minimum list every new
   route in `sitemap.xml`. (b) `cv.pdf` almost certainly has
   `isaac@isaacrubinstein.com` baked into its text. Re-export it with the new
   address before porting, and forward the old mailbox (which requires keeping the
   domain, see point 2). Do not port the old IR/MPH favicons; they are the wrong
   brand. Generate `favicon.ico` + `apple-touch-icon.png` from RP's own mark.

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
