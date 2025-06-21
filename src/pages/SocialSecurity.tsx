
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, User } from 'lucide-react';

const SocialSecurity = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    socialSecurityNumber: '',
    dateOfBirth: '',
    placeOfBirth: '',
    mothersMaidenName: '',
    fathersName: '',
    signatureDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Social Security Card order:', formData);
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
                  <Shield className="w-6 h-6 mr-3 text-green-500" />
                  Social Security Card - $30
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
                      <Label htmlFor="socialSecurityNumber" className="text-green-400">Social Security Number</Label>
                      <Input
                        id="socialSecurityNumber"
                        value={formData.socialSecurityNumber}
                        onChange={(e) => handleInputChange('socialSecurityNumber', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="123-45-6789"
                      />
                    </div>
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
                  </div>

                  <div>
                    <Label htmlFor="placeOfBirth" className="text-green-400">Place of Birth</Label>
                    <Input
                      id="placeOfBirth"
                      value={formData.placeOfBirth}
                      onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                      className="bg-gray-800/50 border-green-500/30 text-green-400"
                      placeholder="New York, NY"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Family Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="mothersMaidenName" className="text-green-400">Mother's Maiden Name</Label>
                        <Input
                          id="mothersMaidenName"
                          value={formData.mothersMaidenName}
                          onChange={(e) => handleInputChange('mothersMaidenName', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="fathersName" className="text-green-400">Father's Full Name</Label>
                        <Input
                          id="fathersName"
                          value={formData.fathersName}
                          onChange={(e) => handleInputChange('fathersName', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="Robert Doe"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="signatureDate" className="text-green-400">Signature Date</Label>
                    <Input
                      id="signatureDate"
                      value={formData.signatureDate}
                      onChange={(e) => handleInputChange('signatureDate', e.target.value)}
                      className="bg-gray-800/50 border-green-500/30 text-green-400"
                      placeholder="01/20/2024"
                    />
                  </div>

                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <p className="text-green-400 text-sm">
                      <Shield className="w-4 h-4 inline mr-2" />
                      Important: This document will be created with authentic security features and formatting.
                    </p>
                  </div>

                  <Button 
                    type="submit"
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full"
                  >
                    Submit Order - $30
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

export default SocialSecurity;
