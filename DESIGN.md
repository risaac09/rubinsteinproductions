---
version: alpha
name: Rubinstein Productions
description: The Digital Liver system. Five colors that name stages of metabolic work, two typefaces, hairline grids, square corners, earned space. Sharp. Honest. No gradients. No shadows. No rounded corners.
# Source of truth: src/styles/design-system.css. The vault mirror is .obsidian/snippets/rp-brand.css.
# This file is the portable contract. If a value changes in design-system.css, update this file in the same commit.
colors:
  primary: "#1a1412"       # Marrow. What arrives, dark and raw.
  blood: "#8b2e1c"         # Oxblood. The organ itself.
  blood-bright: "#c24631"  # Blood graded up for dark surfaces (vault dark mode h2).
  amber: "#c8923a"         # Bile. What has been processed.
  amber-bright: "#e0a94a"  # Amber hover grade on dark surfaces.
  bone: "#f2ece4"          # Filtered clean output.
  ash: "#a89e93"           # What departs.
  surface: "#faf8f5"       # Warm white. The page.
typography:
  display:
    fontFamily: EB Garamond
    fontSize: 5.5rem
    fontWeight: 400
    lineHeight: 1.05
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 2.6rem
    fontWeight: 400
    lineHeight: 1.2
  headline-md:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: 400
    lineHeight: 1.3
  numeral:
    fontFamily: EB Garamond
    fontSize: 2rem
    fontWeight: 400
    lineHeight: 1
  lede:
    fontFamily: Inter
    fontSize: 1.1rem
    fontWeight: 300
    lineHeight: 1.7
  body:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 300
    lineHeight: 1.7
  body-sm:
    fontFamily: Inter
    fontSize: 0.85rem
    fontWeight: 300
    lineHeight: 1.6
  form:
    fontFamily: Inter
    fontSize: 0.9rem
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.65rem
    fontWeight: 500
    letterSpacing: 0.18em
rounded:
  DEFAULT: 0px
  full: 9999px
spacing:
  xs: 0.5rem
  sm: 1rem
  md: 2rem
  lg: 4rem
  xl: 6rem
  2xl: 8rem
  nav: 64px
  hairline: 1px
  divider: 40px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.9rem 2rem"
    border: "1px solid {colors.primary}"
  button-primary-hover:
    backgroundColor: "{colors.blood}"
    textColor: "{colors.bone}"
    border: "1px solid {colors.blood}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.9rem 2rem"
    border: "1px solid {colors.ash}"
  input-text:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.form}"
    rounded: "{rounded.DEFAULT}"
    padding: "0.8rem 1rem"
    border: "1px solid rgba(168, 158, 147, 0.5)"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.DEFAULT}"
    padding: 2rem
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ash}"
---

# Design System: Rubinstein Productions

## Overview

This is the Digital Liver system: the visual identity of Rubinstein Productions and its Say Why sub-brand. The palette does not decorate. Each color names a stage of the organ's work, from what arrives dark and raw to what emerges filtered and clean. The design holds space the way the practice does: it stays quiet so the person speaking can be heard.

The constitution is one line, and it lives at the top of `src/styles/design-system.css`: **Sharp. Honest. No gradients. No shadows. No rounded corners.**

What this system refuses: No gradients on product surfaces. No drop shadows beyond two named exceptions. No rounded containers. No glassmorphism, no neon, no AI-default indigo. No parallax decoration. No element that exists only to look professional.

The emotional target: an artifact recovered from an institution that studies aliveness. Specimen-jar precision carried by literary warmth. The page reads as a place where someone is about to say the true thing.

**The Firewall.** This file governs Brand B only: rubinsteinproductions.com, Say Why materials, and the Obsidian vault theme. The sibling identity (Ink/Ochre/Teal at isaacrubinstein.com, the evaluation practice) is a separate system with a hard wall between them. Never import its palette, its typefaces, or its plain clinical register here; never let this brand's metabolic vocabulary leak there. The Alchemy/Metabolizer product line is a third surface with its own voice. Do not blur them.

