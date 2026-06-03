---
name: Nexus Luminous
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#016d35'
  on-secondary: '#ffffff'
  secondary-container: '#9bf7af'
  on-secondary-container: '#0f743b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001d36'
  on-tertiary-container: '#5487bf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#9bf7af'
  secondary-fixed-dim: '#7fda95'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005226'
  tertiary-fixed: '#d1e4ff'
  tertiary-fixed-dim: '#9ecaff'
  on-tertiary-fixed: '#001d36'
  on-tertiary-fixed-variant: '#00497d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
  glass-bg: rgba(255, 255, 255, 0.7)
  glass-border: rgba(255, 255, 255, 0.5)
  hero-gradient-start: rgba(248, 249, 250, 0.95)
  hero-gradient-end: rgba(248, 249, 250, 0)
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: 0.01em
  stats-number:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1'
    letterSpacing: -0.03em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  mobile-margin: 20px
  grid-margin: 64px
  grid-gutter: 24px
  content-gap: 48px
  section-gap: 120px
---

## Brand & Style
Nexus Luminous is a design system crafted for the intersection of sustainable technology and luxury living. The brand personality is **visionary, authoritative, and sophisticated**, targeting high-net-worth individuals and premium property developers. 

The visual style is a hybrid of **Modern Corporate and Glassmorphism**. It uses translucent, blurred layers to evoke a sense of clarity and advanced technology ("clean energy"), while maintaining a grounded, professional structure. The atmosphere is pristine and wealthy, characterized by high-quality photography, generous whitespace, and sharp, high-contrast typography.

## Colors
The palette is rooted in a high-contrast foundation of absolute black and off-white, signifying luxury and authority. 

- **Primary (Black):** Used for core branding, headlines, and primary action buttons to convey strength.
- **Secondary (Forest Green):** Represents the "Green" future and sustainable energy; used as an accent and for state-specific components.
- **Surface & Backgrounds:** Utilizes a light-gray base (#f8f9fa) to allow glass effects and imagery to pop.
- **Translucency:** Key to the "Luminous" aesthetic. Surface-container tiers should use varying levels of opacity and backdrop blurs (24px) to create depth without clutter.

## Typography
The system relies exclusively on **Inter** to maintain a neutral, systematic, and utilitarian feel that doesn't distract from the high-end imagery. 

Hierarchy is established through extreme weight variance—bold displays for messaging and light/large sizes for data visualization (stats). Tracking (letter spacing) is tightened for large headlines to maintain impact and opened up for small caps to ensure legibility.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy with a maximum width of 1280px (7xl) for central content. 

- **Horizontal Rhythm:** Use a 12-column grid for desktop with 24px gutters. Large grid margins (64px) create a luxurious, airy frame around content.
- **Vertical Rhythm:** Large section gaps (120px) are used to separate major narrative blocks, ensuring a high-end, uncluttered reading experience.
- **Mobile Adaptivity:** Breakpoints at 768px (md) trigger a shift from multi-column grids to single-stack layouts. Margins compress to 20px on mobile to maximize screen real estate.

## Elevation & Depth
Depth is created through **Glassmorphism and Ambient Shadows**.

1.  **Level 0 (Base):** Solid light surfaces or immersive background photography.
2.  **Level 1 (Cards):** Semi-transparent white backgrounds (`rgba(255, 255, 255, 0.7)`) with 24px backdrop blurs. These elements use a subtle 1px white border at 50% opacity to define edges against varied backgrounds.
3.  **Level 2 (Active/Floating):** Subtle "ambient" shadows (`0 20px 40px rgba(0,0,0,0.04)`) used for hover states and sticky navigation headers to provide tactile feedback without visual "weight."

## Shapes
The shape language is **Rounded**, balancing technical precision with organic approachability. 

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Large Cards & Sections:** 1rem to 1.5rem (16px to 24px) corner radius.
- **Badges/Tags:** Pill-shaped (full rounding) to contrast against the geometric grid.
- **Interactive Controls:** Range sliders use circular thumbs to denote physical tactility.

## Components
- **Buttons:** Primary buttons are solid Black with white text, no icons (minimalist). Secondary buttons use a transparent glass style with a primary border.
- **Glass Cards:** The signature component. Used for ROI calculators and feature showcases. Must have `backdrop-filter: blur(24px)`.
- **Inputs:** Clean, white background with a 1px `outline-variant` border. On focus, use a 2px solid primary ring.
- **Solution Cards:** Use a vertical stack with an image at the top. The "Featured" state is denoted by a thicker 2px primary border and a slight vertical displacement (-4px to -16px).
- **Navigation:** A sticky top bar with an 80% opacity blur effect to maintain context of the background imagery while scrolling.
- **ROI Sliders:** Custom range inputs with absolute black thumbs and soft gray tracks to align with the monochrome brand palette.