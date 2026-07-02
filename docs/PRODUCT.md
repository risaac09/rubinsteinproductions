# rubinsteinproductions

The public site at rubinsteinproductions.com: a React 19 + Vite + GSAP single-page app on GitHub Pages presenting Isaac Rubinstein's facilitation, film, and program evaluation practice. It carries the Say Why offering, the evaluation section, essays, films, a contact form, and the static /hr1-tracker page, and it absorbed the retired isaacrubinstein.com. Tier 2 in the estate, a public view; the spine is stack-data, Tier 1, the operational source of truth, a sibling clone at `../stack-data`. This file is the map of the repo's documentation plus the connective tissue that was missing, chiefly the content runbook and the external dependencies.

## What it is (technical)

React + Vite with react-router, GSAP scroll animations, GitHub Pages hosting, SPA fallback via `public/404.html` decoded by the script in `index.html`. The stack and section map live in `README.md`; the framework-exception rule (React/Vite stays contained to this repo, no new framework surface, no TypeScript, no CSS framework, no dependencies beyond GSAP) lives in `CLAUDE.md`. The design-system contract, tokens, motion law, and the Reveal Contract live in `DESIGN.md` with source of truth in `src/styles/design-system.css`.

Conventions a contributor needs that live only in code today:

- One `.jsx` plus one `.css` per page under `src/pages/`.
- Animation primitives come from `src/hooks/useScrollAnimations.js`; never add a `.scroll-reveal` class without wiring a reveal call, or the content ships invisible (`DESIGN.md`, Reveal Contract).
- Per-route meta via `src/hooks/usePageMeta.js` (title format `X · Site`); per-route JSON-LD references the single canonical Person `@id` `https://rubinsteinproductions.com/#isaac` emitted statically in `index.html`. Never ship a competing Person graph (`CONSOLIDATION-PROMPT.md`, correction 4).
- Content data shapes are documented in the header comments of `src/data/essays.js` (block format: `p`, `q`, `h`) and `src/data/films.js` (`{ id, title, blurb }`, id is a YouTube video or Short id).

External dependencies the site stands on, previously undocumented anywhere in this repo:

- **Services diagnostic iframe.** `src/pages/Services.jsx:371` embeds `https://risaac09.github.io/alchemy-diagnostic/embed.html`, with a postMessage height listener at lines 15-24. The alchemy repo (`/home/user/alchemy/CLAUDE.md`, 2026-06-22) consolidated that diagnostic into alchemy's own `embed.html` and marked the standalone repo redundant and to be archived. Archiving it breaks this page. The migration target is alchemy's `embed.html`, which also posts `{type:'started'}`, `{type:'email',email}`, and `{type:'complete',scores,quadrant}` from its lead-capture funnel.
- **Contact form.** Formspree form `mojpzory` (`src/pages/Contact.jsx:83`), with a sidebar mailto to isaac@rubinsteinproductions.com.
- Google Fonts (EB Garamond, Inter) per `index.html`, and YouTube nocookie embeds on /films and /services.

Gap: where Formspree form mojpzory submissions land and which account owns it; the answer lives in the Formspree dashboard, not in this repo.

## How it runs (operational)

Push to `main` runs `.github/workflows/deploy.yml`: Node 20, `npm ci`, Vite build, publish `dist/` to GitHub Pages. `public/CNAME` pins the custom domain. Local commands are `npm run dev`, `npm run build`, `npm run preview`. No repository secrets beyond the workflow's default GitHub token.

Content runbook, written down here for the first time:

- **Essay:** add a block-format entry to `src/data/essays.js` (shape in its header comment, newest first, slug preserved from the old isaacrubinstein.com/writing path), then add the `/writing/<slug>` URL to `public/sitemap.xml` by hand.
- **Film:** add one `{ id, title, blurb }` object to `verticals` in `src/data/films.js`, or swap `featured`.
- **HR1 tracker:** edit `public/hr1-tracker/index.html` directly; it ships inside the Vite build untouched.
- **Every copy change** passes the `CLAUDE.md` voice rules first. Exception: essay bodies in `essays.js` are authored prose ported verbatim, em-dashes preserved by design; do not normalize them.
- **Sitemap discipline:** `public/sitemap.xml` is hand-maintained; update `lastmod` when a page's content changes.

