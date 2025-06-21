
import { Link } from 'react-router-dom';
import { DollarSign, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  return (
    <header className="bg-black border-b border-green-500/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Sidebar Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-green-400 hover:text-green-300 hover:bg-green-500/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 bg-gray-900/95 border-green-500/30">
              <nav className="flex flex-col space-y-6 mt-8">
                <Link 
                  to="/" 
                  className="text-green-400/80 hover:text-green-400 transition-all duration-300 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-500/10"
                >
                  Home
                </Link>
                <Link 
                  to="/services" 
                  className="text-green-400/80 hover:text-green-400 transition-all duration-300 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-500/10"
                >
                  Services
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/78e25b9c-bce0-4298-a89b-5237ee0fa826.png" 
              alt="Enforger Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-green-500 tracking-wider">ENFORGER</span>
          </Link>

          {/* Top Up Button */}
          <div className="flex items-center space-x-4">
            <Button 
              asChild
              variant="outline" 
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
            >
              <Link to="/topup">
                <DollarSign className="w-4 h-4 mr-2" />
                Top Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
