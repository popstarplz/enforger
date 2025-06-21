
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard, Calendar } from 'lucide-react';

const CreditCards = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardType: '',
    creditLimit: '',
    availableCredit: '',
    currentBalance: '',
    minimumPayment: '',
    statementDate: '',
    dueDate: '',
    billingAddress: '',
    city: '',
    state: '',
    zipCode: '',
    annualFee: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Credit card order:', formData);
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
                  <CreditCard className="w-6 h-6 mr-3 text-green-500" />
                  Credit Cards - $40
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cardholderName" className="text-green-400">Cardholder Name</Label>
                      <Input
                        id="cardholderName"
                        value={formData.cardholderName}
                        onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cardType" className="text-green-400">Card Type</Label>
                      <Select value={formData.cardType} onValueChange={(value) => handleInputChange('cardType', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-green-500/30 text-green-400">
                          <SelectValue placeholder="Select card type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-500/30 text-green-400">
                          <SelectItem value="visa">Visa</SelectItem>
                          <SelectItem value="mastercard">Mastercard</SelectItem>
                          <SelectItem value="amex">American Express</SelectItem>
                          <SelectItem value="discover">Discover</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="cardNumber" className="text-green-400">Card Number</Label>
                      <Input
                        id="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-green-400">CVV</Label>
                      <Input
                        id="cvv"
                        value={formData.cvv}
                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="expirationDate" className="text-green-400">Expiration Date</Label>
                    <Input
                      id="expirationDate"
                      value={formData.expirationDate}
                      onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                      className="bg-gray-800/50 border-green-500/30 text-green-400"
                      placeholder="12/28"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="creditLimit" className="text-green-400">Credit Limit</Label>
                      <Input
                        id="creditLimit"
                        value={formData.creditLimit}
                        onChange={(e) => handleInputChange('creditLimit', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$5,000.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentBalance" className="text-green-400">Current Balance</Label>
                      <Input
                        id="currentBalance"
                        value={formData.currentBalance}
                        onChange={(e) => handleInputChange('currentBalance', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$1,250.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="availableCredit" className="text-green-400">Available Credit</Label>
                      <Input
                        id="availableCredit"
                        value={formData.availableCredit}
                        onChange={(e) => handleInputChange('availableCredit', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$3,750.00"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="minimumPayment" className="text-green-400">Minimum Payment</Label>
                      <Input
                        id="minimumPayment"
                        value={formData.minimumPayment}
                        onChange={(e) => handleInputChange('minimumPayment', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$35.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="statementDate" className="text-green-400">Statement Date</Label>
                      <Input
                        id="statementDate"
                        value={formData.statementDate}
                        onChange={(e) => handleInputChange('statementDate', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="01/15/2024"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dueDate" className="text-green-400">Due Date</Label>
                      <Input
                        id="dueDate"
                        value={formData.dueDate}
                        onChange={(e) => handleInputChange('dueDate', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="02/10/2024"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Billing Address</h3>
                    <div>
                      <Label htmlFor="billingAddress" className="text-green-400">Street Address</Label>
                      <Input
                        id="billingAddress"
                        value={formData.billingAddress}
                        onChange={(e) => handleInputChange('billingAddress', e.target.value)}
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

                  <div>
                    <Label htmlFor="annualFee" className="text-green-400">Annual Fee</Label>
                    <Input
                      id="annualFee"
                      value={formData.annualFee}
                      onChange={(e) => handleInputChange('annualFee', e.target.value)}
                      className="bg-gray-800/50 border-green-500/30 text-green-400"
                      placeholder="$95.00"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full"
                  >
                    Submit Order - $40
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

export default CreditCards;
