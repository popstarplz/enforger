
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { FileText, Download, Zap, Shield } from 'lucide-react';

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4 glow-text">
            Choose Your Service
          </h2>
          <p className="text-green-400/80 text-lg max-w-2xl mx-auto">
            Professional document creation with two distinct approaches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Custom Service */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-400">Custom Creation</h3>
              </div>
              
              <p className="text-green-400/70 mb-6">
                Professional document generation service tailored to your exact specifications
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Custom design integration</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Photo & logo embedding</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Security features</span>
                </div>
                <div className="flex items-center text-sm">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Professional quality</span>
                </div>
              </div>

              <Button 
                asChild
                className="bg-green-500 text-black hover:bg-green-400 font-bold w-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
              >
                <Link to="/order">Start Custom Order</Link>
              </Button>
            </CardContent>
          </Card>

          {/* DIY Templates */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Download className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-2xl font-bold text-green-400">Template Download</h3>
              </div>
              
              <p className="text-green-400/70 mb-6">
                Instant access to professionally designed templates for immediate download
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Instant download</span>
                </div>
                <div className="flex items-center text-sm">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Fully editable formats</span>
                </div>
                <div className="flex items-center text-sm">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Print-ready resolution</span>
                </div>
                <div className="flex items-center text-sm">
                  <Zap className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-green-400/80">Multiple file formats</span>
                </div>
              </div>

              <Button 
                asChild
                variant="outline"
                className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 w-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
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
