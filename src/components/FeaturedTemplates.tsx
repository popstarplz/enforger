
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeaturedTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Student ID",
      description: "Professional student identification cards",
      price: "$12.99",
      image: "📚",
      popular: true
    },
    {
      id: 2,
      name: "Membership Card",
      description: "Club and organization membership cards",
      price: "$9.99",
      image: "🎯",
      popular: false
    },
    {
      id: 3,
      name: "Event Badge",
      description: "Conference and event identification badges",
      price: "$7.99",
      image: "🎫",
      popular: false
    },
    {
      id: 4,
      name: "Employee ID",
      description: "Corporate employee identification cards",
      price: "$15.99",
      image: "💼",
      popular: true
    }
  ];

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured <span className="text-primary">Templates</span>
          </h2>
          <p className="text-xl text-gray-300 font-body max-w-2xl mx-auto">
            Professional document templates ready for customization. 
            Download, edit, and print your documents instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template) => (
            <Card key={template.id} className="bg-black border-primary/20 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                {template.popular && (
                  <div className="inline-flex items-center bg-primary text-black text-xs font-semibold px-2 py-1 rounded-full mb-4">
                    ⭐ Popular
                  </div>
                )}
                
                <div className="text-6xl mb-4 text-center opacity-80">
                  {template.image}
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-white mb-2">
                  {template.name}
                </h3>
                
                <p className="text-gray-400 font-body text-sm mb-4">
                  {template.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-primary font-heading font-bold text-lg">
                    {template.price}
                  </span>
                  <Button 
                    size="sm"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-black border border-primary/30"
                  >
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-black font-heading font-semibold"
          >
            <Link to="/templates">View All Templates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
