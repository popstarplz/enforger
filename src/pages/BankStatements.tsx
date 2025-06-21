
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, Calendar, DollarSign } from 'lucide-react';

const BankStatements = () => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountHolderName: '',
    accountNumber: '',
    routingNumber: '',
    accountType: '',
    statementPeriod: '',
    openingBalance: '',
    closingBalance: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bank statement order:', formData);
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
                  <Building className="w-6 h-6 mr-3 text-green-500" />
                  Bank Statements - $35
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bankName" className="text-green-400">Bank Name</Label>
                      <Input
                        id="bankName"
                        value={formData.bankName}
                        onChange={(e) => handleInputChange('bankName', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="Chase Bank, Wells Fargo, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="accountHolderName" className="text-green-400">Account Holder Name</Label>
                      <Input
                        id="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="accountNumber" className="text-green-400">Account Number</Label>
                      <Input
                        id="accountNumber"
                        value={formData.accountNumber}
                        onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="1234567890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="routingNumber" className="text-green-400">Routing Number</Label>
                      <Input
                        id="routingNumber"
                        value={formData.routingNumber}
                        onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="021000021"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="accountType" className="text-green-400">Account Type</Label>
                      <Select value={formData.accountType} onValueChange={(value) => handleInputChange('accountType', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-green-500/30 text-green-400">
                          <SelectValue placeholder="Select account type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-500/30 text-green-400">
                          <SelectItem value="checking">Checking</SelectItem>
                          <SelectItem value="savings">Savings</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="statementPeriod" className="text-green-400">Statement Period</Label>
                      <Input
                        id="statementPeriod"
                        value={formData.statementPeriod}
                        onChange={(e) => handleInputChange('statementPeriod', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="January 2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="openingBalance" className="text-green-400">Opening Balance</Label>
                      <Input
                        id="openingBalance"
                        value={formData.openingBalance}
                        onChange={(e) => handleInputChange('openingBalance', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$5,000.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="closingBalance" className="text-green-400">Closing Balance</Label>
                      <Input
                        id="closingBalance"
                        value={formData.closingBalance}
                        onChange={(e) => handleInputChange('closingBalance', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$5,500.00"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Address Information</h3>
                    <div>
                      <Label htmlFor="address" className="text-green-400">Street Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
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

                  <Button 
                    type="submit"
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full"
                  >
                    Submit Order - $35
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

export default BankStatements;
