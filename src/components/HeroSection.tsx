
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, FileText } from 'lucide-react';

const HeroSection = () => {
  const pricingOptions = [
    {
      name: "US State Drivers License",
      price: "$45",
      description: "Professional state identification documents with advanced security features",
      features: ["All 50 states available", "Security integration", "Photo embedding", "Professional finish"],
      link: "/driverslicense"
    }
  ];

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
        </div>

        {/* Price Sheet */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Document Options & Pricing</h2>
          
          <div className="space-y-6">
            {pricingOptions.map((option, index) => (
              <div key={index} className="bg-black/30 border border-green-500/20 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold text-green-400">{option.name}</h3>
                  </div>
                  <span className="text-green-500 font-bold text-2xl">{option.price}</span>
                </div>
                
                <p className="text-green-400/70 mb-4 text-sm">{option.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {option.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-green-400/80 text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild
                  className="bg-green-500 text-black hover:bg-green-400 font-bold w-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                  <Link to={option.link}>Initialize Order</Link>
                </Button>
              </div>
            ))}
          </div>
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
