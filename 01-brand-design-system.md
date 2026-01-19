# Brand & design system

## Brand attributes
- **Trustworthy** (calm, professional)
- **Local** (KC metro focus)
- **Solution-first** (options, not pressure)
- **Clear** (plain English)

## Logo direction (v1)
Recommended mark: **roofline shaped like an “A”** + subtle “ace” indicator (star/dot) + clean wordmark.

Design goals:
- Legible as a favicon
- Works in one color
- Looks credible to distressed homeowners (avoid “casino” vibes)

## Color palette
Primary palette (brand)

- **Primary Navy**: `#0B2440`
- **Secondary Teal**: `#0F766E`
- **CTA Amber**: `#F59E0B`

Neutrals

- **Text**: `#111827`
- **Muted text**: `#6B7280`
- **Border**: `#E5E7EB`
- **Soft background**: `#F3F4F6`
- **White**: `#FFFFFF`

### Support colors (for UI states)
We use these sparingly so the site stays calm and consistent.

- **Info Blue**: `#2563EB` (links, info banners)
- **Success Green**: `#16A34A` (success states)
- **Warning Gold**: `#D97706` (warnings)
- **Error Red**: `#DC2626` (errors)

## Global tokens
### CSS variables (base)
```css
:root{
  --c-primary: #0B2440;
  --c-secondary: #0F766E;
  --c-accent: #F59E0B;

  --c-text: #111827;
  --c-text-muted: #6B7280;

  --c-bg: #FFFFFF;
  --c-bg-soft: #F3F4F6;
  --c-border: #E5E7EB;

  --c-info: #2563EB;
  --c-success: #16A34A;
  --c-warning: #D97706;
  --c-error: #DC2626;
}
```

### Tailwind mapping (suggested)
Map your Tailwind theme colors to these tokens so the entire site is consistent.

## Typography
### Fonts
- Headings: **Poppins** (600–700)
- Body/UI: **Inter** (400–500)

### Type scale (mobile-first)
- H1: 34–40px (responsive)
- H2: 24–28px
- H3: 18–20px
- Body: 16px
- Small: 14px

## Components
### Buttons
- Primary button: bg `--c-accent`, text white, rounded, strong padding.
- Secondary button: outline `--c-primary`, text `--c-primary`.
- Destructive button: bg `--c-error`.

### Sticky mobile CTA bar
Persistent bottom bar on small screens:
- Call
- Text
- Get Offer

### Forms
Form rules:
- Labels always visible (not only placeholders)
- Inline help text for confusing fields
- 2-step forms preferred (reduces drop-off)

### Cards
Use cards for:
- Solution categories
- “How it works” steps
- Testimonials (real only)

## Layout and spacing
- Use an **8px spacing system** (8/16/24/32/48)
- Max content width:
  - mobile: ~680px
  - desktop: 1120–1200px

## Accessibility baseline
- Maintain readable contrast for body text on all backgrounds.
- Provide keyboard focus styles for all interactive elements.
- Avoid tiny tap targets on mobile (minimum ~44px height).
