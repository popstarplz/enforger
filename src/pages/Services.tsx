
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const customServices = [
    {
      name: "Student IDs",
      description: "Professional student identification cards for schools and universities",
      price: "$25",
      features: ["Custom school branding", "Photo integration", "Security features", "Bulk discounts available"]
    },
    {
      name: "Employee Badges",
      description: "Corporate employee identification and access cards",
      price: "$30",
      features: ["Company logo integration", "Department coding", "Access level indicators", "Professional finish"]
    },
    {
      name: "Membership Cards",
      description: "Club and organization membership identification",
      price: "$20",
      features: ["Custom design", "Member number integration", "Expiration dates", "Multiple formats"]
    },
    {
      name: "Event Badges",
      description: "Conference, trade show, and event identification",
      price: "$15",
      features: ["Event branding", "Role indicators", "Networking features", "Quick turnaround"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-gray-300 font-body max-w-3xl mx-auto">
              Professional document creation services tailored to your needs. 
              Choose between our full-service custom creation or DIY template solutions.
            </p>
          </div>
        </section>

        {/* Custom Services */}
        <section className="py-20 bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-white mb-4">
                Custom Document <span className="text-primary">Creation</span>
              </h2>
              <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
                Let our experts handle everything. We'll create professional, 
                high-quality documents based on your specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {customServices.map((service, index) => (
                <Card key={index} className="bg-black border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-heading font-bold text-white">
                        {service.name}
                      </h3>
                      <span className="text-primary font-heading font-bold text-xl">
                        {service.price}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 font-body mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 font-body">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button 
                      asChild
                      className="bg-primary text-black hover:bg-primary/90 font-semibold w-full"
                    >
                      <Link to="/order">Order This Service</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 font-heading font-semibold"
              >
                <Link to="/order">Start Custom Order</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DIY Templates Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading font-bold text-white mb-4">
                DIY <span className="text-primary">Templates</span>
              </h2>
              <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
                Prefer to do it yourself? Our professionally designed templates 
                give you complete control over the customization process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-950 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">📄</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    Instant Download
                  </h3>
                  <p className="text-gray-300 font-body">
                    Get your templates immediately after purchase
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-950 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    Fully Editable
                  </h3>
                  <p className="text-gray-300 font-body">
                    Customize every element to match your needs
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-950 border-primary/20">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🖨️</div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    Print Ready
                  </h3>
                  <p className="text-gray-300 font-body">
                    High-resolution files ready for professional printing
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black font-heading font-semibold"
              >
                <Link to="/templates">Browse All Templates</Link>
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
