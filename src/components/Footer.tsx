
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-primary mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg">E</span>
              </div>
              <span className="text-primary font-heading font-bold text-2xl">Enforger</span>
            </div>
            <p className="text-gray-300 font-body mb-4 max-w-md">
              Professional identity documents made simple. Secure, reliable, and customizable solutions for all your document needs.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary text-sm">🔒</span>
              </div>
              <span className="text-gray-400 text-sm font-body">Secure Checkout</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-heading font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-gray-300 hover:text-primary transition-colors font-body">
                Services
              </Link>
              <Link to="/templates" className="block text-gray-300 hover:text-primary transition-colors font-body">
                Templates
              </Link>
              <Link to="/order" className="block text-gray-300 hover:text-primary transition-colors font-body">
                Order Now
              </Link>
              <Link to="/faq" className="block text-gray-300 hover:text-primary transition-colors font-body">
                FAQ
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-primary font-heading font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/terms" className="block text-gray-300 hover:text-primary transition-colors font-body">
                Terms of Service
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-primary transition-colors font-body">
                Privacy Policy
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-primary transition-colors font-body">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-body">
            © 2024 Enforger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
