
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Zap, FileText } from 'lucide-react';

const Services = () => {
  const customServices = [
    {
      name: "US State Drivers License",
      price: "$45",
      link: "/driverslicense",
      color: "green"
    },
    {
      name: "Bank Statements",
      price: "$35",
      link: "/bankstatements",
      color: "blue"
    },
    {
      name: "Pay Stubs",
      price: "$25",
      link: "/paystubs",
      color: "purple"
    },
    {
      name: "Bills (electricity, gas, water, internet)",
      price: "$20",
      link: "/bills",
      color: "cyan"
    },
    {
      name: "Credit Cards",
      price: "$40",
      link: "/creditcards",
      color: "orange"
    },
    {
      name: "USA Passport (2021)",
      price: "$65",
      link: "/passport",
      color: "pink"
    },
    {
      name: "Social Security Card",
      price: "$30",
      link: "/socialsecurity",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: "border-green-500/30 hover:border-green-500/60 bg-green-500/5",
      blue: "border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5",
      purple: "border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5",
      cyan: "border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/5",
      orange: "border-orange-500/30 hover:border-orange-500/60 bg-orange-500/5",
      pink: "border-pink-500/30 hover:border-pink-500/60 bg-pink-500/5",
      yellow: "border-yellow-500/30 hover:border-yellow-500/60 bg-yellow-500/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-6 glow-text">
              <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl text-green-400/80 max-w-3xl mx-auto leading-relaxed">
              Advanced document creation protocols. Choose your access level.
            </p>
          </div>
        </section>

        {/* Custom Documents */}
        <section className="py-20 bg-gradient-to-b from-purple-950/50 to-gray-950 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-500 mb-4 glow-text">
                Custom <span className="text-purple-400">Documents</span>
              </h2>
              <p className="text-lg text-green-400/70 max-w-2xl mx-auto">
                Professional document generation with advanced security protocols
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {customServices.map((service, index) => (
                <div key={index} className={`backdrop-blur-sm ${getColorClasses(service.color)} rounded-lg p-6 transition-all duration-300 group`}>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <FileText className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-bold text-green-400">
                        {service.name}
                      </h3>
                    </div>
                    <span className="text-green-500 font-bold text-xl">
                      {service.price}
                    </span>
                  </div>

                  <Button 
                    asChild
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
                  >
                    <Link to={service.link}>Initialize Order</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIY Templates Section */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-500 mb-4 glow-text">
                Template <span className="text-blue-400">Access</span>
              </h2>
              <p className="text-lg text-green-400/70 max-w-2xl mx-auto">
                Direct access to encrypted template protocols for independent deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">
                    Instant Access
                  </h3>
                  <p className="text-cyan-400/70">
                    Immediate template deployment upon verification
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-purple-400 mb-3">
                    Full Control
                  </h3>
                  <p className="text-purple-400/70">
                    Complete customization access with encryption protocols
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-orange-400 mb-3">
                    Secure Output
                  </h3>
                  <p className="text-orange-400/70">
                    Professional-grade security for all generated documents
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
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
