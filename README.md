# Deluxe IT Website Prototype (HTML/CSS-first)

## Project purpose
This repository contains a modernized static website prototype for Deluxe IT (`https://www.deluxe-it.ch/`) that preserves branding, service topics, and information architecture while improving hierarchy, spacing, readability, responsiveness, and trust.

## What was implemented in Phase 1
- Token-based design system in `assets/css/styles.css` (color, spacing, radius, typography, layout primitives).
- Accessible shared shell: skip link, top contact bar, sticky header, responsive navigation, footer.
- Modernized service-first homepage (`index.html`) with hero, service cards, trust section, and consolidated contact strip.
- Reusable inner-page template (`inner-template.html`) including content + sidebar pattern.
- Sample inner pages:
  - `dienstleistungen-reparaturen.html`
  - `preise.html`
  - `kontakt.html`
  - `anfahrt.html`
- Reusable component patterns:
  - Contact/address/opening-hours block
  - Responsive table wrapper + semantic table styles
  - Contact form UI shell with required/help/error patterns
  - Map placeholder block for consent-based future embed
- Minimal JavaScript (`assets/js/main.js`) only for mobile menu toggle.

## Reused design principles from the specification
- Preserve Deluxe IT orange/neutral color identity.
- Keep service-business visual tone (modern but conservative).
- Keep IA and content direction (Home, Dienstleistungen, Preise, Kontakt, Anfahrt, Know-How).
- Favor semantic HTML, keyboard accessibility, visible focus states, and responsive reflow.
- Keep implementation framework-free and CMS-ready.

## Assumptions made
- Exact live logo assets and font files are not included in this repo, so a system font stack and text wordmark placeholder are used.
- Some copy is represented as clearly marked placeholders where exact verbatim extraction from all source pages is pending.
- Map integration and form backend submission are intentionally out of scope in this phase.

## What remains for Phase 2
- Migrate verbatim copy and detailed tables from all source pages (especially iPhone/iPad repair rows and full Preise tables).
- Build full multi-level IA pages (`Betrieb`, `Implementierung`, `Support & Wartung`, `Know-How` categories, etc.) from the template.
- Integrate real logo/image assets and optimize media (`srcset`, dimensions, lazy-loading).
- Add consent-gated map and contact form backend wiring/CMS integration.
- Run full accessibility and performance QA (WCAG 2.2 AA + Lighthouse/CWV targets).

## Inner-page/template extension notes
- Keep shared shell and component classes stable (`.page-header`, `.page-grid`, `.surface`, `.table-wrap`, `.contact-strip`, `.map-placeholder`).
- For each migrated page, replace placeholder text with verbatim source content while preserving heading hierarchy.
- Reuse the sidebar contact block for service and pricing pages.
- Use the same table pattern for `Preise`, `iPhone Reparatur Zürich`, and `iPad Reparatur Zürich` pages.
