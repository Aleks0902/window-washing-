import { Service } from '@/config/site';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <h3 className="text-2xl font-semibold mb-4 text-primary">
        {service.name}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </article>
  );
}
