
import { Link } from 'react-router-dom';
import { Terminal, DollarSign, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-black border-b border-green-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <Terminal className="h-8 w-8 text-green-500 glow-green" />
            <span className="text-xl font-bold text-green-500 tracking-wider">ENFORGER</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-green-400/80 hover:text-green-400 transition-all duration-300 hover:glow-text"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-green-400/80 hover:text-green-400 transition-all duration-300 hover:glow-text"
            >
              Services
            </Link>
            <Link 
              to="/topup" 
              className="text-green-400/80 hover:text-green-400 transition-all duration-300 hover:glow-text flex items-center space-x-1"
            >
              <DollarSign className="w-4 h-4" />
              <span>Top Up</span>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild
              variant="outline" 
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
            >
              <Link to="/auth">
                <User className="w-4 h-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
