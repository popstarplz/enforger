
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Upload, DollarSign, ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
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
  priority?: 'high' | 'medium' | 'low';
  tooltip?: string;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
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
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Initialize form with smart defaults
  useState(() => {
    const defaults: Record<string, any> = {};
    fields.forEach(field => {
      if (field.defaultValue) {
        defaults[field.name] = field.defaultValue;
      }
      // Smart defaults based on field type
      if (field.type === 'date' && field.name.includes('expiration')) {
        const futureDate = new Date();
        futureDate.setFullYear(futureDate.getFullYear() + 5);
        defaults[field.name] = futureDate.toISOString().split('T')[0];
      }
      if (field.type === 'date' && field.name.includes('issue')) {
        const today = new Date();
        defaults[field.name] = today.toISOString().split('T')[0];
      }
    });
    setFormData(defaults);
  }, [fields]);

  // Separate fields by priority
  const highPriorityFields = fields.filter(field => !field.priority || field.priority === 'high');
  const lowPriorityFields = fields.filter(field => field.priority === 'low' || field.priority === 'medium');

  const validateField = (field: FormField, value: string) => {
    if (field.required && !value.trim()) {
      return `${field.label} is required`;
    }
    
    if (field.validation) {
      const { min, max, pattern, message } = field.validation;
      
      if (field.type === 'number') {
        const numValue = parseFloat(value);
        if (min !== undefined && numValue < min) {
          return message || `${field.label} must be at least ${min}`;
        }
        if (max !== undefined && numValue > max) {
          return message || `${field.label} must be no more than ${max}`;
        }
      }
      
      if (pattern && !new RegExp(pattern).test(value)) {
        return message || `${field.label} format is invalid`;
      }
    }
    
    return '';
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    const fieldConfig = fields.find(f => f.name === field);
    if (fieldConfig && touched[field]) {
      const error = validateField(fieldConfig, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    
    const fieldConfig = fields.find(f => f.name === field);
    const value = formData[field] || '';
    if (fieldConfig) {
      const error = validateField(fieldConfig, value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: Record<string, string> = {};
    let hasErrors = false;
    
    fields.forEach(field => {
      const value = formData[field.name] || '';
      const error = validateField(field, value);
      if (error) {
        newErrors[field.name] = error;
        hasErrors = true;
      }
    });
    
    if (requiresPhoto && !photo) {
      newErrors.photo = 'Photo is required';
      hasErrors = true;
    }
    
    setErrors(newErrors);
    setTouched(Object.fromEntries(fields.map(f => [f.name, true])));
    
    if (hasErrors) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Order Submitted",
      description: `Your ${title.toLowerCase()} order has been submitted for processing.`,
    });
    navigate('/order');
  };

  const renderField = (field: FormField, showError = true) => {
    const error = errors[field.name];
    const hasError = showError && error && touched[field.name];
    
    const commonProps = {
      id: field.name,
      className: `bg-gray-900/50 text-green-400 transition-colors ${
        hasError 
          ? 'border-red-500/50 focus:border-red-500' 
          : 'border-green-500/30 focus:border-green-500'
      }`,
      required: field.required,
      placeholder: field.placeholder,
      onBlur: () => handleBlur(field.name)
    };

    switch (field.type) {
      case 'select':
        return (
          <Select onValueChange={(value) => handleInputChange(field.name, value)}>
            <SelectTrigger className={commonProps.className}>
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
    <TooltipProvider>
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
                  {/* Essential Fields */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400 border-b border-green-500/30 pb-2">
                      Essential Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {highPriorityFields.map((field) => (
                        <div key={field.name} className={field.type === 'text' && field.name.includes('address') ? 'md:col-span-2' : ''}>
                          <div className="flex items-center space-x-2 mb-2">
                            <Label htmlFor={field.name} className="text-green-400">
                              {field.label}
                              {field.required && <span className="text-red-400 ml-1">*</span>}
                            </Label>
                            {field.tooltip && (
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-green-400/60" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="max-w-xs">{field.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </div>
                        {renderField(field)}
                          {errors[field.name] && touched[field.name] && (
                            <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
                          )}
                      </div>
                    ))}
                    </div>
                  </div>

                  {/* Advanced/Optional Fields */}
                  {lowPriorityFields.length > 0 && (
                    <Collapsible open={showAdvanced} onOpenChange={setShowAdvanced}>
                      <CollapsibleTrigger asChild>
                        <Button
                          type="button"
                          variant="ghost"
                          className="w-full justify-between text-green-400 hover:bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                        >
                          <span>Additional Options (Optional)</span>
                          {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-900/30 rounded-lg border border-green-500/20">
                          {lowPriorityFields.map((field) => (
                            <div key={field.name} className={field.type === 'text' && field.name.includes('address') ? 'md:col-span-2' : ''}>
                              <div className="flex items-center space-x-2 mb-2">
                                <Label htmlFor={field.name} className="text-green-400/80">
                                  {field.label}
                                  {field.required && <span className="text-red-400 ml-1">*</span>}
                                </Label>
                                {field.tooltip && (
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <Info className="w-4 h-4 text-green-400/60" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{field.tooltip}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                )}
                              </div>
                              {renderField(field)}
                              {errors[field.name] && touched[field.name] && (
                                <p className="text-red-400 text-sm mt-1">{errors[field.name]}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  {requiresPhoto && (
                    <div className="space-y-2">
                      <Label htmlFor="photo" className="text-green-400">
                        Photo Upload <span className="text-red-400">*</span>
                      </Label>
                      <div className="mt-2 flex items-center space-x-4">
                        <Input
                          id="photo"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className={`bg-gray-900/50 text-green-400 ${
                            errors.photo ? 'border-red-500/50' : 'border-green-500/30'
                          }`}
                          required
                        />
                        <Upload className="w-5 h-5 text-green-400" />
                      </div>
                      {errors.photo && (
                        <p className="text-red-400 text-sm">{errors.photo}</p>
                      )}
                      <p className="text-green-400/60 text-xs">
                        Accepted formats: JPG, PNG, GIF. Max size: 5MB
                      </p>
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
    </TooltipProvider>
  );
};

export default DocumentOrderPage;
