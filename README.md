# Window Washing Service Website

A professional, production-ready website for a window washing service with integrated third-party appointment scheduling.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **Scheduling Provider:** Calendly

## Project Structure

```
window-washing-website/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # Reusable React components
│   ├── config/         # Single source of truth for business data
│   ├── lib/            # Utility functions
│   └── styles/         # Global styles
├── package.json
└── README.md
```

## Quick Start

See `SETUP.md` for detailed setup and deployment instructions.

## Configuration

All business data (name, phone, services, booking URL) is centralized in `src/config/site.ts`. Update this file to change business information across the entire site.

**Important:** Do not hardcode business values in components or pages.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ WCAG AA accessibility compliance
- ✅ Third-party scheduling integration (Calendly)
- ✅ SEO-optimized with metadata
- ✅ TypeScript for type safety
- ✅ Professional component structure

## Key Principles

- **Stability over novelty**
- **Clarity over cleverness**
- **Integration over reinvention**
- **Maintainability over speed**
- **Simplicity over sophistication**

## Scheduling Integration

This website uses Calendly for appointment scheduling. The `BookingWidget` component encapsulates all scheduling logic, making it easy to switch providers if needed.

See `src/components/BookingWidget.tsx` and `src/config/site.ts` for configuration details.

## Documentation

- `SETUP.md` - Setup and deployment instructions
- `CHANGELOG.md` - Version history and updates
- `src/components/README.md` - Component documentation
- `src/config/README.md` - Configuration documentation

## License

Private project - All rights reserved
