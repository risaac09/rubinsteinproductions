# Rubinstein Productions — Token Reference

> Single source of truth for the visual & narrative system.
> Every artifact (deck · toolkit · bio · proposal) reads from `tokens.css`. This file mirrors those tokens in plain markdown for the vault.

**Arc:** april 2026 → september 25, 2027 · 17 months · v 1.0 · 2027

---

## Palette · core

| Token | Hex | Use |
|---|---|---|
| `--rp-ink` | `#0E0B08` | primary field, near-black warm |
| `--rp-ink-2` | `#141009` | card / panel surface |
| `--rp-ink-3` | `#1B160E` | hover / emphasis |
| `--rp-rule` | `#2A2218` | hairline rules, dividers |
| `--rp-grid` | `#1A1610` | blueprint grid underlay |
| `--rp-oat` | `#E8DEC9` | primary display color, cream |
| `--rp-oat-dim` | `#B5A98F` | secondary text |
| `--rp-mute` | `#6E6450` | metadata, monospace chrome |
| `--rp-mute-2` | `#4A412F` | faint metadata |

## Palette · accents

| Token | Hex | Role |
|---|---|---|
| `--rp-gold` | `#C8922E` | primary accent — umber gold |
| `--rp-gold-soft` | `#8E6820` | gold deep |
| `--rp-gold-glow` | `#E5B14A` | gold light |
| `--rp-blue` | `#6B92B8` | practitioner / cognition |
| `--rp-blue-deep` | `#3E587A` | — |
| `--rp-teal` | `#4F8A82` | flow / integration |
| `--rp-oxblood` | `#8C3A2E` | threshold / soma |
| `--rp-oxblood-d` | `#5C261D` | — |

---

## Type stack

| Family | Use |
|---|---|
| **Oswald** (display) | all-caps headlines, plate titles, posters |
| **Cormorant Garamond** (serif italic) | tags, mottos, breath text, openings |
| **JetBrains Mono** (mono) | metadata, labels, plate chrome, all numbers in chrome |

### Scale (anchored 16px base)

| Token | px | Use |
|---|---|---|
| `--rp-fs-meta` | 11 | footer chrome |
| `--rp-fs-mono` | 13 | metadata |
| `--rp-fs-body` | 15 | running text |
| `--rp-fs-tag` | 20 | serif italic tags |
| `--rp-fs-h4` | 24 | small heads |
| `--rp-fs-h3` | 32 | section heads |
| `--rp-fs-h2` | 48 | plate titles |
| `--rp-fs-h1` | 72 | poster headlines |
| `--rp-fs-display` | 128 | numerics ("25") |

---

## Spacing — 8px base

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

## Motion

| Token | Duration | Use |
|---|---|---|
| `--rp-dur-instant` | 80ms | hover, micro |
| `--rp-dur-quick` | 180ms | reveals |
| `--rp-dur-base` | 320ms | most transitions |
| `--rp-dur-slow` | 640ms | section change |
| `--rp-dur-breath` | 1200ms | ambient pulse |
| `--rp-dur-glacial` | 2400ms | atmospheric |

Easings: `standard` · `emphasis` · `exit` · `breath` (sine-ish, for ambient).

---

## Vocabulary — naming dictionary

| Term | Definition |
|---|---|
| **the digital liver** | metabolize · not archive |
| **sift** | signal · integration · flow · threshold |
| **the arc** | april 2026 → september 25, 2027 (17 months) |
| **the stack** | soma · cognition · expression |
| **the vault** | personal knowledge metabolism system |
| **the loop** | practitioner ↔ patient |
| **the inside version, made public** | say the thing |
| **one arc · one year · one voice** | rp · 2027 |

---

## Voice & rules

- **Lowercase mono** for all chrome/metadata. Never decorative caps.
- **Serif italic** is for openings, mottos, breath. Never for body text.
- **Display** is uppercase, condensed, tight tracking. Never for sentences.
- **One accent at a time** per surface. Gold is default. Teal/oxblood are situational.
- **Hairline rules** (1px) over heavy borders. Negative space over containers.
- **Numbers are typeset.** Never abbreviate the date — always "september 25, 2027".

---

## File map

```
tokens.css            → all CSS variables + accent themes + reset
deck.css              → deck-level layout primitives
RP Design Architecture.html  → the system itself, as slides
RP Operations Toolkit.html   → publish-ready artifacts (signature, cards, social)
RP About.html         → long-scroll bio, public link
RP Proposal Template.html    → 12-slide proposal scaffold
assets/plates/        → the ten plates (PNG, 1200×1500)
```

> When in doubt: change the token, change the world.
