# CLAUDE.md

## What this repo is
The public site at rubinsteinproductions.com. React + Vite, GSAP, GitHub Pages deploy on push to `main`. React/Vite is the deliberate exception to the stack's vanilla bias; keep the exception contained to this repo and add no new framework surface.

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
- Tier: 2, a public view. The spine is stack-data, Tier 1, the operational source of truth, a sibling clone (`../stack-data`).
- The six phase-zero trigger phrases work here through the deployed `.claude/` kit: "activate all agents", "engage global awareness", "refresh global awareness", "delegate to your orchestrator", "engage the orchestrator", "engage your orchestrator".
- Route research, citation, and lineage tasks to stack-data and its `research-bibliographer` agent.
- Session close is "log learnings"; it runs the retrospective from the kit.