Consolidation closeout: `CONSOLIDATION-PROMPT.md` lists the remaining Mac-only credential steps (prove the apex serves GitHub Pages, disconnect the Netlify site, keep isaacrubinstein.com registered with per-URL redirect stubs, Google Search Console change of address, forward isaac@isaacrubinstein.com, re-export cv.pdf).

Gap: no completion record exists for those credential steps; nobody can tell from the repo whether Isaac ran them. The answer lives on the M2 Pro and in the registrar, Netlify, and Search Console accounts.

## Why it exists (intellectual)

One person, one address. `CONSOLIDATION-PROMPT.md` records the decision to fold isaacrubinstein.com into rubinsteinproductions.com and marks the settled calls do-not-relitigate. `DESIGN.md` holds the Digital Liver metaphor, the reasoning behind every color, and a provenance section that arbitrates past decisions. `outreach-system.md` holds the core principle, metabolize before you speak, and the Fractal Enclosure framing. The lineage note at the top of `src/data/essays.js` records that essays were ported verbatim with slugs preserved for one-to-one redirects. These four sources cover the dimension; nothing new needed here.

## How it works (methodological)

Two methods live in this repo. `DESIGN.md` maintains the visual system by rule: named laws, sanctioned exceptions, and a provenance log, so a change is either lawful, an exception someone names, or rejected. `outreach-system.md` holds the three-touch Filter/Process/Nourish outreach sequence with its cadence table and the Digital Liver test. The Say Why methodology itself is deliberately documented elsewhere: in the site copy, in `say-why-design-deck.html`, and downstream in the saywhy-app repo. `ROADMAP-SEO.md` records the task-ordered method used to build the SEO layer and is now a historical record, partly stale (see Known drift).

## How it speaks (marketing and comms)

The nine voice rules in `CLAUDE.md` govern all user-facing copy and are named the credibility test; `DESIGN.md` extends them to microcopy, alt text, and code comments, and holds the brand firewall separating RP from the Ink/Ochre/Teal evaluation brand and the Alchemy voice, plus the OG and wordmark rules. Audience definition, channel cadence, and email templates live in `outreach-system.md`, which predates the consolidation and still frames the offering around the retired Mirror language. The comms collateral surfaces sit at the repo root: `brand-cards.html` (LinkedIn card series), `say-why-design-deck.html` (pitch deck), `video-title-cards.html` (video title templates).

The live funnel: the Services page hosts the diagnostic iframe, whose embed-funnel layer (documented only in `/home/user/alchemy/CLAUDE.md`) captures a name, gates the report on an email, and closes with a mailto booking CTA. The shipped offerings on the Services page are Founder Story ($1,500-2,500) and Program Engagement ($3,000-8,000) per `src/pages/Services.jsx`. Pricing model internals stay in rp-intranet and never appear here beyond what the public site itself displays.

## Where it goes (strategic)

Tier 2, a public view over the stack; routing, tier, and session protocol live in `CLAUDE.md`, with the identity frame in `.claude/phase-zero.md` (deployed from the toolkit, never edited in place). Open decisions Isaac has not yet ruled on:

- Repoint the Services iframe to alchemy's consolidated `embed.html` before the standalone alchemy-diagnostic repo is archived. This is the single most fragile dependency the site has.
- Close out and record the consolidation credential steps, then archive `CONSOLIDATION-PROMPT.md` as done.
- Mark `ROADMAP-SEO.md` as an executed historical record at its top and fold its still-open items (analytics decision, pre-rendering question, content engine) into the backlog.

Gap: no doc states whether `brand-cards.html`, `say-why-design-deck.html`, and `video-title-cards.html` are live deliverables, archives, or deletions, nor the status of `_legacy-index.html` and `_legacy-vanilla-homepage/` beyond DEPLOY.md there being historical. Isaac's call, recorded nowhere yet.

