
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-green-500 mb-6 glow-text">
            ENFORGER
          </h1>
          <p className="text-xl md:text-2xl text-green-400/80 mb-8 max-w-2xl mx-auto">
            Professional document generation with unmatched security
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-green-500 text-black hover:bg-green-400 font-bold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            <Link to="/services">Access System</Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Secure</h3>
            <p className="text-green-400/70 text-sm">Military-grade encryption</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
            <Zap className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Fast</h3>
            <p className="text-green-400/70 text-sm">Delivered within hours</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
            <Lock className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Private</h3>
            <p className="text-green-400/70 text-sm">Zero data retention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
