# CLAUDE.md

## What this repo is
The public site at rubinsteinproductions.com. React + Vite, GSAP. PRODUCTION IS SERVED BY NETLIFY (DNS points there; `server: Netlify`), deployed via the CLI recipe in the netlify-deploy memory; the GitHub Pages deploy on push to `main` is a mirror, not the live site. Merging to main does NOT ship until the Netlify deploy runs. React/Vite is the deliberate exception to the stack's vanilla bias; keep the exception contained to this repo and add no new framework surface.

## Voice rules, apply to ALL user-facing copy
This is the credibility test. Failures kill the product. If you change copy, run it past these rules first.

- No em-dashes. Use commas or periods.
- No rule-of-three (three-part lists where the third item is filler). Two beats three. Four+ items as honest enumeration is fine.
- No throat-clearing openers ("Here's the thing:", "Let me be clear", "The truth is,").
- No false agency. Inanimate things don't act. Name the human.
- No vague declaratives ("the implications are significant", "the stakes are high"). Name the specific thing.
- No adverb stacking ("really", "just", "literally", "genuinely", "honestly", "actually").
- No business jargon ("leverage", "navigate", "deep dive", "lean into").
- No binary contrasts ("not X, it's Y"). State Y.
- No staccato. Vary sentence length. Long, long, longer, short.

## Routing
- Tier: 2, a public view. Phase-zero triggers and session close come from the deployed `.claude/` kit (source: `rubinstein-productions-toolkit/phase-zero/`); research, citation, and lineage go to stack-data's `research-bibliographer` agent.

## Model routing
The routing check is injected at session start by the phase-zero kit (`.claude/model-routing.md`). Canonical source: `rubinstein-productions-toolkit/phase-zero/model-routing.md`; edit it there and redeploy. Local note: most site copy and component work lands at the Sonnet tier.
