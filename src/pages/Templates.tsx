
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Download, Eye, Star, ShoppingCart } from 'lucide-react';
import TemplatePreview from '@/components/templates/TemplatePreview';

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Templates', count: 15 },
    { id: 'identification', name: 'ID Documents', count: 5 },
    { id: 'bills', name: 'Utility Bills', count: 4 },
    { id: 'financial', name: 'Financial', count: 6 }
  ];

  const templates = [
    {
      id: 'ca-drivers-license-real-id',
      name: 'CA Drivers License (REAL ID)',
      category: 'identification',
      price: 25.00,
      rating: 4.9,
      reviews: 127,
      description: 'This template includes all layers for front, back and the hologram seal and DMV text for users to edit in Adobe Photoshop 2025 or Photopea Software. Template is 1200 DPI and already scaled to the size of a real credit card size just like a real physical ID.',
      features: [
        'Front and back sides included',
        'Hologram seal layer',
        'DMV text elements',
        '1200 DPI resolution',
        'Credit card size scaled',
        'Adobe Photoshop 2025 compatible',
        'Photopea Software compatible'
      ],
      previewImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop',
      tags: ['California', 'REAL ID', 'Drivers License', 'PSD']
    },
    {
      id: 'verizon-bill-template',
      name: 'Verizon Bill Statement',
      category: 'bills',
      price: 18.00,
      rating: 4.8,
      reviews: 89,
      description: 'Complete Verizon phone bill statement template with 3 pages that users can use to verify their home address. Includes all necessary billing information sections and authentic Verizon branding elements.',
      features: [
        '3-page bill statement',
        'Address verification ready',
        'Authentic Verizon branding',
        'Editable billing information',
        'High-resolution template',
        'Multiple format support'
      ],
      previewImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      tags: ['Verizon', 'Phone Bill', 'Address Verification', 'PSD']
    },
    {
      id: 'paystub-template',
      name: 'Professional Pay Stub',
      category: 'financial',
      price: 15.00,
      rating: 4.7,
      reviews: 156,
      description: 'Professional pay stub template with all standard payroll information fields. Includes year-to-date calculations, tax deductions, and employer information sections.',
      features: [
        'Standard payroll format',
        'YTD calculations',
        'Tax deduction sections',
        'Employer information fields',
        'Professional layout',
        'Easy to customize'
      ],
      previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Pay Stub', 'Payroll', 'Financial', 'PSD']
    }
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === selectedCategory);

  const handlePurchase = (template: any) => {
    // TODO: Implement purchase logic
    console.log('Purchasing template:', template.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      <main className="pt-16">
        {/* Header Section */}
        <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-purple-950 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center mb-6">
              <Link to="/services" className="text-green-400 hover:text-green-300 mr-4">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-green-500 glow-text">
                PSD <span className="text-purple-400">Templates</span>
              </h1>
            </div>
            <p className="text-lg text-green-400/80 max-w-2xl">
              Professional Photoshop templates ready for customization
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gradient-to-b from-purple-950/50 to-gray-950">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-green-500 text-black hover:bg-green-400"
                      : "border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                  } transition-all duration-300`}
                >
                  {category.name}
                  <Badge className="ml-2 bg-green-400/20 text-green-400 border-none">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-12 bg-gradient-to-b from-gray-950 to-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template) => (
                <Card key={template.id} className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
                  <CardHeader className="p-4">
                    <div className="aspect-video bg-gray-800/50 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={template.previewImage} 
                        alt={template.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardTitle className="text-green-400 text-lg">{template.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-green-400 fill-current" />
                        <span className="text-green-400 ml-1">{template.rating}</span>
                      </div>
                      <span className="text-green-400/60">({template.reviews} reviews)</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} className="bg-purple-500/20 text-purple-400 border-purple-500/30 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-green-500">${template.price}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedTemplate(template)}
                        className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                    </div>
                    <Button 
                      onClick={() => handlePurchase(template)}
                      className="w-full bg-green-500 text-black hover:bg-green-400 font-bold transition-all duration-300"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Purchase Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Template Preview Modal */}
      {selectedTemplate && (
        <TemplatePreview
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          onPurchase={handlePurchase}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Templates;
