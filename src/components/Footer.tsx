import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200" role="contentinfo">
      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Business Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">{siteConfig.business.name}</h3>
            <p className="text-gray-600 mb-2">
              Serving {siteConfig.business.serviceArea}
            </p>
            <address className="text-gray-600 not-italic">
              <p>
                <a
                  href={`tel:${siteConfig.business.phone.replace(/\D/g, '')}`}
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  {siteConfig.business.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                >
                  {siteConfig.business.email}
                </a>
              </p>
            </address>
            <div className="mt-4 text-gray-600">
              <p className="font-semibold text-primary mb-2">Business Hours</p>
              <p>{siteConfig.business.hours.weekdays}</p>
              <p>{siteConfig.business.hours.weekends}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Get Started</h3>
            <p className="text-gray-600 mb-4">
              Ready for spotless windows? Schedule your appointment today.
            </p>
            <Link
              href="/#booking"
              className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {siteConfig.business.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
