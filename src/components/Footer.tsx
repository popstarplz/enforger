
import { Terminal, Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary font-mono">
      <div className="container mx-auto px-4 py-12">
        {/* Terminal Header */}
        <div className="text-primary/80 text-sm mb-6">$ cat /system/footer.conf</div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="text-primary font-bold text-xl">ENFORGER</span>
            </div>
            <div className="text-primary/60 text-sm space-y-1">
              <div># Professional document creation</div>
              <div># Secure • Fast • Reliable</div>
              <div># System uptime: 99.9%</div>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="text-primary font-bold mb-4">SERVICES/</div>
            <div className="space-y-2 text-sm">
              <Link to="/services" className="block text-primary/60 hover:text-primary transition-colors">
                $ custom_creation
              </Link>
              <Link to="/templates" className="block text-primary/60 hover:text-primary transition-colors">
                $ diy_templates
              </Link>
              <Link to="/bulk" className="block text-primary/60 hover:text-primary transition-colors">
                $ bulk_orders
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <div className="text-primary font-bold mb-4">SUPPORT/</div>
            <div className="space-y-2 text-sm">
              <Link to="/help" className="block text-primary/60 hover:text-primary transition-colors">
                $ help_docs
              </Link>
              <Link to="/faq" className="block text-primary/60 hover:text-primary transition-colors">
                $ faq
              </Link>
              <Link to="/contact" className="block text-primary/60 hover:text-primary transition-colors">
                $ contact_support
              </Link>
            </div>
          </div>

          {/* System Info */}
          <div>
            <div className="text-primary font-bold mb-4">SYSTEM/</div>
            <div className="space-y-2 text-sm text-primary/60">
              <div>VERSION: v2.1.0</div>
              <div>BUILD: 2024.12.17</div>
              <div>STATUS: ONLINE</div>
              <div className="flex space-x-4 mt-4">
                <Github className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
                <Twitter className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
                <Mail className="h-4 w-4 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary/60">
            <div>© 2024 ENFORGER. All rights reserved. | System secured.</div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/security" className="hover:text-primary transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
