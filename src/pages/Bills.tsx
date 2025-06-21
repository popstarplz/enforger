
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FileText, Zap } from 'lucide-react';

const Bills = () => {
  const [formData, setFormData] = useState({
    billType: '',
    utilityCompany: '',
    customerName: '',
    serviceAddress: '',
    accountNumber: '',
    billDate: '',
    dueDate: '',
    totalAmount: '',
    previousBalance: '',
    currentCharges: '',
    usageAmount: '',
    usageUnit: '',
    billingPeriod: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bill order:', formData);
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
                  <Zap className="w-6 h-6 mr-3 text-green-500" />
                  Utility Bills - $20
                </CardTitle>
                <p className="text-green-400/70">Electricity, Gas, Water, Internet Bills</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="billType" className="text-green-400">Bill Type</Label>
                    <Select value={formData.billType} onValueChange={(value) => handleInputChange('billType', value)}>
                      <SelectTrigger className="bg-gray-800/50 border-green-500/30 text-green-400">
                        <SelectValue placeholder="Select bill type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-green-500/30 text-green-400">
                        <SelectItem value="electricity">Electricity</SelectItem>
                        <SelectItem value="gas">Gas</SelectItem>
                        <SelectItem value="water">Water</SelectItem>
                        <SelectItem value="internet">Internet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="utilityCompany" className="text-green-400">Utility Company</Label>
                      <Input
                        id="utilityCompany"
                        value={formData.utilityCompany}
                        onChange={(e) => handleInputChange('utilityCompany', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="ConEd, Verizon, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="customerName" className="text-green-400">Customer Name</Label>
                      <Input
                        id="customerName"
                        value={formData.customerName}
                        onChange={(e) => handleInputChange('customerName', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceAddress" className="text-green-400">Service Address</Label>
                    <Input
                      id="serviceAddress"
                      value={formData.serviceAddress}
                      onChange={(e) => handleInputChange('serviceAddress', e.target.value)}
                      className="bg-gray-800/50 border-green-500/30 text-green-400"
                      placeholder="123 Main St, City, State 12345"
                    />
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
                      <Label htmlFor="billingPeriod" className="text-green-400">Billing Period</Label>
                      <Input
                        id="billingPeriod"
                        value={formData.billingPeriod}
                        onChange={(e) => handleInputChange('billingPeriod', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="Jan 1 - Jan 31, 2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="billDate" className="text-green-400">Bill Date</Label>
                      <Input
                        id="billDate"
                        value={formData.billDate}
                        onChange={(e) => handleInputChange('billDate', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="02/01/2024"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dueDate" className="text-green-400">Due Date</Label>
                      <Input
                        id="dueDate"
                        value={formData.dueDate}
                        onChange={(e) => handleInputChange('dueDate', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="02/20/2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="previousBalance" className="text-green-400">Previous Balance</Label>
                      <Input
                        id="previousBalance"
                        value={formData.previousBalance}
                        onChange={(e) => handleInputChange('previousBalance', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$85.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="currentCharges" className="text-green-400">Current Charges</Label>
                      <Input
                        id="currentCharges"
                        value={formData.currentCharges}
                        onChange={(e) => handleInputChange('currentCharges', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$120.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="totalAmount" className="text-green-400">Total Amount Due</Label>
                      <Input
                        id="totalAmount"
                        value={formData.totalAmount}
                        onChange={(e) => handleInputChange('totalAmount', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$205.00"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="usageAmount" className="text-green-400">Usage Amount</Label>
                      <Input
                        id="usageAmount"
                        value={formData.usageAmount}
                        onChange={(e) => handleInputChange('usageAmount', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="850"
                      />
                    </div>
                    <div>
                      <Label htmlFor="usageUnit" className="text-green-400">Usage Unit</Label>
                      <Select value={formData.usageUnit} onValueChange={(value) => handleInputChange('usageUnit', value)}>
                        <SelectTrigger className="bg-gray-800/50 border-green-500/30 text-green-400">
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-500/30 text-green-400">
                          <SelectItem value="kWh">kWh (Electricity)</SelectItem>
                          <SelectItem value="therms">Therms (Gas)</SelectItem>
                          <SelectItem value="gallons">Gallons (Water)</SelectItem>
                          <SelectItem value="GB">GB (Internet)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full"
                  >
                    Submit Order - $20
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

export default Bills;
