
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { FileText, Shield, Zap, Download } from 'lucide-react';

const Services = () => {
  const customServices = [
    { name: "US State Drivers License", price: "$18", link: "/driverslicense" },
    { name: "USA Passport (2021)", price: "$20", link: "/passport" },
    { name: "Bank Statements", price: "$15", link: "/bankstatements" },
    { name: "Credit Cards", price: "$16", link: "/creditcards" },
    { name: "Pay Stubs", price: "$12", link: "/paystubs" },
    { name: "Social Security Card", price: "$14", link: "/socialsecurity" },
    { name: "Bills (electricity, gas, water, internet)", price: "$10", link: "/bills" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-4 glow-text">
              Document <span className="text-purple-400">Services</span>
            </h1>
            <p className="text-lg text-green-400/80 max-w-2xl mx-auto">
              Professional document creation with advanced security protocols
            </p>
          </div>
        </section>

        {/* Custom Documents */}
        <section className="py-16 bg-gradient-to-b from-purple-950/50 to-gray-950 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-500 mb-3 glow-text">
                Custom <span className="text-purple-400">Documents</span>
              </h2>
              <p className="text-green-400/70 max-w-xl mx-auto">
                Choose from our professional document generation services
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/20 rounded-lg overflow-hidden">
                {customServices.map((service, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-4 border-green-500/10 hover:bg-green-500/5 transition-all duration-300 group ${
                      index !== customServices.length - 1 ? 'border-b' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-green-500/10 rounded-lg">
                        <FileText className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-green-400 font-medium text-lg group-hover:text-green-300 transition-colors">
                          {service.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <span className="text-green-500 font-bold text-xl">
                        {service.price}
                      </span>
                      <Button 
                        asChild
                        size="sm"
                        className="bg-green-500 text-black hover:bg-green-400 font-bold transition-all duration-300"
                      >
                        <Link to={service.link}>Order Now</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIY Templates Section */}
        <section className="py-16 bg-gradient-to-b from-gray-950 to-black relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-green-500 mb-3 glow-text">
                DIY <span className="text-blue-400">Templates</span>
              </h2>
              <p className="text-green-400/70 max-w-xl mx-auto">
                Download and customize professional templates instantly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 text-center hover:border-cyan-500/60 transition-all duration-300">
                <Zap className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-cyan-400 mb-2">Instant Access</h3>
                <p className="text-cyan-400/70 text-sm">
                  Immediate template download upon purchase
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 text-center hover:border-purple-500/60 transition-all duration-300">
                <FileText className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-purple-400 mb-2">Full Control</h3>
                <p className="text-purple-400/70 text-sm">
                  Complete customization with editable formats
                </p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 text-center hover:border-orange-500/60 transition-all duration-300">
                <Shield className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-orange-400 mb-2">Professional Quality</h3>
                <p className="text-orange-400/70 text-sm">
                  High-resolution, print-ready templates
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400 font-bold px-8 py-3 transition-all duration-300"
              >
                <Link to="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
