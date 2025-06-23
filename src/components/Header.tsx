
import { Link } from 'react-router-dom';
import { DollarSign, Menu, LogIn, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  // TODO: This should be connected to actual user balance from Supabase
  const userBalance = 0.00; // Placeholder - will be replaced with real balance

  return (
    <header className="bg-black border-b border-green-500/20 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
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
                <Link 
                  to="/templates" 
                  className="text-green-400/80 hover:text-green-400 transition-all duration-300 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-500/10"
                >
                  Templates
                </Link>
                <Link 
                  to="/topup" 
                  className="text-green-400/80 hover:text-green-400 transition-all duration-300 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-500/10"
                >
                  Top Up
                </Link>
                <Link 
                  to="/order" 
                  className="text-green-400/80 hover:text-green-400 transition-all duration-300 text-lg font-medium px-4 py-2 rounded-lg hover:bg-green-500/10"
                >
                  My Orders
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

          {/* Right side - Balance and Login */}
          <div className="flex items-center space-x-4">
            {/* Balance Display */}
            <div className="flex items-center space-x-2 bg-gray-900/50 border border-green-500/30 rounded-lg px-3 py-2">
              <Wallet className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-semibold">${userBalance.toFixed(2)}</span>
            </div>
            
            {/* Top Up Button */}
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
            >
              <Link to="/topup">
                <DollarSign className="w-4 h-4 mr-1" />
                Top Up
              </Link>
            </Button>

            {/* Login Button */}
            <Button 
              asChild
              variant="outline" 
              size="sm"
              className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
            >
              <Link to="/login">
                <LogIn className="w-4 h-4 mr-2" />
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
