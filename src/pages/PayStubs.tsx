
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Receipt, Calendar } from 'lucide-react';

const PayStubs = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    employerName: '',
    employerAddress: '',
    payPeriod: '',
    payDate: '',
    grossPay: '',
    netPay: '',
    hourlyRate: '',
    hoursWorked: '',
    federalTax: '',
    stateTax: '',
    socialSecurityTax: '',
    medicareTax: '',
    employeeId: '',
    department: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Pay stub order:', formData);
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
                  <Receipt className="w-6 h-6 mr-3 text-green-500" />
                  Pay Stubs - $25
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeName" className="text-green-400">Employee Name</Label>
                      <Input
                        id="employeeName"
                        value={formData.employeeName}
                        onChange={(e) => handleInputChange('employeeName', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="employerName" className="text-green-400">Employer Name</Label>
                      <Input
                        id="employerName"
                        value={formData.employerName}
                        onChange={(e) => handleInputChange('employerName', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="ABC Corporation"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="employerAddress" className="text-green-400">Employer Address</Label>
                    <Input
                      id="employerAddress"
                      value={formData.employerAddress}
                      onChange={(e) => handleInputChange('employerAddress', e.target.value)}
                      className="bg-gray-800/50 border-green-500/30 text-green-400"
                      placeholder="123 Business Ave, City, State 12345"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="payPeriod" className="text-green-400">Pay Period</Label>
                      <Input
                        id="payPeriod"
                        value={formData.payPeriod}
                        onChange={(e) => handleInputChange('payPeriod', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="01/01/2024 - 01/15/2024"
                      />
                    </div>
                    <div>
                      <Label htmlFor="payDate" className="text-green-400">Pay Date</Label>
                      <Input
                        id="payDate"
                        value={formData.payDate}
                        onChange={(e) => handleInputChange('payDate', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="01/20/2024"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="hourlyRate" className="text-green-400">Hourly Rate</Label>
                      <Input
                        id="hourlyRate"
                        value={formData.hourlyRate}
                        onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$25.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hoursWorked" className="text-green-400">Hours Worked</Label>
                      <Input
                        id="hoursWorked"
                        value={formData.hoursWorked}
                        onChange={(e) => handleInputChange('hoursWorked', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="80"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="grossPay" className="text-green-400">Gross Pay</Label>
                      <Input
                        id="grossPay"
                        value={formData.grossPay}
                        onChange={(e) => handleInputChange('grossPay', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$2,000.00"
                      />
                    </div>
                    <div>
                      <Label htmlFor="netPay" className="text-green-400">Net Pay</Label>
                      <Input
                        id="netPay"
                        value={formData.netPay}
                        onChange={(e) => handleInputChange('netPay', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="$1,600.00"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-green-400">Tax Deductions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="federalTax" className="text-green-400">Federal Tax</Label>
                        <Input
                          id="federalTax"
                          value={formData.federalTax}
                          onChange={(e) => handleInputChange('federalTax', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="$200.00"
                        />
                      </div>
                      <div>
                        <Label htmlFor="stateTax" className="text-green-400">State Tax</Label>
                        <Input
                          id="stateTax"
                          value={formData.stateTax}
                          onChange={(e) => handleInputChange('stateTax', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="$100.00"
                        />
                      </div>
                      <div>
                        <Label htmlFor="socialSecurityTax" className="text-green-400">Social Security Tax</Label>
                        <Input
                          id="socialSecurityTax"
                          value={formData.socialSecurityTax}
                          onChange={(e) => handleInputChange('socialSecurityTax', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="$80.00"
                        />
                      </div>
                      <div>
                        <Label htmlFor="medicareTax" className="text-green-400">Medicare Tax</Label>
                        <Input
                          id="medicareTax"
                          value={formData.medicareTax}
                          onChange={(e) => handleInputChange('medicareTax', e.target.value)}
                          className="bg-gray-800/50 border-green-500/30 text-green-400"
                          placeholder="$20.00"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employeeId" className="text-green-400">Employee ID</Label>
                      <Input
                        id="employeeId"
                        value={formData.employeeId}
                        onChange={(e) => handleInputChange('employeeId', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="EMP001"
                      />
                    </div>
                    <div>
                      <Label htmlFor="department" className="text-green-400">Department</Label>
                      <Input
                        id="department"
                        value={formData.department}
                        onChange={(e) => handleInputChange('department', e.target.value)}
                        className="bg-gray-800/50 border-green-500/30 text-green-400"
                        placeholder="Sales"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="bg-green-500 text-black hover:bg-green-400 font-bold w-full"
                  >
                    Submit Order - $25
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

export default PayStubs;