Gap: whether the outreach cadence in `outreach-system.md` (March 2026) still runs as written after the consolidation replaced the Mirror offering; the answer would come from Isaac or the stack-data activity log.

## Workflows

Automated:

- `.github/workflows/deploy.yml`: on push to `main` and on `workflow_dispatch`. Node 20, `npm ci`, Vite build, publish `dist/` to GitHub Pages with the custom domain from `public/CNAME`. No named secrets beyond the default workflow token.
- `.claude/settings.json` UserPromptSubmit hook, `.claude/hooks/phase-zero-trigger.sh`: the six phase-zero trigger phrases load the global-awareness kit. Kit files are deployed from `rubinstein-productions-toolkit/phase-zero/`; edit the kit source and redeploy, never the deployed copy.

Manual:

- **Develop and verify:** `npm run dev` while working; `npm run build` before merge per `CONSOLIDATION-PROMPT.md`. Good looks like a clean build and every `.scroll-reveal` element visible after animation.
- **Content updates:** essays in `src/data/essays.js` plus a sitemap entry, films in `src/data/films.js`, tracker in `public/hr1-tracker/index.html`. Good looks like the new page rendering locally with correct meta from `usePageMeta.js` and the sitemap listing the URL.
- **Consolidation closeout:** Isaac runs the remaining steps from `CONSOLIDATION-PROMPT.md` on the M2 Pro (dig/curl proof, Netlify disconnect, redirect stubs, GSC change of address, mailbox forward, cv.pdf re-export). Good looks like each step dated done in that file.
- **Outreach cadence** per `outreach-system.md`: daily LinkedIn engagement, at most 3 Mirror emails per week, invitations as earned, twice-weekly LinkedIn posts from the brand-card series. Content status above notes this doc predates the current offerings.
- **Session close:** "log learnings" runs `.claude/retrospective.md`, logging via stack-data's `scripts/sd-retro`.
- **Legacy only:** `_legacy-vanilla-homepage/serve.sh` and `make-og.sh` serve the retired static bundle; historical, do not extend.

## Known drift

Listed for Isaac to rule on; nothing here was changed by this doc.

1. `src/pages/Services.jsx:371` embeds the alchemy-diagnostic repo's embed.html while `/home/user/alchemy/CLAUDE.md` (2026-06-22) marks that repo redundant and to be archived. Archiving without repointing breaks the Services page.
2. `src/pages/Home.jsx:212` JSON-LD priceRange reads `$500 – $12,000`, the retired Mirror/Map/Territory tiers; the shipped Services prices are $1,500-2,500 and $3,000-8,000. The string also carries a dash the voice rules ban. `DESIGN.md` provenance item 10 already declares the old table stale.
3. `ROADMAP-SEO.md` reads as instructions but describes a finished build with errors: a `/work` route and `src/pages/Work.jsx` that do not exist, `og-image.jpg` versus the shipped `og-image.png`, a sample sitemap with the typo domain `rubensteinproductions.com` and wrong xmlns, `risaac09@gmail.com` as contact fallback versus the site's isaac@rubinsteinproductions.com, title format `X — Site` versus the shipped `X · Site`, and jobTitle `Voice Liberation Specialist` versus the shipped `Facilitator, Filmmaker & Program Evaluator`.
4. `CONSOLIDATION-PROMPT.md` body still describes a Netlify README claim and a `public/_redirects` file, both since fixed; its own June 2026 status note supersedes the body. Its redirect map targets `/work/central-providence`, a route never built.
5. `outreach-system.md` (March 2026) frames the offering around the retired Mirror 90-minute session and is written with em-dashes throughout, at odds with the repo's voice discipline for an internal doc.
6. `index.html:8` meta description says "Facilitation and film for mission-driven professionals" while the static JSON-LD and `README.md` say facilitation, film, and program evaluation; the description missed the moment evaluation became a first-class section.
