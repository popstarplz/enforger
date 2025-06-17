
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-primary font-mono">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="text-primary font-bold text-xl">ENFORGER</span>
          </Link>

          {/* Desktop Navigation */}
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
              to="/templates" 
              className="text-primary/80 hover:text-primary transition-colors"
            >
              $ ./templates
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black font-mono"
            >
              <Link to="/login">$ login</Link>
            </Button>
            <Button 
              asChild
              className="bg-primary text-black hover:bg-primary/90 font-mono font-bold"
            >
              <Link to="/order">$ start_order</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/30 bg-black">
            <nav className="flex flex-col space-y-4 p-4">
              <Link 
                to="/" 
                className="text-primary/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                $ ./home
              </Link>
              <Link 
                to="/services" 
                className="text-primary/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                $ ./services
              </Link>
              <Link 
                to="/templates" 
                className="text-primary/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                $ ./templates
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-primary/30">
                <Button 
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black font-mono"
                >
                  <Link to="/login">$ login</Link>
                </Button>
                <Button 
                  asChild
                  className="bg-primary text-black hover:bg-primary/90 font-mono font-bold"
                >
                  <Link to="/order">$ start_order</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
