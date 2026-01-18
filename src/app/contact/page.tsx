import { BookingWidget } from '@/components/BookingWidget';
import { siteConfig } from '@/config/site';

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We&apos;d love to hear from you! Whether you have questions about our services 
              or are ready to schedule an appointment, we&apos;re here to help.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Phone</h3>
                <a
                  href={`tel:${siteConfig.business.phone.replace(/\D/g, '')}`}
                  className="text-gray-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                >
                  {siteConfig.business.phone}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Email</h3>
                <a
                  href={`mailto:${siteConfig.business.email}`}
                  className="text-gray-700 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-1"
                >
                  {siteConfig.business.email}
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Service Area</h3>
                <p className="text-gray-600">{siteConfig.business.serviceArea}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">Business Hours</h3>
                <p className="text-gray-600">{siteConfig.business.hours.weekdays}</p>
                <p className="text-gray-600">{siteConfig.business.hours.weekends}</p>
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Schedule an Appointment</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Use our online scheduler to book your window washing service at a time 
              that works for you.
            </p>
            <BookingWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
