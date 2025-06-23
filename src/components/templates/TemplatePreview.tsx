
import { X, Download, Star, ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface TemplatePreviewProps {
  template: {
    id: string;
    name: string;
    price: number;
    rating: number;
    reviews: number;
    description: string;
    features: string[];
    previewImage: string;
    tags: string[];
  };
  onClose: () => void;
  onPurchase: (template: any) => void;
}

const TemplatePreview = ({ template, onClose, onPurchase }: TemplatePreviewProps) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="bg-gray-900/95 border-green-500/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">{template.name}</h2>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-green-400 fill-current" />
                  <span className="text-green-400 ml-1 font-semibold">{template.rating}</span>
                  <span className="text-green-400/60 ml-1">({template.reviews} reviews)</span>
                </div>
                <span className="text-3xl font-bold text-green-500">${template.price}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-green-400 hover:text-green-300 hover:bg-green-500/10"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image and Description */}
            <div>
              <div className="aspect-video bg-gray-800/50 rounded-lg mb-6 overflow-hidden">
                <img 
                  src={template.previewImage} 
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Description</h3>
                <p className="text-green-400/80 leading-relaxed">{template.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <Badge key={tag} className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Features and Purchase */}
            <div>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-green-400 mb-4">What's Included</h3>
                <div className="space-y-3">
                  {template.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-green-400/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={() => onPurchase(template)}
                  size="lg"
                  className="w-full bg-green-500 text-black hover:bg-green-400 font-bold text-lg py-6 transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Purchase for ${template.price}
                </Button>
                
                <div className="text-center">
                  <p className="text-green-400/60 text-sm">
                    Instant download after purchase • Lifetime access
                  </p>
                </div>
              </div>

              {/* Purchase Benefits */}
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="text-green-400 font-semibold mb-2">Purchase Benefits</h4>
                <ul className="text-green-400/80 text-sm space-y-1">
                  <li>• Instant download access</li>
                  <li>• High-resolution PSD files</li>
                  <li>• Lifetime updates included</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplatePreview;
