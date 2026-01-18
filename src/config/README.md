# Configuration Directory

This directory contains the single source of truth for all business data.

## Files

### `site.ts`

Contains all business configuration including:
- Business name, phone, email
- Service area
- Scheduling provider details (Calendly URL/ID)
- List of services offered
- Social media links

**Important:** Components and pages should import from this file rather than hardcoding values.

## Updating Configuration

1. Edit `site.ts`
2. Changes will automatically reflect across all components
3. No need to search and replace throughout the codebase

## Switching Scheduling Providers

To switch from Calendly to another provider:

1. Update `scheduling.provider` in `site.ts`
2. Update `scheduling` object with new provider's URL/ID
3. Update `src/components/BookingWidget.tsx` to use the new provider's embed code
4. Update this README with the new provider information
