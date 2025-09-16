
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

const DriversLicense = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    licenseNumber: '',
    expirationDate: '',
    photo: null as File | null
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted",
      description: "Your driver's license order has been submitted for processing.",
    });
    navigate('/order');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/services" className="text-green-400 hover:text-green-300 mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-green-500">US State Driver's License</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <FileText className="w-5 h-5 mr-2" />
                  License Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-green-400">Full Name</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-gray-900/50 border-green-500/30 text-green-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-green-400">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="bg-gray-900/50 border-green-500/30 text-green-400"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-green-400">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="bg-gray-900/50 border-green-500/30 text-green-400"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city" className="text-green-400">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="bg-gray-900/50 border-green-500/30 text-green-400"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state" className="text-green-400">State</Label>
                      <Select onValueChange={(value) => handleInputChange('state', value)}>
                        <SelectTrigger className="bg-gray-900/50 border-green-500/30 text-green-400">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CA">California</SelectItem>
                          <SelectItem value="NY">New York</SelectItem>
                          <SelectItem value="TX">Texas</SelectItem>
                          <SelectItem value="FL">Florida</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="zipCode" className="text-green-400">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="bg-gray-900/50 border-green-500/30 text-green-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="licenseNumber" className="text-green-400">License Number (Optional)</Label>
                      <Input
                        id="licenseNumber"
                        value={formData.licenseNumber}
                        onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                        className="bg-gray-900/50 border-green-500/30 text-green-400"
                        placeholder="Leave blank for random"
                      />
                    </div>
                    <div>
                      <Label htmlFor="expirationDate" className="text-green-400">Expiration Date</Label>
                      <Input
                        id="expirationDate"
                        type="date"
                        value={formData.expirationDate}
                        onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                        className="bg-gray-900/50 border-green-500/30 text-green-400"
                        required
                      />
                    </div>
                  </div>

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

                  <Button
                    type="submit"
                    className="w-full bg-green-500 text-black hover:bg-green-400 font-bold py-3"
                  >
                    Submit Order - $18.00
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
                    <span className="text-green-400">Driver's License</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400/70">Processing Time:</span>
                    <span className="text-green-400">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-400/70">Delivery:</span>
  const fields = [
    { 
      name: 'fullName', 
      label: 'Full Name', 
      type: 'text' as const, 
      required: true,
      priority: 'high' as const,
      tooltip: 'Enter your full legal name as it should appear on the license'
    },
    { 
      name: 'dateOfBirth', 
      label: 'Date of Birth', 
      type: 'date' as const, 
      required: true,
      priority: 'high' as const
    },
    { 
      name: 'address', 
      label: 'Street Address', 
      type: 'text' as const, 
      required: true,
      priority: 'high' as const,
      placeholder: '123 Main Street'
    },
    { 
      name: 'city', 
      label: 'City', 
      type: 'text' as const, 
      required: true,
      priority: 'high' as const
    },
    { 
      name: 'state', 
      label: 'State', 
      type: 'select' as const, 
      required: true,
      priority: 'high' as const,
      options: ['CA', 'NY', 'TX', 'FL', 'IL', 'PA', 'OH', 'GA', 'NC', 'MI'],
      defaultValue: 'CA'
    },
    { 
      name: 'zipCode', 
      label: 'ZIP Code', 
      type: 'text' as const, 
      required: true,
      priority: 'high' as const,
      validation: {
        pattern: '^\\d{5}(-\\d{4})?$',
        message: 'Please enter a valid ZIP code (12345 or 12345-6789)'
      }
    },
    { 
      name: 'licenseNumber', 
      label: 'License Number', 
      type: 'text' as const, 
      required: false,
      priority: 'low' as const,
      placeholder: 'Leave blank for auto-generated number',
      tooltip: 'If left blank, we\'ll generate a realistic license number for you'
    },
    { 
      name: 'expirationDate', 
      label: 'Expiration Date', 
      type: 'date' as const, 
      required: true,
      priority: 'medium' as const,
      tooltip: 'Most licenses are valid for 5-8 years from issue date'
    }
  ];

  return (
    <DocumentOrderPage
      title="US State Driver's License"
      price="$18.00"
      description="Professional USA driver's license documents with authentic design elements"
      fields={fields}
      requiresPhoto={true}
    />
  );
};

export default DriversLicense;
