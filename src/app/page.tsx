import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { BookingWidget } from '@/components/BookingWidget';
import { siteConfig } from '@/config/site';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Services Preview Section */}
      <section aria-labelledby="services-heading" className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
            We offer window washing services for residential 
            and commercial properties throughout {siteConfig.business.serviceArea}.
          </p>

          {/* Eco-Friendly Highlight */}
          <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-4xl">🌿</span>
              <h3 className="text-2xl font-bold text-green-800">Eco-Friendly Cleaning Solutions</h3>
            </div>
            <p className="text-center text-green-700 leading-relaxed">
              We use environmentally safe products that are gentle on your home and the planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {siteConfig.services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Pricing Section */}
          <section className="bg-primary text-white rounded-lg p-8 mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Pricing</h2>
            <p className="text-xl text-center mb-6 text-primary-50">
              {siteConfig.pricing.message}
            </p>
            <div className="text-center mb-6">
              <span className="text-5xl font-bold">${siteConfig.pricing.current}</span>
              <span className="text-xl ml-2 text-primary-50">per window</span>
            </div>
            <p className="text-center text-primary-50 max-w-2xl mx-auto">
              {siteConfig.pricing.budgetFriendly}
            </p>
          </section>

          {/* Call to Action Section */}
          <section className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contact us today to discuss your window washing needs. We&apos;ll provide a free estimate 
              and work with you to schedule service at your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${siteConfig.business.phone.replace(/\D/g, '')}`}
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Call {siteConfig.business.phone}
              </a>
              <a
                href="/#booking"
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
              >
                Schedule Online
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* Image Gallery with Young Entrepreneur Text */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Text Above Image */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Owned and operated by a local 13-year-old resident of Fairfield. 
              <span className="block mt-2 text-primary font-semibold text-xl">
                Thanks for your support of young entrepreneurs!
              </span>
            </p>
          </div>

          {/* Single Large Image */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/window-cleaning-1.jpg"
              alt="Professional window cleaning service"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" aria-labelledby="booking-heading" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="booking-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Schedule an Appointment
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto leading-relaxed">
            Book your window washing service today. Choose a time that works for you.
          </p>
          <BookingWidget />
        </div>
      </section>
    </>
  );
}
