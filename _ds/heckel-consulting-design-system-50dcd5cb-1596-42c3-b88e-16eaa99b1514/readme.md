# Heckel Consulting — Design System

A brand & UI system for **Heckel Consulting**, the consulting venture of Michael Heckel
(owner of *Prime Media Solution*, Neuburg an der Donau). It extends the Prime Media Solution
visual identity — the rising-bars mark and its blue→cyan gradient — into a full toolkit for
building the marketing website, client proposals/decks, PDF reports and general CI materials.

> **One-file entry point:** consumers link **`styles.css`**. It `@import`s every token and font file.
> Components are bundled automatically into `_ds_bundle.js` and exposed on
> `window.HeckelConsultingDesignSystem_50dcd5`.

---

## 1. Context & sources

- **Brand owner:** Michael Heckel · Prime Media Solution, Längenmühlweg 17, 86633 Neuburg an der Donau.
- **What the business does:** planbare Kundengewinnung und Recruiting über datengetriebene
  Social-Media-Kampagnen, gestützt durch KI-basierte Marktanalysen. Heckel Consulting positions
  this expertise as advisory/consulting.
- **Supplied source asset:** the logo `assets/logo-prime-media-full.png` (uploaded as
  *BASIS NEU DESIGN.png*). The blue→cyan gradient of its three rising bars is the origin of the
  entire color system. The isolated, transparent mark is `assets/mark.png`.
- **Reference website:** https://primemediasolution.de (colors were derived from the supplied logo,
  not scraped from the site).

### Known gaps / assumptions
- **Heckel mark:** `assets/mark.png` is now an original **"H" monogram** — two uprights joined by a
  rising crossbar, in the blue→cyan brand gradient — paired with the **Montserrat wordmark** ("Heckel"
  + wide-tracked "Consulting"). It keeps the ascending-growth energy of the source logo without
  borrowing the Prime Media bars. The retired bar mark is archived at `assets/mark-prime-media.png`.
- The brand voice/examples assume the Prime-Media-Solution field (marketing, recruiting, social,
  AI). If Heckel Consulting advises in a different domain, the copy examples need swapping.
- Requested reference to an **Obsidian vault** could not be read (no access from this environment).

---

## 2. Content fundamentals — how Heckel writes

- **Language:** German. Direct, confident, plain — no consulting jargon, no buzzword soup.
- **Address:** primarily **"Sie"** for consulting clients (trustworthy, respectful). Prime Media
  Solution's own site uses the informal **"du"**; keep a single register per surface and don't mix.
- **Tone:** classic & trustworthy + warm & human + modern/tech-forward. Competent but approachable —
  "wir sagen ehrlich, was geht" rather than salesy hype.
- **Proof over promises:** lead with concrete, measurable outcomes ("**80 % Zeitersparnis**",
  "planbar neue Kund:innen"), not adjectives. Numbers are the hero.
- **Sentence shape:** short. One idea per line. Verbs over nominal style.
- **Casing:** Sentence case for body and most headlines. **UPPERCASE only** for eyebrows/labels,
  always with wide letter-spacing (the "SOLUTION" treatment).
- **Emoji:** none. This is a professional B2B brand.
- **Examples**
  - Headline: *"Beratung, die wirkt."* / *"Planbar neue Kunden. Und Fachkräfte."*
  - Sub: *"Datengetriebene Kampagnen, klare Prozesse, ehrliche Beratung."*
  - CTA: *"Kostenloses Erstgespräch buchen"*, *"Jetzt starten"*
  - Eyebrow: *"LEISTUNGEN"*, *"ERGEBNISSE"*, *"ÜBER UNS"*

---

## 3. Visual foundations

**Color.** Everything derives from the mark gradient: deep blue `#0A5BFF` → primary
`#1877FE` → sky `#319CFE` → cyan `#5CD6FE`. Primary brand blue is `#1877FE`. Cyan `#5CD6FE`
is an **accent only** (highlights, active states, gradient endpoints — never body text on white).
Neutrals are **cool grays** with a faint blue undertone; text ink is a near-black `#0B0F16`
(matching the wordmark). Backgrounds are predominantly **white** and `#F6F8FB`; dark sections use
the ink gradient. Status colors are conventional (green/amber/red). See `tokens/colors.css`.

**The signature gradient** (`--gradient-brand-45`, matching the mark's bottom-left→top-right
direction) is used sparingly: hero CTAs, one feature card per view, big stat numbers, section
accents. It is a spice, not a wallpaper — avoid full-page gradient washes and never the
overused blue→purple.

**Typography.** One family — **Montserrat** — everywhere. Hierarchy comes from weight (400–800),
size, and tracking. Display headlines are **800, tight tracking** (`-0.02em`). Eyebrows/labels are
**600, UPPERCASE, +0.22em**. Body is 400/500 at 16–18px, line-height 1.5–1.68. See
`tokens/typography.css`.

**Spacing & layout.** 4px base grid. Content max-width `1200px` (narrow reading `760px`). Generous
vertical section rhythm (`--section-y`, clamp 64–128px). Roomy, uncluttered — whitespace signals
premium.

