<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Bcons Central Park Design & Theme Rules
Whenever modifying UI components or implementing designs from user-provided screenshots/mockups:
1. **Never copy arbitrary colors from mockups** (especially Navy Blue `#061a3d`). You must map layout to the project's brand palette: Tropical Sage & Forest Emerald Green (`#072018`, `primary`) + Champagne Gold (`#e6c887`).
2. **Never copy arbitrary fonts**. Use `font-serif` (`Playfair_Display`) for headings and stats, and `font-sans` (`Be_Vietnam_Pro`) for body and labels.
3. **Never replace interactive components with blurry screenshots**. Maps must use interactive `<iframe>` Google Maps embeds with pan/zoom controls.
4. Always read and strictly follow [DESIGN_SYSTEM_RULES.md](file:///c:/bconsbienhoa-landing-page/DESIGN_SYSTEM_RULES.md) and [dark_light_mode_guide.md](file:///c:/bconsbienhoa-landing-page/dark_light_mode_guide.md).
