# Setup & Deployment Instructions

This guide will help you set up and deploy the window washing website.

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)
- Calendly account (for scheduling integration)
- Vercel account (for hosting)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Business Information

Edit `src/config/site.ts` and update:

- Business name
- Phone number
- Email address
- Service area
- List of services
- Calendly URL/ID (see below)

### 3. Configure Calendly Integration

1. Sign up for a Calendly account at https://calendly.com
2. Create your scheduling event/page
3. Copy your Calendly URL (e.g., `https://calendly.com/your-username`)
4. Update `scheduling.calendlyUrl` in `src/config/site.ts`

Example:
```typescript
scheduling: {
  provider: 'calendly',
  calendlyUrl: 'https://calendly.com/your-username',
}
```

### 4. Add Images (Optional)

Place business images in `public/images/`:
- Logo: `public/images/logo.png`
- Favicon: `public/favicon.ico`
- Service photos as needed

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
```

Test the production build locally:

```bash
npm start
```

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

Follow the prompts. Vercel will detect Next.js automatically.

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Environment Variables

No environment variables are required for basic functionality. If you add features that require API keys or secrets, add them in Vercel's project settings under "Environment Variables."

## Post-Deployment Checklist

- [ ] Update `siteConfig` with actual business information
- [ ] Configure Calendly URL in `src/config/site.ts`
- [ ] Test all pages (Home, Services, About, Contact)
- [ ] Test booking widget integration
- [ ] Verify mobile responsiveness
- [ ] Test keyboard navigation (accessibility)
- [ ] Update domain/CNAME if using custom domain
- [ ] Set up analytics (optional)

## Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions provided by Vercel

## Troubleshooting

### Calendly Widget Not Showing

- Verify Calendly URL is correct in `src/config/site.ts`
- Check browser console for errors
- Ensure Calendly account is active and event page is published

### Build Errors

- Ensure Node.js 18+ is installed
- Run `npm install` to ensure dependencies are installed
- Check TypeScript errors with `npm run lint`

### Styling Issues

- Verify Tailwind CSS is configured correctly
- Check `tailwind.config.ts` includes correct content paths
- Clear `.next` cache and rebuild: `rm -rf .next && npm run build`

## Maintenance

- Keep dependencies updated: `npm update`
- Review `CHANGELOG.md` for version history
- Update business info in `src/config/site.ts` as needed
- Test after major dependency updates

## Support

For Next.js documentation: https://nextjs.org/docs
For Vercel documentation: https://vercel.com/docs
For Calendly integration: https://help.calendly.com
