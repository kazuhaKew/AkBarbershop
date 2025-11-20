import { Link } from "react-router";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#2E1F1B]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#C9A87C] to-[#8B7468] rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-[#2E1F1B]">AK</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-[#F5F1ED]">AkBarbershop</h1>
              <p className="text-xs text-[#C9A87C]">Hair Cut Serves</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link
              to="/book"
              className="px-6 py-2.5 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] font-semibold rounded-lg hover:shadow-xl hover:scale-105 transform transition-all"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#F5F1ED] hover:text-[#C9A87C] p-2"
            onClick={() => {
              const menu = document.getElementById('mobile-menu');
              menu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-3">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/gallery">Gallery</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
            <Link
              to="/book"
              className="px-6 py-2.5 bg-gradient-to-r from-[#C9A87C] to-[#8B7468] text-[#2E1F1B] font-semibold rounded-lg text-center hover:shadow-xl"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-[#F5F1ED] hover:text-[#C9A87C] font-medium transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-[#F5F1ED] hover:text-[#C9A87C] font-medium py-2 px-4 hover:bg-[#5E4B43]/30 rounded"
      onClick={() => {
        const menu = document.getElementById('mobile-menu');
        menu?.classList.add('hidden');
      }}
    >
      {children}
    </Link>
  );
}
