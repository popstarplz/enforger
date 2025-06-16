
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b-2 border-primary sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-lg">E</span>
            </div>
            <span className="text-primary font-heading font-bold text-2xl">Enforger</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors font-body">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-primary transition-colors font-body">
              Services
            </Link>
            <Link to="/templates" className="text-white hover:text-primary transition-colors font-body">
              Templates
            </Link>
            <Link to="/faq" className="text-white hover:text-primary transition-colors font-body">
              FAQ
            </Link>
            <Button 
              asChild
              className="bg-primary text-black hover:bg-primary/90 font-semibold"
            >
              <Link to="/order">Get Started</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link to="/" className="text-white hover:text-primary transition-colors font-body">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-primary transition-colors font-body">
                Services
              </Link>
              <Link to="/templates" className="text-white hover:text-primary transition-colors font-body">
                Templates
              </Link>
              <Link to="/faq" className="text-white hover:text-primary transition-colors font-body">
                FAQ
              </Link>
              <Button 
                asChild
                className="bg-primary text-black hover:bg-primary/90 font-semibold w-fit"
              >
                <Link to="/order">Get Started</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
