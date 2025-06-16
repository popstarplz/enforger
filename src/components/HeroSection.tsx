
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-black via-gray-900 to-black flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00FF00_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Professional{' '}
            <span className="text-primary animate-glow">Identity Documents</span>
            {' '}– Made Simple
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 font-body mb-8 max-w-3xl mx-auto">
            Order custom-made IDs or buy editable templates to create your own. 
            Secure, professional, and easy-to-use documents for all needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 font-heading font-semibold text-lg px-8 py-6 animate-glow"
            >
              <Link to="/order">Get Yours Custom-Made</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-black font-heading font-semibold text-lg px-8 py-6"
            >
              <Link to="/templates">Buy a DIY Template</Link>
            </Button>
          </div>

          {/* Value Proposition */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-body font-medium">
              Secure, professional, and easy-to-use documents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
