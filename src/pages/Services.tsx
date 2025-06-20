
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, Zap, FileText, Users, Building, CreditCard, Calendar } from 'lucide-react';

const Services = () => {
  const customServices = [
    {
      name: "Identity Cards",
      description: "Professional identification documents with advanced security features",
      price: "$25",
      icon: Shield,
      features: ["Security integration", "Photo embedding", "Encrypted data", "Professional finish"]
    },
    {
      name: "Access Badges",
      description: "Corporate and institutional access control solutions",
      price: "$30",
      icon: Building,
      features: ["Access protocols", "Department coding", "Security levels", "Instant activation"]
    },
    {
      name: "Membership Cards",
      description: "Exclusive membership identification systems",
      price: "$20",
      icon: Users,
      features: ["Custom encoding", "Member verification", "Expiration protocols", "Multiple formats"]
    },
    {
      name: "Event Passes",
      description: "Conference and event authentication systems",
      price: "$15",
      icon: Calendar,
      features: ["Event protocols", "Role verification", "Network access", "Rapid deployment"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-6 glow-text">
              System <span className="text-green-400">Access</span>
            </h1>
            <p className="text-xl text-green-400/80 max-w-3xl mx-auto leading-relaxed">
              Advanced document creation protocols. Choose your access level.
            </p>
          </div>
        </section>

        {/* Custom Services */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-500 mb-4 glow-text">
                Custom <span className="text-green-400">Creation</span>
              </h2>
              <p className="text-lg text-green-400/70 max-w-2xl mx-auto">
                Professional document generation with advanced security protocols
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {customServices.map((service, index) => (
                <Card key={index} className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center">
                        <service.icon className="w-8 h-8 text-green-500 mr-3" />
                        <h3 className="text-2xl font-bold text-green-400">
                          {service.name}
                        </h3>
                      </div>
                      <span className="text-green-500 font-bold text-xl">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-green-400/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-green-400/80">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      asChild
                      className="bg-green-500 text-black hover:bg-green-400 font-bold w-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
                    >
                      <Link to="/order">Initialize Order</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild
                size="lg"
                className="bg-green-500 text-black hover:bg-green-400 font-bold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                <Link to="/order">Access System</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DIY Templates Section */}
        <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-500/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-green-500 mb-4 glow-text">
                Template <span className="text-green-400">Access</span>
              </h2>
              <p className="text-lg text-green-400/70 max-w-2xl mx-auto">
                Direct access to encrypted template protocols for independent deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    Instant Access
                  </h3>
                  <p className="text-green-400/70">
                    Immediate template deployment upon verification
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <FileText className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    Full Control
                  </h3>
                  <p className="text-green-400/70">
                    Complete customization access with encryption protocols
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-400 mb-3">
                    Secure Output
                  </h3>
                  <p className="text-green-400/70">
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
                className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 font-bold px-8 py-3 transition-all duration-300"
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
