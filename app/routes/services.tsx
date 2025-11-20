import type { Route } from "./+types/services";
import { Link } from "react-router";
import { getServices } from "../db/db.server";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - AkBarbershop Hair Cut Serves" },
    { name: "description", content: "Explore our range of professional grooming services including haircuts, beard trims, hot towel shaves, and more." },
  ];
}

export async function loader() {
  const services = getServices();
  return { services };
}

export default function Services({ loaderData }: Route.ComponentProps) {
  const { services } = loaderData;

  const categories = {
    haircut: { title: "Haircuts", icon: "💈", color: "from-[#C9A87C] to-[#8B7468]" },
    styling: { title: "Styling", icon: "✨", color: "from-[#8B7468] to-[#5E4B43]" },
    grooming: { title: "Grooming", icon: "🧔", color: "from-[#5E4B43] to-[#2E1F1B]" },
    special: { title: "Special Packages", icon: "⭐", color: "from-[#C9A87C] to-[#5E4B43]" }
  };

  const servicesByCategory = {
    haircut: services.filter(s => s.category === 'haircut'),
    styling: services.filter(s => s.category === 'styling'),
    grooming: services.filter(s => s.category === 'grooming'),
    special: services.filter(s => s.category === 'special')
  };

  return (
    <div className="bg-[#F5F1ED] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F1ED] mb-6">
            Our Services
          </h1>
          <p className="text-xl text-[#C9A87C] max-w-3xl mx-auto">
            Professional grooming services designed to make you look and feel your best. 
            Every service includes a complimentary consultation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {Object.entries(servicesByCategory).map(([category, categoryServices]) => {
            if (categoryServices.length === 0) return null;
            const categoryInfo = categories[category as keyof typeof categories];
            
            return (
              <div key={category} className="mb-16">
                <div className="flex items-center justify-center mb-8">
                  <span className="text-4xl mr-4">{categoryInfo.icon}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2E1F1B]">
                    {categoryInfo.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      gradientColor={categoryInfo.color}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F1ED] mb-6">
            Ready to Book?
          </h2>
          <p className="text-xl text-[#C9A87C] mb-8">
            Schedule your appointment today and experience premium grooming.
          </p>
          <Link
            to="/book"
            className="inline-block px-12 py-4 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ 
  service, 
  gradientColor 
}: { 
  service: { name: string; description: string; price: string; duration: string };
  gradientColor: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 transform group">
      <div className={`h-2 bg-gradient-to-r ${gradientColor}`}></div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#2E1F1B] mb-3 group-hover:text-[#5E4B43] transition-colors">
          {service.name}
        </h3>
        <p className="text-[#5E4B43] mb-4 h-12">
          {service.description}
        </p>
        <div className="flex justify-between items-center border-t border-[#F5F1ED] pt-4">
          <div>
            <p className="text-2xl font-bold text-[#2E1F1B]">{service.price}</p>
            <p className="text-sm text-[#8B7468]">⏱️ {service.duration}</p>
          </div>
          <Link
            to="/book"
            className="px-4 py-2 bg-gradient-to-r from-[#5E4B43] to-[#2E1F1B] text-[#F5F1ED] font-semibold rounded-lg hover:shadow-lg transition-all text-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
