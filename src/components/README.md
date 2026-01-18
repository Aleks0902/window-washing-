# Components Directory

This directory contains reusable React components for the website.

## Components

### `BookingWidget.tsx`
Encapsulates third-party scheduling integration (Calendly).
- **Purpose:** Isolate scheduling provider logic
- **Props:** Optional `className` for styling
- **Dependencies:** Reads from `src/config/site.ts`
- **Switching Providers:** Update site config and this component

### `Header.tsx`
Site header with navigation menu.
- **Features:** Responsive mobile menu, sticky positioning
- **Accessibility:** ARIA labels, keyboard navigation, focus management

### `Footer.tsx`
Site footer with business info and links.
- **Content:** Pulls from `siteConfig` (phone, email, service area)
- **Accessibility:** Semantic HTML, proper link structure

### `Hero.tsx`
Homepage hero section with call-to-action.
- **Purpose:** First impression, primary CTA
- **Styling:** Gradient background, responsive text sizes

### `ServiceCard.tsx`
Reusable card component for displaying services.
- **Props:** `service` object from `siteConfig`
- **Usage:** Used in Services page and homepage preview

## Component Guidelines

1. **No Hardcoding:** All business data comes from `src/config/site.ts`
2. **Accessibility:** All components must support keyboard navigation and screen readers
3. **Responsive:** Components work at 375px, 768px, and 1440px breakpoints
4. **Small & Focused:** Each component does one thing well (≈100-200 lines max)
