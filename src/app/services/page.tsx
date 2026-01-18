import { ServiceCard } from '@/components/ServiceCard';
import { siteConfig } from '@/config/site';

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-primary">Our Services</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          We offer window washing services for residential 
          and commercial properties throughout {siteConfig.business.serviceArea}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
    </div>
  );
}
