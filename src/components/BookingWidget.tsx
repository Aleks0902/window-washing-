'use client';

/**
 * BookingWidget Component
 * 
 * Encapsulates third-party scheduling provider integration.
 * Currently configured for Calendly.
 * 
 * To switch providers:
 * 1. Update site.ts with new provider URL/ID
 * 2. Replace Calendly embed code with new provider's embed/SDK
 * 3. Update this component accordingly
 */

import { siteConfig } from '@/config/site';

interface BookingWidgetProps {
  className?: string;
}

export function BookingWidget({ className = '' }: BookingWidgetProps) {
  const calendlyUrl = siteConfig.scheduling.calendlyUrl;

  // Validation: ensure Calendly URL is configured
  if (!calendlyUrl) {
    return (
      <div className={`bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center ${className}`}>
        <p className="text-yellow-800">
          Booking widget is not configured. Please update the Calendly URL in{' '}
          <code className="bg-yellow-100 px-2 py-1 rounded">src/config/site.ts</code>
        </p>
      </div>
    );
  }

  // Extract Calendly username from URL
  // Supports formats:
  // - https://calendly.com/username
  // - https://calendly.com/username/event-name
  const match = calendlyUrl.match(/calendly\.com\/([^\/]+)/);
  const calendlyUsername = match ? match[1] : '';

  if (!calendlyUsername) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-6 text-center ${className}`}>
        <p className="text-red-800">
          Invalid Calendly URL format. Please check your configuration.
        </p>
      </div>
    );
  }

  return (
    <div className={className} role="region" aria-label="Appointment scheduling">
      {/* Calendly Inline Widget */}
      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: '320px', height: '700px' }}
      />
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </div>
  );
}
