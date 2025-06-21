
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookOpen, Calendar } from 'lucide-react';

const Passport = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    gender: '',
    height: '',
    eyeColor: '',
    passportNumber: '',
    issuanceDate: '',
    expirationDate: '',
    nationality: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    emergencyContactName: '',
    emergencyContactPhone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Passport order:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-black text-green-400">
      <Header />
      
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-green-400">
                  <BookOpen className="w-6 h-6 mr-3 text-green-500" />
                  USA Passport (2021) - $65
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-green-400">First Name</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <Label htmlFor="middleName" className="text-green-400">Middle Name</Label>
                        <Input
                          id="middleName"
                          value={formData.middleName}
                          onChange={(e) => handleInputChange('middleName', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="Michael"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-green-400">Last Name</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth" className="text-green-400">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="01/15/1990"
                      />
                    </div>
                    <div>
                      <Label htmlFor="placeOfBirth" className="text-green-400">Place of Birth</Label>
                      <Input
                        id="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="New York, NY, USA"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="gender" className="text-green-400">Gender</Label>
                      <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-green-500/30 text-green-400">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-500/30 text-green-400">
                          <SelectItem value="M">Male</SelectItem>
                          <SelectItem value="F">Female</SelectItem>
                          <SelectItem value="X">Unspecified</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-green-400">Height</Label>
                      <Input
                        id="height"
                        value={formData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="6'0"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eyeColor" className="text-green-400">Eye Color</Label>
                      <Select value={formData.eyeColor} onValueChange={(value) => handleInputChange('eyeColor', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-green-500/30 text-green-400">
                          <SelectValue placeholder="Select eye color" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-500/30 text-green-400">
                          <SelectItem value="BRO">Brown</SelectItem>
                          <SelectItem value="BLU">Blue</SelectItem>
                          <SelectItem value="GRN">Green</SelectItem>
                          <SelectItem value="HAZ">Hazel</SelectItem>
                          <SelectItem value="GRY">Gray</SelectItem>
                          <SelectItem value="BLK">Black</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Passport Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="passportNumber" className="text-green-400">Passport Number</Label>
                        <Input
                          id="passportNumber"
                          value={formData.passportNumber}
                          onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="123456789"
                        />
                      </div>
                      <div>
                        <Label htmlFor="nationality" className="text-green-400">Nationality</Label>
                        <Input
                          id="nationality"
                          value={formData.nationality}
                          onChange={(e) => handleInputChange('nationality', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="United States of America"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="issuanceDate" className="text-green-400">Issuance Date</Label>
                        <Input
                          id="issuanceDate"
                          value={formData.issuanceDate}
                          onChange={(e) => handleInputChange('issuanceDate', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="03/15/2021"
                        />
                      </div>
                      <div>
                        <Label htmlFor="expirationDate" className="text-green-400">Expiration Date</Label>
                        <Input
                          id="expirationDate"
                          value={formData.expirationDate}
                          onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="03/14/2031"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Address Information</h3>
                    <div>
                      <Label htmlFor="streetAddress" className="text-green-400">Street Address</Label>
                      <Input
                        id="streetAddress"
                        value={formData.streetAddress}
                        onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="123 Main St"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city" className="text-green-400">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="New York"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state" className="text-green-400">State</Label>
                        <Input
                          id="state"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="NY"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode" className="text-green-400">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="10001"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Emergency Contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="emergencyContactName" className="text-green-400">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContactName"
                          value={formData.emergencyContactName}
                          onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyContactPhone" className="text-green-400">Emergency Contact Phone</Label>
                        <Input
                          id="emergencyContactPhone"
                          value={formData.emergencyContactPhone}
                          onChange={(e) => handleInputChange('emergencyContactPhone', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="(555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full"
                  >
                    Submit Order - $65
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Passport;
