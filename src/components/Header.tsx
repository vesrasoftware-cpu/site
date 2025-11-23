import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-gray-800 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-white hover:text-primary-500 transition-colors"
            aria-label="Go to home"
          >
            <img src="/vesralogol.svg" alt="Vesra logo" className="h-20 w-auto sm:h-24" />
            <span className="h-20 w-auto sm:h-24">
              <img src="/vesralogor1.svg" alt="Vesra logo" className="h-20 w-auto sm:h-24" />
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 min-h-[44px] text-sm font-semibold rounded-md transition-all ${
                  currentPage === item.id
                    ? 'text-white bg-primary-600'
                    : 'text-black hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* CTA Button */}
            <button
              className="ml-4 px-6 py-2 min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 p-2 rounded-md hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-1 border-t border-gray-800 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 min-h-[44px] text-sm font-semibold rounded-md transition-all ${
                  currentPage === item.id
                    ? 'text-white bg-primary-600'
                    : 'text-black hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              className="w-full mt-3 px-4 py-3 min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md transition-colors"
              onClick={() => handleNavClick('contact')}
            >
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
