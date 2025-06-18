
import { Link } from 'react-router-dom';
import { Terminal, DollarSign, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-black border-b border-primary/30 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">ENFORGER</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-primary/80 hover:text-primary transition-colors"
            >
              $ ./home
            </Link>
            <Link 
              to="/services" 
              className="text-primary/80 hover:text-primary transition-colors"
            >
              $ ./services
            </Link>
            <Link 
              to="/topup" 
              className="text-primary/80 hover:text-primary transition-colors flex items-center space-x-1"
            >
              <DollarSign className="w-4 h-4" />
              <span>$ ./topup</span>
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-black font-mono"
            >
              <Link to="/auth">
                <User className="w-4 h-4 mr-2" />
                $ ./login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
