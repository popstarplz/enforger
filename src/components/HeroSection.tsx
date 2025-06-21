
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Content */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src="/lovable-uploads/78e25b9c-bce0-4298-a89b-5237ee0fa826.png" 
              alt="Enforger Logo" 
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-green-500 glow-text">
              ENFORGER
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-green-400/80 mb-12 max-w-3xl mx-auto">
            Professional document generation and DIY Templates for all your Identity Verification Needs
          </p>
          
          <div className="flex flex-col items-center space-y-4 max-w-xs mx-auto">
            <Button 
              asChild
              size="lg"
              className="bg-green-500 text-black hover:bg-green-400 font-bold px-8 py-3 w-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            >
              <Link to="/auth">Login</Link>
            </Button>
            
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 font-bold px-8 py-3 w-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Link to="/auth">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
