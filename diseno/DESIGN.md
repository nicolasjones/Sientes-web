# Design System Document

## 1. Overview & Creative North Star: "The Alchemical Manuscript"

This design system is a departure from the sterile, utilitarian grids of modern web design. It is envisioned as "The Alchemical Manuscript"—a digital experience that feels like a sacred, discovered relic. By blending high-contrast editorial typography with intricate, metallic ornamentation, we create a cinematic atmosphere that feels both ancient and futuristic.

The "Alchemical Manuscript" rejects the "template" look. We favor **intentional asymmetry**, where text may be vertically oriented or offset from its container. We use **layered depth**, where backgrounds are not just flat planes but atmospheres of deep obsidian. The goal is to move the user from "browsing" to "witnessing" a digital ritual.

---

## 2. Colors: Obsidian & Gilded Light

The palette is rooted in the depth of `background` (#121412), using golden and silver metallic tones to punctuate the darkness.

*   **Primary Roles:** `primary` (#dac769) acts as our "Gilded Gold." Use it for key CTAs, intricate line art, and high-impact headers. `secondary` (#c5c6ca) provides a cool, silver alternative for secondary actions.
*   **The "No-Line" Rule:** Standard 1px solid borders for sectioning are strictly prohibited. The only visible "lines" allowed are the ornamental frames described in the Elevation section. Boundaries between content sections must be defined by shifts in background (e.g., transitioning from `surface` to `surface_container_low`).
*   **Surface Hierarchy & Nesting:** Use `surface_container` tiers to create a physical sense of "nesting." A card using `surface_container_high` should sit upon a section using `surface_container`. This tonal shift creates depth without the clutter of shadows.
*   **Glass & Gradient:** For floating UI elements or headers, use semi-transparent `surface_variant` with a 20px backdrop-blur to create a "Smoked Glass" effect. Main CTAs should use a subtle linear gradient from `primary` to `primary_container` (angled at 135°) to give the gold a metallic, three-dimensional soul.

---

## 3. Typography: The Ritual Script

The typography system relies on **Noto Serif** for its cinematic authority and **Work Sans** for technical utility.

*   **Display & Headlines (Noto Serif):** These are the core of the visual identity. `display-lg` (3.5rem) should be used sparingly, often with increased letter-spacing or vertically aligned to break the horizontal grid. Headlines convey the "voice" of the brand—high-contrast, serif, and unwavering.
*   **Title & Body (Noto Serif):** Even at smaller scales, we maintain the serif to keep the editorial feel consistent. `body-lg` at 1rem provides a highly readable but atmospheric experience for long-form content.
*   **Labels (Work Sans):** Technical data, metadata, or navigation labels use `label-md` in Work Sans. This clean, sans-serif contrast ensures that functional elements do not compete with the ritualistic nature of the headings.

---

## 4. Elevation & Depth: Ornamental Containment

In this system, containers are not just boxes; they are framed portals.

*   **Ornamental Framing:** Images and high-priority sections must be encased in thin metallic frames. 
    *   **Style:** 1px stroke using `primary` (gold) or `secondary` (silver).
    *   **Motifs:** Corners must feature geometric "nodes" (crosshairs, circles, or diamond shapes). Midpoints of the horizontal or vertical lines should feature floral or sigil-like motifs, as seen in the reference material.
*   **Tonal Layering:** Avoid traditional shadows. Use the `surface_container_lowest` to `highest` scale to create natural lift. If a "floating" element requires a shadow, it must be an **Ambient Shadow**: `0 20px 40px`, color `on_surface` at 5% opacity.
*   **The "Ghost Border":** For input fields or secondary containers, use the `outline_variant` token at 15% opacity. This creates a "barely-there" container that respects the dark aesthetic.
*   **Glassmorphism:** Use `surface_bright` at 40% opacity with a `backdrop-filter: blur(12px)` for mobile menus or tooltips, allowing the complex background textures to bleed through.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background with `on_primary` text. **Corner Radius: 0px**. The button should feel like a heavy gold ingot.
*   **Secondary (Pill):** For a "Modern Ritual" look, use a pill-shaped button (100px radius) with an `outline` stroke and `primary` text.
*   **Tertiary:** Text-only in `primary` with a vertical 1px line (spacing-2) to the left of the text.

### Ornamental Containers
*   Instead of a standard "Card," use an "Ornamental Frame." The content is padded by `spacing-8`. The frame uses the metallic line art style with nodes at the corners.

### Input Fields
*   **Style:** No background (transparent). A 1px bottom-border using `outline_variant`. 
*   **Labels:** Use `label-sm` (Work Sans) placed above the field, always in All Caps with 0.1rem letter spacing.
*   **Error State:** Border shifts to `error`. Error text uses `body-sm` in `error`.

### Lists & Dividers
*   **Forbid Divider Lines:** Use `spacing-12` of vertical white space to separate list items. If a separator is required, use a single, centered "Alchemical Node"—a small geometric icon (primary color, 8px diameter).

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme vertical whitespace (`spacing-24`) to give elements a "gallery" feel.
*   **Do** mix horizontal and vertical text alignments to challenge the standard web grid.
*   **Do** ensure all images have a subtle "film grain" overlay or a high-contrast, moody edit to match the obsidian background.
*   **Do** keep all corner radii at `0px` for a sharp, architectural, and brutalist edge.

### Don't
*   **Don't** use 100% opaque white (#FFFFFF). Always use `on_surface` (#e2e3df) to maintain the "aged" look.
*   **Don't** use standard drop shadows (e.g., black with 25% opacity). It ruins the cinematic depth.
*   **Don't** use rounded corners. This system is built on the precision of ritualistic geometry.
*   **Don't** crowd the ornamental frames. Give the line art room to breathe; the frame is as important as the content inside it.