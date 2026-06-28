---
name: Topographic Editorial
colors:
  surface: '#f7f9fd'
  surface-dim: '#d8dade'
  surface-bright: '#f7f9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f8'
  surface-container: '#eceef2'
  surface-container-high: '#e6e8ec'
  surface-container-highest: '#e0e2e6'
  on-surface: '#191c1f'
  on-surface-variant: '#46464d'
  inverse-surface: '#2d3134'
  inverse-on-surface: '#eff1f5'
  outline: '#77767d'
  outline-variant: '#c7c5cd'
  surface-tint: '#5b5d74'
  primary: '#16182c'
  on-primary: '#ffffff'
  primary-container: '#2b2d42'
  on-primary-container: '#9394ae'
  inverse-primary: '#c4c4df'
  secondary: '#0c6684'
  on-secondary: '#ffffff'
  secondary-container: '#95dbfd'
  on-secondary-container: '#00617f'
  tertiary: '#171928'
  on-tertiary: '#ffffff'
  tertiary-container: '#2b2d3e'
  on-tertiary-container: '#9394a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0fc'
  primary-fixed-dim: '#c4c4df'
  on-primary-fixed: '#181a2e'
  on-primary-fixed-variant: '#43455b'
  secondary-fixed: '#bfe9ff'
  secondary-fixed-dim: '#89d0f1'
  on-secondary-fixed: '#001f2a'
  on-secondary-fixed-variant: '#004d65'
  tertiary-fixed: '#e1e1f7'
  tertiary-fixed-dim: '#c4c5db'
  on-tertiary-fixed: '#181a2a'
  on-tertiary-fixed-variant: '#444657'
  background: '#f7f9fd'
  on-background: '#191c1f'
  surface-variant: '#e0e2e6'
typography:
  display-xl:
    fontFamily: Saira Condensed
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Saira Condensed
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Saira Condensed
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Saira Condensed
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-bold:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  label-caps:
    fontFamily: Saira Condensed
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  elevation-numeral:
    fontFamily: Saira Condensed
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.05em
spacing:
  rail-width: 48px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is built for **Sherpa Steps Trek Training**, an aspirational yet methodical platform focused on the physical and mental preparation required for high-altitude summits. The personality is "breathless" but disciplined—capturing the thin-air intensity of the mountains through a lens of coach-direct professionalism.

### Design Movement: High-Precision Editorial
This system blends **Minimalism** with **Modern Industrial** aesthetics. It utilizes generous negative space to evoke the vastness of mountain ranges, contrasted with high-density "instrument-panel" data points. The style is characterized by:
- **Verticality:** Tall typography and linear "elevation rails" that guide the eye upward.
- **Topographic Textures:** Subtle contour lines used as background watermarks to provide depth without clutter.
- **Methodical Structure:** A document-like precision using technical borders and clear information hierarchy to instill confidence in the training regimen.

## Colors

The palette is cold, stable, and atmospheric, mirroring the transitions from base camp to the death zone.

- **Atmospheric Backgrounds:** The primary canvas uses a light grayish-blue (#F2F4F8) to maintain a cool, airy feel, while pure white (#FFFFFF) is reserved for interactive surfaces and cards.
- **Deep Slate & Cold Blue:** The primary slate (#2B2D42) provides a grounded, professional weight for call-to-actions. The accent blue (#1C6E8C) is used for technical indicators, altitude markers, and ghost interactions.
- **High-Altitude Sections:** Critical phases or "Summit Wall" areas transition to a Deep Navy (#1C1E2E) background with white text to signal a change in intensity and focus.

## Typography

The typography system creates a contrast between "Technical Instruments" and "Editorial Narrative."

- **Headlines:** Saira Condensed is utilized in all-caps to achieve a tall, narrow profile reminiscent of altimeters and topographical maps. It should be used for all primary headings and numerical data points.
- **Body:** Source Sans 3 provides a neutral, highly legible counterpoint. It is designed for long-form training instructions and coach notes.
- **Hierarchy:** Use tight line-heights for display type to emphasize the verticality of the font, while maintaining generous line-height for body text to ensure readability during physical activity.

## Layout & Spacing

This design system uses a **Fluid Editorial Grid** with a signature offset.

- **The Elevation Rail:** A persistent 48px vertical rail runs down the left side of the layout. This rail contains the "Altitude Ticks" (thin 1px lines) and technical labels. All main content is indented to the right of this rail.
- **Negative Space:** Use substantial vertical gaps (120px+) between major training phases to create a sense of progression and "breathing room."
- **Grid:** A 12-column layout on desktop, where content typically occupies the central 8 columns, leaving the outer columns for topographic watermarks or marginalia.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Structural Borders** rather than shadows.

- **Flat Depth:** Use 1px solid borders (#D2D7E2) to define sections, mimicking the look of technical documents or maps. 
- **Topographic Overlays:** Backgrounds may feature subtle, non-interactive contour lines in a slightly darker shade than the background color (2-4% contrast).
- **Z-Axis:** Components do not "float" with soft shadows. Instead, they sit on the surface, using color shifts (e.g., White cards on Light Grayish Blue backgrounds) to denote interaction layers.

## Shapes

The shape language is **Strictly Geometric and Sharp**.

- **Corners:** All elements (buttons, cards, input fields) use 0px border-radius. This reinforces the "industrial instrument" and "rigorous training" feel.
- **Accents:** Use 45-degree clipped corners sparingly for "Callout" boxes or "Status" tags to evoke a utilitarian, military-surplus aesthetic.
- **Lines:** All dividers and decorative lines must be 1px or 2px thick—never feathered or blurred.

## Components

### Buttons
- **Primary:** Deep Slate (#2B2D42) background, White Saira Condensed text. Large, blocky, and wide.
- **Secondary/Ghost:** Transparent background, 2px Cold Blue (#1C6E8C) border, Cold Blue text.
- **Hover State:** Solid fill transitions to a slightly darker shade; ghost buttons fill with the border color.

### Training Cards (Phases & Summit Wall)
- Solid white background with a 1px #D2D7E2 border.
- Headers should include a "Phase Number" in the top-left corner using the `elevation-numeral` style.
- The "Summit Wall" card uses the Deep Navy background with high-contrast white typography.

### Accordions (FAQs)
- Clean, horizontal 1px dividers.
- Expansion icon is a simple plus/minus sign or a sharp chevron. 
- No background color change on expansion; only typography weight shifts.

### Mobile Sticky Enroll Bar
- Fixed to the bottom of the viewport.
- Deep Navy background to separate it from the training content.
- Contains a "Step Count" or "Altitude Gained" progress bar (1px thin line) at the very top of the bar.

### The Elevation Rail (Signature Component)
- A vertical line running the height of the page.
- At specific scroll intervals, a horizontal "tick" mark appears with an altitude label (e.g., "3,000m - ACCLIMATIZATION").