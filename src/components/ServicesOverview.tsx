
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Choose Your <span className="text-primary">Approach</span>
          </h2>
          <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
            Whether you want us to handle everything or prefer to do it yourself, 
            we have the perfect solution for your document needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Custom Document Creation */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30 hover:border-primary/50 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-3xl">🎨</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Custom Document Creation
              </h3>
              
              <p className="text-gray-300 font-body mb-6 text-lg">
                Let us handle the details—provide your info, and we'll craft a polished, 
                professional document tailored to your exact specifications.
              </p>
              
              <div className="mb-6">
                <span className="text-primary font-heading font-bold text-xl">
                  Starting at $25
                </span>
                <span className="text-gray-400 font-body ml-2">per document</span>
              </div>

              <ul className="text-left text-gray-300 font-body mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Professional design and layout
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  High-quality materials and printing
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Fast turnaround (2-3 business days)
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Revision support included
                </li>
              </ul>
              
              <Button 
                asChild
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-heading font-semibold w-full"
              >
                <Link to="/order">Order Now</Link>
              </Button>
            </CardContent>
          </Card>

          {/* DIY Templates */}
          <Card className="bg-gradient-to-br from-gray-900 to-black border-primary/20 hover:border-primary/40 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse">
                <span className="text-3xl">🛠️</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                DIY Templates
              </h3>
              
              <p className="text-gray-300 font-body mb-6 text-lg">
                Want full control? Purchase our professionally designed templates 
                and customize them yourself with your preferred editing software.
              </p>
              
              <div className="mb-6">
                <span className="text-primary font-heading font-bold text-xl">
                  Starting at $7.99
                </span>
                <span className="text-gray-400 font-body ml-2">per template</span>
              </div>

              <ul className="text-left text-gray-300 font-body mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Instant download after purchase
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Editable PDF and PSD formats
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Print-ready high resolution
                </li>
                <li className="flex items-center">
                  <span className="text-primary mr-2">✓</span>
                  Lifetime access to downloads
                </li>
              </ul>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black font-heading font-semibold w-full"
              >
                <Link to="/templates">Browse Templates</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
