import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "AkBarbershop Hair Cut Serves - Premier Barbershop" },
    { name: "description", content: "Experience top-notch haircuts and grooming services at AkBarbershop. Professional barbers, modern styles, traditional techniques." },
  ];
}

export default function Home() {
  return (
    <div className="bg-[#F5F1ED]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E1F1B] via-[#5E4B43] to-[#2E1F1B] opacity-95"></div>
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)',
          }}></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F5F1ED] mb-6 animate-fade-in">
            Welcome to<br />
            <span className="bg-gradient-to-r from-[#C9A87C] to-[#8B7468] bg-clip-text text-transparent">
              AkBarbershop
            </span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#C9A87C] mb-4 font-light">
            Hair Cut Serves
          </p>
          <p className="text-lg sm:text-xl text-[#F5F1ED]/80 mb-12 max-w-2xl mx-auto">
            Where tradition meets modern style. Experience exceptional grooming services in a premium environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/book"
              className="px-10 py-4 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all"
            >
              Book Your Appointment
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border-2 border-[#C9A87C] text-[#F5F1ED] text-lg font-semibold rounded-lg hover:bg-[#C9A87C]/10 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#C9A87C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2E1F1B] mb-16">
            Why Choose <span className="text-[#5E4B43]">AkBarbershop</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon="✂️"
              title="Expert Barbers"
              description="Our skilled professionals bring years of experience and passion to every cut."
            />
            <FeatureCard
              icon="⭐"
              title="Premium Service"
              description="Experience luxury grooming with top-quality products and attention to detail."
            />
            <FeatureCard
              icon="🕒"
              title="Convenient Booking"
              description="Easy online booking system to schedule your appointment at your convenience."
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#F5F1ED] mb-4">
            Our Services
          </h2>
          <p className="text-center text-[#C9A87C] text-lg mb-16">
            Professional grooming services tailored to your style
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard title="Haircuts" price="From $35" icon="💈" />
            <ServiceCard title="Beard Grooming" price="From $25" icon="🧔" />
            <ServiceCard title="Hot Towel Shave" price="$45" icon="🪒" />
            <ServiceCard title="Hair Styling" price="From $50" icon="✨" />
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] font-bold rounded-lg hover:shadow-xl hover:scale-105 transform transition-all"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#F5F1ED]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2E1F1B] mb-6">
            Ready for a Fresh Look?
          </h2>
          <p className="text-xl text-[#5E4B43] mb-8">
            Book your appointment today and experience the AkBarbershop difference.
          </p>
          <Link
            to="/book"
            className="inline-block px-12 py-4 bg-gradient-to-r from-[#2E1F1B] to-[#5E4B43] text-[#F5F1ED] text-lg font-bold rounded-lg hover:shadow-2xl hover:scale-105 transform transition-all"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-2 transform transition-transform">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-[#2E1F1B] mb-3">{title}</h3>
      <p className="text-[#5E4B43]">{description}</p>
    </div>
  );
}

function ServiceCard({ title, price, icon }: { title: string; price: string; icon: string }) {
  return (
    <div className="bg-[#5E4B43]/30 backdrop-blur-sm p-6 rounded-xl border border-[#C9A87C]/20 hover:border-[#C9A87C] transition-all hover:scale-105 transform">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold text-[#F5F1ED] mb-2">{title}</h3>
      <p className="text-[#C9A87C] font-semibold">{price}</p>
    </div>
  );
}
