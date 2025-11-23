import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-white border-t border-white">
      <div className="max-w-7xl mx-auto px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">

          {/* Brand Section */}
          <div>
            <h3 className="mb-6">
              <img src="/vesralogo.svg" alt="Vesra logo" className="h-28 w-auto" />
            </h3>
            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Transforming businesses through innovative software solutions and cutting-edge technology.
            </p>
            <div className="px-6 py-4 bg-yellow-600 text-white text-lg font-medium">
              Building the Future
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-2xl text-black font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 text-xl hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-2xl text-black font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4 text-gray-400">
                <Phone size={28} className="mt-1 flex-shrink-0 text-primary-400" />
                <a
                  href="tel:9100608695"
                  className="hover:text-primary-400 text-xl transition-colors"
                >
                  9100608695
                </a>
              </li>

              <li className="flex items-start space-x-4 text-gray-400">
                <Mail size={28} className="mt-1 flex-shrink-0 text-primary-400" />
                <a
                  href="mailto:Vesrasoftware@gmail.com"
                  className="hover:text-primary-400 text-xl transition-colors"
                >
                  Vesrasoftware@gmail.com
                </a>
              </li>

              <li className="flex items-start space-x-4 text-gray-400">
                <MapPin size={28} className="mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-lg leading-relaxed">
                  Dr no 1-20-268, SY no 72, G2, 1st floor, KAIZEN MIRZA WHITE HOUSE,  
                  RASOOLPURA, BEGUMPET, HYDERABAD, TELANGANA - 500003
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-lg">
              &copy; {new Date().getFullYear()}{' '}
              <span className="text-primary-400 font-semibold">Vesra Software</span>.
              All rights reserved.
            </p>

            <p className="text-gray-500 text-md">
  Crafted with care by{" "}
  <a
    href="https://staffarc.in"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary-400 hover:underline"
  >
    Staffarc
  </a>
</p>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