**The Two Dialects Rule.** The system speaks two dialects. The public site is the formal register: upright Garamond 400 headings, square reading chrome, amber never on hover. The vault is the private dialect: italic 500 headings, 4px callouts, 3px tags, amber hover states. Vault allowances never migrate to the site, and site law does not flatten the vault. Wherever this file says private dialect, it means vault-only.

**Sources of truth.** Site tokens: `src/styles/design-system.css`. Vault mirror: `.obsidian/snippets/rp-brand.css` in the vault. Brand narrative: `RP-Brand-Kit.md` in the vault brand folder. When you need a value, reference the CSS custom property; hand-typed hex values are a defect even when they match.

**Voice.** Direct and warm. Honest before polished. No em-dashes anywhere, including microcopy and code comments. No promotional adjectives. No rule-of-three cadences. Words do not explain; words name.

## Colors

Six values constitute the entire vocabulary. Each carries the weight of its biological analogue. They are not colors chosen for beauty; they are colors earned through metabolic logic.

- **Marrow (#1a1412):** What arrives, dark and raw. A deep liver-dark, almost black. Grounds everything: page-scale dark sections, the footer, primary text on light surfaces, the nav wordmark. Marrow is the container in which the work occurs, not emptiness.
- **Blood (#8b2e1c):** Oxblood, the organ itself. Activates: emphasis words inside hero headlines, method-step numerals, list markers, the period mark, button hover fills, the featured tier's glow. Used with the restraint of a surgeon: one incision, precisely placed.
- **Amber (#c8923a):** Bile, what has been processed and emerged keepable. Marks passage: time markers, tier price labels, the footer wordmark rule, the highlighted verb on dark sections, vault horizontal rules. Amber is a verdict, not a highlight color.
- **Bone (#f2ece4):** The clean output, the page after digestion. Text on marrow, card fills in the reading environment, alternating table rows.
- **Ash (#a89e93):** What departs. Metadata, captions, dividers, nav links at rest, the hairlines inside grids. Visible but already releasing.
- **Warm White (#faf8f5):** The page itself. Warm, not clinical. Body background and the fill behind hairline-grid cells.

Dark-surface grades exist for two colors only: **Blood Bright (#c24631)** where blood must read as type on marrow, and **Amber Bright (#e0a94a)** as the hover grade on dark. The six base hexes never change between surfaces or modes; only roles remap.

**Token names.** The CSS custom properties are `--marrow`, `--blood`, `--amber`, `--bone`, `--ash`, `--white`, plus `--blood-bright` and `--amber-bright`. In this file's component specs `{colors.primary}` resolves to `--marrow` and `{colors.surface}` to `--white`; every other key maps by its own name. Reference the property, never the hex.

### Color Rules

**The One Incision Rule.** Blood is emphasis, never decoration. One blood moment per surface: the emphasized phrase in a hero, the featured tier, the period separator. If two elements compete for blood on the same screen, one of them is wrong. Blood never fills large areas except full-bleed Say Why deck slides.

**The Amber Marks Passage Rule.** Amber belongs to things that have been processed: time, price, the rule under the footer wordmark. Amber never colors a full site heading; the single emphasized word inside a dark-section headline is the sanctioned exception, per the Surface Emphasis Rule. Amber never appears as a hover state on the public site (the private dialect differs, per the Two Dialects Rule).

**The Surface Emphasis Rule.** On light surfaces, emphasis is blood. On marrow surfaces, emphasis is amber. This is why the homepage hero italicizes its key phrase in blood while the dark metabolize section highlights its verb in amber, and why Say Why deck taglines emphasize in amber. Small blood type sits directly on marrow only at the brightened grade.

**The Ash Is Departure Rule.** Ash text is reserved for content already releasing: captions, metadata, labels at rest. Anything a reader must read is marrow on light or bone on dark. Be honest about the trade: ash on warm white sits below WCAG AA at small sizes, so it is tolerated only for non-essential, non-interactive metadata and tracked uppercase labels, never for body copy, instructions, or anything load-bearing.

**The Alpha Discipline Rule.** Transparency is for hairlines, not for color washes. Ash runs at 0.15 to 0.5 alpha for borders and strikethroughs; blood runs at alpha only inside the featured tier's glow and its mobile degrade border. Do not introduce translucent fills, frosted panels, or tinted overlays.

**The Status Mapping Rule (vault).** Callouts map to the palette by temperature: note and info families take ash, tip and success families take amber, warning and danger families take blood. Semantic color signals status, never decoration.

## Typography

Two faces carry everything, with a service face in the vault.

- **EB Garamond** is the voice that asks the question: headlines, taglines, pull quotes, time cells, roman numerals. Weight 400. On the public site headings stand **upright**; italic is reserved for emphasis spans, time cells, quotes, and "Productions" in the wordmark.
- **Inter** is the scaffolding that holds space: body at weight 300 (light enough to breathe), labels and navigation at 500. Nothing heavier on the site.
- **Geist Mono** appears only in the vault, for code, tags, and dates. Monospace is for systems and data, per the visual philosophy, and has no role on the public site today.

The root is **18px** (1rem = 18px). Body is Inter 300 at 1rem with line-height 1.7. This is deliberate: at 18px, weight 300 reads light and unhurried, not faint. An agent will be tempted to "fix" the body weight to 400. Do not normalize it.

### Hierarchy

Sizes on the site are fluid; the tokens above carry the maxima. The four anchor clamps are law; intermediate section heads interpolate between adjacent anchors:

- **Display (home hero):** EB Garamond 400, `clamp(3rem, 7vw, 5.5rem)`, line-height 1.05. Emphasis span in blood italic.
- **Interior heroes:** EB Garamond 400, `clamp(2.4rem, 5.5vw, 4rem)`, line-height 1.1 (Contact runs 1.05).
- **Headline lg (dark sections, offerings):** EB Garamond 400, `clamp(1.8rem, 4vw, 2.6rem)`, line-height 1.2.
- **Headline md (section heads):** EB Garamond 400, `clamp(1.5rem, 3vw, 2rem)`, line-height 1.3.
- **Intermediates:** pages tune clamps between the anchors, 1.5 to 2.4rem at 3 to 3.5vw; the home CTA peaks at `clamp(2rem, 5vw, 3.5rem)`.
- **Numerals:** EB Garamond 400, blood, roman numerals, line-height 1. Method steps run 2rem; methodology rows run 2.5rem.
- **Lede:** Inter 300 at 1.05 to 1.1rem, ash, max-width 480 to 520px.
- **Body:** Inter 300 at 1rem, line-height 1.7, marrow.
- **Card body:** Inter 300 at 0.8 to 0.9rem, line-height 1.5 to 1.6, ash.
- **Label:** Inter 500 at 0.65rem, uppercase, tracked.

### Typography Rules

**The Two Faces Rule.** Garamond asks, Inter holds. Never set a headline in Inter, never set body copy in Garamond (the About lede, Garamond 400 at 1.25rem, is the single sanctioned exception). Never introduce a third face on the public site.

**The Posture Rule.** Public surfaces set headings upright at weight 400. The vault theme sets headings in Garamond italic at 500 with -0.01em tracking; that is the private dialect for the reading environment, not a license to italicize headings on the site. Italic on the site means emphasis, quotation, or time.

**The Tracked Caps Rule.** Small-caps labels are always Inter 500 uppercase. Size and tracking tune to context and are not tokenized: 0.18em at 0.65rem for buttons and standalone labels, 0.12em for nav links and form labels, 0.18 to 0.2em at 0.6rem for grid cell labels, 0.22em on dense deck labels, up to 0.5em on the footer wordmark. Family, weight, and case never vary. Tracked caps are short: a few words, never sentences.

**The Weight Ceiling Rule.** The site loads Inter 300, 400, 500 and Garamond 400 plus italic 400, and nothing heavier. There is no bold-as-hierarchy; hierarchy comes from size, face, color, and space. Do not load heavier weights to make something "pop."

### The Wordmark

The wordmark is typographic, layered by context, never a drawn logo on general surfaces:

- **Nav lockup:** the 28px monogram (marrow square with a corner radius of 10% of its side, rx 12 in the 120-unit viewBox, about 2.8px as rendered; bone R and blood P; a vertical ash seam at 0.5 alpha) beside a two-line stack: RUBINSTEIN in Inter 0.55rem, 500, 0.18em tracking, uppercase, marrow; Productions in EB Garamond 0.75rem italic, ash. Below 768px the lockup drops the Garamond line: monogram plus RUBINSTEIN only.
- **Footer lockup:** the stack centered on marrow: RUBINSTEIN in bone at 0.5em tracking, a 40 by 1px amber rule, Productions in Garamond 0.95rem italic ash. The amber rule between the lines is part of the mark.
- **The Period:** a small blood circle, the brand in its smallest form. It serves as bullet, separator, and full stop.
- **The Liver Mark** (nested ellipses: ash outer, blood inner, amber center) is reserved for Say Why materials plus one sanctioned site placement: the homepage metabolize section, where the metaphor is introduced. Do not place it anywhere else on general RP surfaces.

## Layout

Space is the primary material. Not negative space in the minimalist tradition, but metabolic space: the pause between intake and output. The margins are physiological; the scale below is exact.

- **Scale:** 0.5 / 1 / 2 / 4 / 6 / 8rem (xs through 2xl) on the 18px root. Sections breathe at 6rem vertical, 2rem horizontal. Heroes fill the viewport (min-height 100vh) under the fixed 64px nav.
- **Measures:** 720px narrow column, 900px wide column, 800px hero inner. Long-form reading in the vault runs 680 to 720px.
- **Rhythm:** large quiet fields punctuated by dense, information-rich clusters. Scale relationships are deliberate and asymmetric. If every section has the same density, the page has no metabolism.
- **Breakpoints:** 768px is the structural break (nav collapses, grids stack, hero pinning disables); 480px collapses the last multi-column grids.

### Layout Rules

**The Hairline Grid Rule.** The signature structural move: multi-cell grids use `gap: 1px` with ash showing through as the rule, each cell carrying its own background. No borders on cells, no boxes inside boxes. The persona grid is the one open exception, 2rem gaps with a 2px solid blood top border per card.

**The Divider Rule.** Dividers are 40 by 1px. Ash on the site at full opacity; ash at 0.3 alpha on 1080px cards and decks where the field is larger; amber only under the footer wordmark. A divider is a breath, not a border: it never spans full width except above methodology rows.

**The Structure Is Drawn Rule.** Structure comes from hairlines and surface changes (warm white, bone, marrow), never from containment chrome. If you are about to add a box, try a hairline or a surface shift first.

## Elevation & Depth

The system is flat by law. Hierarchy is conveyed through hairlines, surface alternation, type contrast, and space.

Two named exceptions, both self-documenting in the CSS:

- **The Nav Hairline.** On scroll, the fixed nav gains `box-shadow: 0 1px 0` in ash at 0.25 alpha. It is a hairline wearing a shadow's syntax, not an elevation effect.
- **The Featured Tier Glow.** The featured pricing card carries a 1px blood ring at 0.25 alpha plus a 1px inset blood ring at 0.1 alpha, the one true shadow exception. Below 768px it degrades to a 2px blood top border at 0.4 alpha (the persona cards' solid blood border is a different element; do not conflate them).

Everything else: no shadows, no glass, no blur except the nav backdrop, no layered elevation model. Gradients are banned on product surfaces; the single sanctioned use is the full-bleed wash on Say Why deck slides (marrow to #2a1e18, 135deg) and video title cards (marrow to #241e1a, 135deg). That is a projection-surface allowance, not a web pattern.

## Shapes

Square corners by law. `rounded.DEFAULT` is 0px and applies to every container: cards, buttons, inputs, images, sections.

Radius exists only on marks, never on surfaces: the monogram and favicon (corner radius proportional, 10% of the mark's side) and the period (a circle). The vault's reading chrome (callouts at 4px, tags at 3px) is part of the private dialect and does not extend to the site.

Marker dialects, all blood, all small: tier lists take a 5 by 5px blood square bullet; deck lists take a blood dash; footer separators take the 4 by 4px blood period. Never default browser bullets, never icons as bullets.

## Components

- **Nav:** fixed, 64px, warm white at 0.92 alpha with 12px backdrop blur. Links are tracked caps in ash, resting; hover and active move to marrow. Color transitions only. Below 768px the links collapse behind a toggle: three 20 by 1px marrow hairlines, 5px apart, transforming to an X on open (outer bars translate 6px and rotate 45 degrees, middle bar fades, 0.3s). The menu panel is warm white at 0.98 alpha with the same 12px blur, opening below the bar with a 1px ash hairline at 0.2 alpha on top, links stacked at 1rem gap.
- **Footer:** marrow ground, centered. The footer lockup (see The Wordmark), links in ash moving to bone, the period as separator, copyright in ash at half opacity.
- **Buttons:** square, label typography. Primary is bone on marrow with a 1px marrow border; hover fills blood. Ghost is marrow on transparent with a 1px ash border; hover sharpens the border to marrow. The CTA link is marrow text over a 1px blood underline with 4px standoff; hover turns the text blood. Padding 0.9rem by 2rem.
- **Forms:** square inputs, Inter 0.9rem at 300, white fill, 1px ash border at 0.5 alpha. Focus removes the outline and sets the border to marrow. Labels are tracked caps in marrow at 0.12em. Errors are small blood text. Nothing glows.
- **Time grid:** three columns separated by 1px hairline gaps, cells alternating warm white and marrow, time cells in Garamond italic.
- **Tier cards:** white cells in a hairline grid; the featured card takes the glow exception. List items separated by near-invisible hairlines (black at 0.06), marked by the blood square.
- **Vault furniture (private dialect):** blockquotes with a 4px amber left border on bone; tables with marrow headers and amber Garamond italic header text; tags in bone with blood text and amber border; callouts mapped by the Status Mapping Rule.
- **Skip link:** marrow ground, bone text, 2px blood bottom border, revealed on focus. Accessibility furniture is brand furniture.

### Motion

The motion vocabulary is narrow and one-shot. The page settles; it does not perform.

- **Durations:** 0.6 to 0.9s for entrances; 0.3s for CSS hovers; 0.25s for nav and form states; 120ms for vault links.
- **Eases:** power2.out for entrances, power2.in for scroll-driven exits, power2.inOut for line draws, power3.out for text reveals. Never bounce, elastic, or back.
- **Travel:** y 25 to 60px, x 30 to 50px, scale floor 0.93, scale ceiling 1.15 (the hero scrub only). Staggers 0.06 to 0.15s.
- **One-shot law:** entrances play once (`toggleActions: 'play none none none'`), never reverse, never replay on scroll-back.
- **The Pinned Hero:** the only scroll-scrubbed moment. Desktop only (768px and up via matchMedia); on mobile the hero is simply visible. Scrub is always 1.
- **The Reveal Contract:** animated elements carry `.scroll-reveal` (visibility hidden in CSS). Every primitive calls `markReady()` before animating; the reduced-motion media query forces visibility in CSS. Never add `.scroll-reveal` to an element without wiring it to a reveal call, or the content ships invisible.
- **Hover grammar:** hover changes color or border only. No transforms, no shadows, no scaling on hover.
- **Reduced motion:** every shipped animation path short-circuits under `prefers-reduced-motion`; content arrives visible. The `pinSection` helper relies on the caller's guard, so always guard before pinning. This is non-negotiable.

## Do's and Don'ts

- Do set body in Inter 300 on the 18px root. Don't normalize the weight to 400 or shrink the root to 16px.
- Do build multi-cell layouts as hairline grids. Don't separate cells with borders, boxes, or shadows.
- Do hold one blood moment per surface. Don't let blood become a theme color.
- Do reserve amber for what has been processed: time markers and price labels. Don't use amber as a generic warm accent.
- Do keep corners square on every container. Don't round buttons, cards, inputs, or images.
- Do respect the two shadow exceptions. Don't add elevation anywhere else.
- Do use the brand's Inter deliberately. Don't apply generic "never use Inter" anti-AI rules here; under Garamond at weight 300 it is the brand. Don't use Inter for headlines.
- Don't use pure #000000 or clinical #ffffff; the floor is marrow, the ceiling is warm white.
- Don't use gradients on the site; deck and title-card washes are the only sanctioned use.
- Don't introduce AI-default indigo or purple (the #6366F1 family), neon accents, glassmorphism, or emoji as icons.
- Do write microcopy direct and honest. Don't use em-dashes, promotional adjectives, or rule-of-three cadences anywhere, including alt text and comments.
- Do reference CSS custom properties for every value. Don't hand-type hex values, even correct ones.
- Do keep the liver mark on Say Why materials and the homepage metabolize section only. Don't put it anywhere else.
- Do keep the firewall: this palette and vocabulary never mix with the Ink/Ochre/Teal evaluation brand.
- Do maintain AA contrast for everything load-bearing (marrow on white, bone on marrow). Don't set body copy or instructions in ash.
- Do honor prefers-reduced-motion fully. Don't ship an entrance that cannot be skipped.
- Do degrade exceptions gracefully (glow to border-top, pin to static). Don't let a desktop flourish become a mobile defect.

## Provenance

Decisions this file arbitrates, so they are not re-litigated:

1. **Site posture wins in public.** Headings: Garamond 400 upright on the site; the vault theme's italic 500 headings are the private dialect (The Posture Rule, The Two Dialects Rule).
2. **Emphasis color is surface-dependent.** Blood on light, amber on dark (The Surface Emphasis Rule). Previously undocumented; now law.
3. **The liver mark's homepage placement is sanctioned.** The shipped metabolize section introduces the metaphor; that one site placement is legal alongside Say Why materials. No further spread.
4. **The time grid gap is 1px.** It shipped at 2px desktop with a 1px override under 480px; the split read as unintentional and was normalized to 1px on 2026-06-11 per the Hairline Grid Rule.
5. **Divider opacity is context-dependent.** Full-opacity ash at site scale, 0.3 alpha at 1080px-card scale; the brand kit's blanket "0.3 opacity" reads as the card spec, not the site spec.
6. **Tracking is tuned, not tokenized.** Small-caps size and letter-spacing vary by context within fixed family, weight, and case (The Tracked Caps Rule).
7. **The deck's 16px root is local to decks.** The brand root is 18px.
8. **Garamond 600 was loaded but never used**; dropped from the font request 2026-06-11 per the Weight Ceiling Rule.
9. **Tagline:** "Say why." The brand kit's "Say the thing." is one generation behind; the deck documents the evolution.
10. **The kit's tier table (Mirror/Map/Territory pricing) is stale** and is not design law; offering names and prices live with the business docs, not here.
11. Ground truth read 2026-06-11 from `src/styles/design-system.css`, component CSS, `useScrollAnimations.js`, vault `rp-brand.css`, `RP-Brand-Kit.md`, `RP-Visual-Philosophy.md`, `Metabolic-Typography-Philosophy.md`, and `rp-logo-concepts.html`.
