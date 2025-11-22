import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Pillars', href: '#pillars' },
    { name: 'Platform', href: '#platform' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <img
              src={import.meta.env.VITE_APP_LOGO_PLACEHOLDER}
              alt="Earlington Legacy Initiative"
              className="h-14 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/60x60/2563EB/ffffff?text=ELI';
              }}
            />
            <div className="hidden md:block">
              <span className="text-xl font-bold text-gray-900 block">Earlington Legacy Initiative</span>
              <p className="text-xs text-gray-600">Building Tomorrow's Legacy Today</p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-gray-700 hover:text-primary font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:shadow-lg"
            >
              Donate
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#donate"
              className="block bg-primary text-white px-6 py-3 rounded-full font-semibold text-center shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
