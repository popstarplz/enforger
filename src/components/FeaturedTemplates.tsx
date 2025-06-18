
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Download, Star } from 'lucide-react';

const FeaturedTemplates = () => {
  const templates = [
    {
      id: "STU_001",
      name: "Student ID Template",
      category: "Education",
      price: "$15",
      rating: 4.9
    },
    {
      id: "EMP_001", 
      name: "Employee Badge Template",
      category: "Corporate",
      price: "$20",
      rating: 4.8
    },
    {
      id: "MEM_001",
      name: "Membership Card Template", 
      category: "Organization",
      price: "$12",
      rating: 4.9
    },
    {
      id: "EVT_001",
      name: "Event Badge Template",
      category: "Events", 
      price: "$10",
      rating: 4.7
    }
  ];

  return (
    <section className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500 mb-4 glow-text">
            Featured Templates
          </h2>
          <p className="text-green-400/80 text-lg">
            Popular templates ready for instant download
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template) => (
            <Card key={template.id} className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="text-green-400/60 text-xs mb-2">{template.id}</div>
                <h3 className="text-green-400 font-bold text-sm mb-2 line-clamp-2">{template.name}</h3>
                
                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-green-400/60">Category:</span>
                    <span className="text-green-400">{template.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400/60">Price:</span>
                    <span className="text-green-400 font-semibold">{template.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400/60">Rating:</span>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-green-400 fill-current mr-1" />
                      <span className="text-green-400">{template.rating}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  asChild
                  size="sm"
                  className="bg-green-500 text-black hover:bg-green-400 font-bold w-full text-xs transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25"
                >
                  <Link to="/templates">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            variant="outline"
            className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 font-bold px-8 py-3"
          >
            <Link to="/templates">View All Templates</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
