/**
 * Site Configuration
 * 
 * This is the single source of truth for all business data.
 * Update this file to change business information across the entire site.
 * 
 * NO business data should be hardcoded in components or pages.
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string; // Optional icon identifier for UI
}

export interface BusinessHours {
  weekdays: string; // e.g., "Monday-Friday 4pm-6pm"
  weekends: string; // e.g., "Saturday & Sunday 9am-6pm"
}

export interface Pricing {
  regular: number; // Regular price per window
  current: number; // Current promotional price per window
  message: string; // Marketing message for pricing
  budgetFriendly: string; // Message about competitive pricing
}

export interface SiteConfig {
  business: {
    name: string;
    phone: string;
    email: string;
    serviceArea: string; // e.g., "Greater Boston Area"
    hours: BusinessHours;
  };
  pricing: Pricing;
  scheduling: {
    provider: 'calendly'; // Current provider
    calendlyUrl: string; // Full Calendly URL or embed ID
    // To switch providers, add other provider fields here
    // and update BookingWidget.tsx accordingly
  };
  services: Service[];
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

/**
 * Main site configuration object.
 * Update values here to reflect actual business information.
 */
export const siteConfig: SiteConfig = {
  business: {
    name: 'Prime Shine Window Cleaning',
    phone: '(346) 462-3979',
    email: 'primeshinewindowcleaningtx@gmail.com',
    serviceArea: 'the Fairfield Community',
    hours: {
      weekdays: 'Monday-Friday 4pm-6pm',
      weekends: 'Saturday & Sunday 9am-6pm',
    },
  },
  pricing: {
    regular: 7,
    current: 5,
    message: 'Regularly $7 per window — Lock in our special rate of $5 per window today!',
    budgetFriendly: 'We offer budget-friendly pricing that beats the competition in the area, without compromising on quality.',
  },
  scheduling: {
    provider: 'calendly',
    calendlyUrl: 'https://calendly.com/primeshinewindowcleaningtx',
  },
  services: [
    {
      id: 'residential',
      name: 'Residential Window Washing',
      description: 'Professional exterior window cleaning for homes.',
    },
    {
      id: 'commercial',
      name: 'Commercial Window Washing',
      description: 'Regular maintenance for office buildings and commercial properties.',
    },
  ],
  social: {
    // Add social media URLs when available
    // facebook: 'https://facebook.com/yourpage',
    // instagram: 'https://instagram.com/yourhandle',
  },
};
