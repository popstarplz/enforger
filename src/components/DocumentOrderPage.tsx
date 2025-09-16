
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Upload, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'number' | 'date' | 'select';
  required?: boolean;
  placeholder?: string;
  defaultValue?: string;
  options?: string[];
}

interface DocumentOrderPageProps {
  title: string;
  price: string;
  description: string;
  fields: FormField[];
  requiresPhoto?: boolean;
}

const DocumentOrderPage = ({ title, price, description, fields, requiresPhoto = false }: DocumentOrderPageProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [photo, setPhoto] = useState<File | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted",
      description: `Your ${title.toLowerCase()} order has been submitted for processing.`,
    });
    navigate('/order');
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      id: field.name,
      className: "bg-gray-900/50 border-green-500/30 text-green-400",
      required: field.required,
      placeholder: field.placeholder
    };

    switch (field.type) {
      case 'select':
        return (
          <Select onValueChange={(value) => handleInputChange(field.name, value)}>
            <SelectTrigger {...commonProps}>
              <SelectValue placeholder={field.placeholder || `Select ${field.label}`} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      default:
        return (
          <Input
            {...commonProps}
            type={field.type}
            value={formData[field.name] || field.defaultValue || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/services" className="text-green-400 hover:text-green-300 mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-green-500">{title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <FileText className="w-5 h-5 mr-2" />
                  Document Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {fields.map((field) => (
                      <div key={field.name} className={field.type === 'text' && field.name.includes('address') ? 'md:col-span-2' : ''}>
                        <Label htmlFor={field.name} className="text-green-400">{field.label}</Label>
                        {renderField(field)}
                      </div>
                    ))}
                  </div>

                  {requiresPhoto && (
                    <div>
                      <Label htmlFor="photo" className="text-green-400">Photo Upload</Label>
                      <div className="mt-2 flex items-center space-x-4">
                        <Input
                          id="photo"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="bg-gray-900/50 border-green-500/30 text-green-400"
                          required
                        />
                        <Upload className="w-5 h-5 text-green-400" />
                      </div>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-green-500 text-black hover:bg-green-400 font-bold py-3"
                  >
                    Submit Order - {price}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-green-400/70">Document Type:</span>
                    <span className="text-green-400">{title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400/70">Processing Time:</span>
                    <span className="text-green-400">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400/70">Delivery:</span>
                    <span className="text-green-400">Digital Download</span>
                  </div>
                  <div className="border-t border-green-500/30 pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-green-400">Total:</span>
                      <span className="text-green-500">{price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DocumentOrderPage;
