'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-start justify-center overflow-hidden" 
      aria-labelledby="hero-heading"
    >
      {/* Hero Background Image with Gradient Fallback */}
      <div className="absolute inset-0 z-0">
        {/* Background image using CSS - fails gracefully if image doesn't exist */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-windows.jpg)',
          }}
        />
      </div>

      {/* Hero Content - Positioned in upper third */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl text-center pt-12 md:pt-20 pb-24">
        <h1 
          id="hero-heading" 
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        >
          Professional Window Washing Services
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-white max-w-3xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-relaxed font-medium">
          Serving {siteConfig.business.serviceArea} with quality, reliability, and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/#booking"
            className="btn-primary"
          >
            Book an Appointment
          </Link>
          <Link
            href="/services"
            className="btn-secondary"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
