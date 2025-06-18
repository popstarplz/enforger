
import { Terminal, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-6 w-6 text-green-500 glow-green" />
              <span className="text-green-500 font-bold text-xl">ENFORGER</span>
            </div>
            <p className="text-green-400/60 text-sm">
              Professional document creation with unmatched security and reliability.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Services</h4>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block text-green-400/60 hover:text-green-400 transition-colors">
                Custom Creation
              </Link>
              <Link to="/templates" className="block text-green-400/60 hover:text-green-400 transition-colors">
                Template Downloads
              </Link>
              <Link to="/bulk" className="block text-green-400/60 hover:text-green-400 transition-colors">
                Bulk Orders
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="block text-green-400/60 hover:text-green-400 transition-colors">
                Help Center
              </Link>
              <Link to="/faq" className="block text-green-400/60 hover:text-green-400 transition-colors">
                FAQ
              </Link>
              <Link to="/contact" className="block text-green-400/60 hover:text-green-400 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-green-400 font-bold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-green-400/60 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-green-400/60 hover:text-green-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-green-400/60 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-green-500/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-400/60">
            <div>© 2024 ENFORGER. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link>
              <Link to="/security" className="hover:text-green-400 transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
