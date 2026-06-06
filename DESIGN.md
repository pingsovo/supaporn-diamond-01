# Supaporn Diamond — Ultra Luxury Atelier (DESIGN.md)

> Single source of truth for Stitch generation + React/TypeScript build.
> Stack: React + TypeScript + Tailwind + Framer Motion. Container-based, fluid.

## 1. Atmosphere
Ultra-luxury Thai diamond maison. Gallery-airy (density 3), confident asymmetric
layouts (variance 8), fluid spring motion (6). Warm, jewel-lit, editorial — like a
private Yaowarat viewing salon. Generous negative space; every diamond breathes.

## 2. Color — KEEP ORIGINAL BRAND
| Name | Hex | Role |
|------|-----|------|
| Cream Canvas | `#fafae1` | primary background |
| Pure White | `#ffffff` | surfaces / cards |
| Espresso Ink | `#42210a` | primary text, luxury dark |
| Rich Gold | `#c0830b` | single accent: CTAs, rules, active |
| Champagne | `#cda67f` | secondary metallic, dividers, hover |
| Light Gold | `#fdd79a` | soft highlights, subtle focus glow |

Never pure black. Gold is the ONLY accent. No neon, no purple, no gradient-text headers.

## 3. Typography
- **Display/Headline:** Bodoni Moda — high-fashion serif, tight tracking, weight-driven hierarchy. Not oversized-screaming.
- **Body/Label:** Outfit — relaxed leading, max 65ch.
- **Numbers (carat / price / cert):** Outfit tabular.
- **Thai:** pair with Noto Serif Thai / Noto Sans Thai for bilingual rendering.
- **Banned:** Inter, Times/Georgia/Garamond, system serif.

## 4. Hero
Asymmetric split (NOT centered). Bodoni headline left, hero jewelry image right
fading into cream. One gold CTA only. No scroll arrows / "scroll to explore".

## 5. Components
- **Buttons:** flat gold fill (primary) / espresso outline (ghost). Tactile `-translate-y-[1px]` on active. No glow.
- **Cards:** white, `rounded` (4px), 1px champagne border, diffused warm shadow only when elevation = hierarchy.
- **Collections:** 2-col zig-zag / asymmetric grid / horizontal scroll. NEVER 3 equal cards.
- **Instagram:** live realtime feed masonry grid + Reel video tiles with play affordance.
- **Inputs:** label above, gold focus ring.
- **States:** skeletal shimmer loaders; composed empty/error states.

## 6. Layout
Container-based, `max-w-[1400px] mx-auto`, fluid `clamp()` spacing. CSS Grid fractional
units. `min-h-[100dvh]` heroes. Single-column collapse < 768px. Zero horizontal scroll.
44px touch targets.

## 7. Motion
Framer spring `stiffness:100 damping:20`. Staggered reveals. Perpetual subtle shimmer on
gold rules. `transform`/`opacity` only — never top/left/width/height.

## 8. Banned (AI Tells)
No emojis · no Inter · no pure black · no neon/glow · no 3-col card row · no centered hero
· no AI clichés (Elevate/Seamless/Unleash) · no broken Unsplash · no generic names.

---
## Homepage Sections (build order)
1. Sticky transparent→cream nav (logo, collections, bespoke, certification, locations, IG)
2. Asymmetric hero — Bodoni headline + hero diamond, single gold CTA
3. Heart & Arrow story — GIA/HRD, Triple Excellent, macro diamond
4. Signature collections — zig-zag / horizontal scroll (rings, necklaces, loose diamonds)
5. Bespoke atelier — custom design invitation
6. Celebrity brides — James Ji × Bella editorial testimonial
7. **Instagram realtime feed** — masonry grid + **Reel video** tiles (autoplay muted, play icon)
8. Visit — Yaowarat Rd locations, hours, booking
9. Footer — gold rule, contact, socials

## Stitch references
- Project: `projects/12121605326029082021`
- Design System: `assets/10065639420509588871` (Supaporn Atelier — Gold & Espresso)
