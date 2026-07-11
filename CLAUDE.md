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

## Model routing check
Before starting any substantive task, name the model and effort that fit it, then ask before proceeding. Do not switch silently.
- Open with one line: task type, recommended model, effort level, cost tradeoff. Prices per 1M tokens in/out: Fable 5 $10/$50, Opus 4.8 $5/$25, Sonnet 5 $3/$15, Haiku 4.5 $1/$5.
- Isaac confirms, adjusts, or overrides. His answer wins. Once he decides, proceed and do not raise it again this session.

Routing defaults:
- Orchestration, architecture, hard reasoning, final synthesis: Opus 4.8 at high or xhigh.
- The single hardest long-horizon task worth the premium: Fable 5, sweep effort low to high.
- Component edits, extraction, research legwork: Sonnet 5 at medium. Most site copy and component work lands here.
- Bulk reads, search, mechanical edits, validation: Haiku 4.5 at low.
- Deterministic work with no judgment: a script, not a model call.

Model and effort are separate levers. The right setting can be the same model at a lower effort. The suggestion is a prompt, not a gate. If Isaac says "just go," take the default and move.
