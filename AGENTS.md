## Learned User Preferences
- Match provided Figma nodes closely for prototype work, including spacing, colors, icons, hover states, loading states, and transition details.
- Follow Artisan design-system motion and token guidance; avoid flashes, preserve layout stability, and do not shift buttons on hover or press.
- For large UI motion, use more dramatic easing and enough duration to feel intentional, while keeping routine transitions snappy.
- Prefer real profile photos over gradient or initials placeholders when designing person/profile prototype UI.
- Selected-card AI visuals should feel purposeful and tiered: use animated borders, shimmers, or gradients to communicate state without overpowering the content.
- Generative dot and pixel effects should move in coherent organic waves, handle browser zoom, and change intensity without reloading or reinitializing on every state change.
- When a neutral drawer or background effect is requested, keep dots subtle, tan-toned, behind content, and non-interfering with text or controls.
- For pencil-line animation prototypes, keep the line hidden behind the Figma pencil, make point A follow the pencil directly, and let the ripple travel through the full line without extra glow or outline.
- For credits/reward animations, use the Figma Artisan coin style, keep earned-credit badges outside cramped sidebars, and avoid mid-flight pauses or spins.
- When asked to push or merge prototype work, include all relevant local changes and finish with the default branch in sync unless the user asks for a PR.

## Learned Workspace Facts
- This repo is a static prototype workspace: the root `index.html` acts as a hub and prototypes live under `prototypes/<name>/index.html` as standalone HTML/CSS/JavaScript.
- Prototypes in this workspace generally have no build step and are previewed by serving the repo root with `python3 -m http.server 3004`.
- The workspace follows Artisan visual language: purple and tan palettes, Inter typography, 4pt spacing, rounded cards/dialogs, and Campaigns Figma files as the source of truth.
- Active prototype areas include campaign creation flows, targeting/persona selection, sequence generation, enrichment tables, and messaging personalization.
