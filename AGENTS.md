# Repository Instructions

## Project Shape
- This is a single-page React 19 + Vite portfolio for an actor/performer.
- The content model lives in [src/config/userConfig.js](src/config/userConfig.js); update that file first for copy, credits, media, gallery, skills, contact, or nav changes.
- The app is assembled in [src/App.jsx](src/App.jsx) from small layout and section components under [src/components](src/components).

## Working Conventions
- Keep the UI config-driven; do not hardcode portfolio data inside section components when the same content can come from `userConfig`.
- Reuse [src/components/ui/BentoCard.jsx](src/components/ui/BentoCard.jsx) for card-like surfaces so the glass/bento look stays consistent.
- Use Tailwind utility classes and the extended palette in [tailwind.config.js](tailwind.config.js); the custom `neomint` and `lavender` colors are part of the design language.
- Use `lucide-react` for icons and keep icon-to-string mappings inside the component that renders them.
- Preserve the existing hash navigation structure (`#about`, `#reel`, `#credits`, `#contact`) unless the page structure is intentionally changing.

## Validation
- Use `npm run build` for a production check and `npm run lint` for static validation.
- Prefer narrow, focused edits; this project is small enough that changes should usually stay within the affected section or shared primitive.

## Helpful References
- Overview and setup notes: [README.md](README.md)
- Actor portfolio guidance and content patterns: [SKILL.md](SKILL.md)