**Corner radius.** Soft-but-not-pill: cards `16px`, buttons/inputs `12px`, chips `8–12px`. The
**mark itself stays sharp** — do not round it. Pills (`radius-full`) only for badges/tags.

**Elevation.** Shadows are **soft and cool** (tinted with the ink color, never pure black),
low-opacity, large-blur. Cards `shadow-sm`, raised `shadow-md`, popovers `shadow-lg`, modals
`shadow-xl`. The **primary CTA carries a blue glow** (`--shadow-brand`) on hover.

**Borders.** Hairline `1px` in cool grays (`--border-subtle/default/strong`). Cards use a
near-invisible subtle border plus a soft shadow.

**Motion.** Calm and confident — **no bounce**. Ease `cubic-bezier(0.22,0.61,0.36,1)`, durations
120/200/360ms. Interactions: hover = darker fill or soft-tint background + (for cards) a 3px lift;
press = `translateY(1px)`; focus = 3px brand focus ring. Fades and short slides only; respect
`prefers-reduced-motion`.

**Imagery.** Cool, clean, modern — blue-leaning photography, screens/dashboards, real people in
work contexts. No warm/sepia filters, no heavy grain. Where photography isn't available, use the
gradient, the mark, or `image-slot` placeholders — **do not fabricate images or draw illustrations**.

**Transparency / blur.** Sparse. Frosted overlays (`--blur-md`) for sticky headers over content and
modal scrims (`--overlay-scrim`). Not decorative.

---

## 4. Iconography

- **No icon set ships with the source brand.** We standardize on **[Lucide](https://lucide.dev)**
  — a clean, modern, 2px-stroke outline set that matches the tech-forward, approachable tone.
  This is a **substitution/choice, flagged for your approval.**
- **Usage:** line icons, 2px stroke, `currentColor`, sized 18–24px in UI (20px default),
  rounded caps/joins. Load from CDN in prototypes:
  `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or use
  inline SVG mirroring Lucide's paths (as the component cards do).
- **In components:** icon-bearing components (`IconButton`, `Alert`, `Select` chevron) take icons as
  React children / render inline SVG — no icon font is bundled.
- **No emoji, no Unicode-glyph icons.** The only "iconographic" brand element is the rising-bars mark.

---

## 5. Components

Reusable React primitives, exposed on `window.HeckelConsultingDesignSystem_50dcd5`. Each has a
`.jsx`, a `.d.ts` (props contract), a `.prompt.md` (usage), and a directory `@dsCard`.

**Core** (`components/core/`)
- **Button** — primary / gradient / secondary / ghost / danger; sizes sm–lg; loading; icons.
- **IconButton** — square icon-only button; requires `label`.
- **Logo** — Heckel Consulting lockup (mark + Montserrat wordmark); full / wordmark / stacked; light/dark tone.
- **Card** — content surface; padding + elevation; `interactive` lift; `brand`/`ink` gradient tones.
- **Badge** — small status pill; soft or solid; optional dot.
- **Tag** — outlined chip for categories/filters; active + removable.
- **Stat** — big KPI number; plain or gradient; optional trend.

**Forms** (`components/forms/`)
- **Input** — text field with label, hint, error, left icon.
- **Textarea** — multi-line field.
- **Select** — styled native select with custom chevron.
- **Checkbox** — brand-fill check, optional description.
- **Radio** — grouped single choice.
- **Switch** — on/off toggle.

**Feedback** (`components/feedback/`)
- **Alert** — inline tinted status message (info / success / warning / danger).

*Intentional additions (no source component library existed):* the full set above is an authored
standard kit sized to Heckel's needs. **Logo** and **Stat** are brand-specific additions — Logo
because the identity is central, Stat because "proof over promises" makes KPIs a core pattern.

---

## 6. UI kits

- **`ui_kits/website/`** — the Heckel Consulting marketing website (primary deliverable):
  interactive Home, Leistungen, Ergebnisse and Kontakt sections in one click-through `index.html`,
  composed from the components above. See its `README.md`.

## 7. Slides

- **`slides/`** — a 16:9 deck kit for client proposals: Title, Agenda, Content, Stat, Quote and
  Closing slide types. Entry: `slides/index.html`.

---

## 8. Index / manifest

```
styles.css                 → global entry (only @import lines)
tokens/
  fonts.css                → Montserrat (Google Fonts)
  colors.css               → palette + semantic aliases + gradients
  typography.css           → family, scale, weights, tracking
  spacing.css              → space scale, radii, layout
  effects.css              → shadows, motion, blur
guidelines/                → foundation specimen cards (Colors, Type, Spacing, Brand)
components/core|forms|feedback/  → primitives (.jsx + .d.ts + .prompt.md + card)
ui_kits/website/           → marketing website UI kit
slides/                    → proposal deck kit
assets/                    → logo-prime-media-full.png, mark.png
SKILL.md                   → Agent-Skill wrapper
readme.md                  → this file
```

**Namespace for cards/kits:** `window.HeckelConsultingDesignSystem_50dcd5`.
