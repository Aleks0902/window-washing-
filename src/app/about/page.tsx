import { siteConfig } from '@/config/site';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Welcome to {siteConfig.business.name}! We are a professional window washing service 
            dedicated to keeping your windows spotless and your property looking its best.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Our Mission</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We strive to provide exceptional window washing services to homeowners and businesses 
            throughout {siteConfig.business.serviceArea}. With attention to detail and commitment 
            to quality, we ensure every window shines.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Why Choose Us</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6 leading-relaxed">
            <li>Professional, experienced team</li>
            <li>Eco-friendly cleaning solutions</li>
            <li>Competitive pricing</li>
            <li>Reliable and punctual service</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-primary">Service Area</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We proudly serve {siteConfig.business.serviceArea}. Contact us to see if we service your area.
          </p>

          {/* Young Entrepreneur Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              Owned and operated by a local 13-year-old resident of Fairfield. 
              <span className="block mt-2 text-primary font-medium">
                Thanks for your support of young entrepreneurs!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
