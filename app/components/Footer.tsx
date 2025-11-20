import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#2E1F1B] to-[#5E4B43] text-[#F5F1ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A87C] to-[#8B7468] rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-[#2E1F1B]">AK</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">AkBarbershop</h2>
                <p className="text-sm text-[#C9A87C]">Hair Cut Serves</p>
              </div>
            </div>
            <p className="text-[#F5F1ED]/80 mb-4 max-w-md">
              A premier barbershop offering top-notch haircuts, grooming services, and exceptional customer experience.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon="facebook" />
              <SocialLink href="#" icon="instagram" />
              <SocialLink href="#" icon="twitter" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#C9A87C]">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/gallery">Gallery</FooterLink>
              <FooterLink to="/book">Book Now</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#C9A87C]">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>123 Main Street<br />City, State 12345</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+1234567890" className="hover:text-[#C9A87C]">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@akbarbershop.com" className="hover:text-[#C9A87C]">
                  info@akbarbershop.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕒</span>
                <span>Mon-Sat: 9AM-7PM<br />Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#5E4B43] mt-8 pt-8 text-center text-sm text-[#F5F1ED]/60">
          <p>&copy; {currentYear} AkBarbershop Hair Cut Serves. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-[#F5F1ED]/80 hover:text-[#C9A87C] transition-colors">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-[#5E4B43] flex items-center justify-center hover:bg-[#C9A87C] hover:scale-110 transform transition-all"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-xl">
        {icon === 'facebook' && '📘'}
        {icon === 'instagram' && '📷'}
        {icon === 'twitter' && '🐦'}
      </span>
    </a>
  );
}
