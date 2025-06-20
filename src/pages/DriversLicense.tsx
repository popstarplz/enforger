
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Shield, MapPin } from 'lucide-react';

const DriversLicense = () => {
  const [selectedState, setSelectedState] = useState('');

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const handleContinue = () => {
    if (selectedState) {
      // Navigate to order form with selected state
      console.log('Selected state:', selectedState);
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-green-500 mb-6 glow-text">
              State <span className="text-green-400">Selection</span>
            </h1>
            <p className="text-xl text-green-400/80 max-w-3xl mx-auto leading-relaxed">
              Choose your target state for document generation protocol
            </p>
          </div>
        </section>

        {/* State Selection */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 hover:border-green-500/60 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Shield className="w-8 h-8 text-green-500 mr-3" />
                    <h2 className="text-2xl font-bold text-green-400">
                      US State Drivers License
                    </h2>
                  </div>
                  
                  <p className="text-green-400/70 mb-8 leading-relaxed">
                    Select the state for your drivers license document. Each state template includes authentic design elements and security features.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="state-select" className="block text-green-400 font-medium mb-3">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Select State
                      </label>
                      <Select value={selectedState} onValueChange={setSelectedState}>
                        <SelectTrigger className="w-full bg-gray-800/50 border-green-500/30 text-green-400 hover:border-green-500/60 focus:border-green-500">
                          <SelectValue placeholder="Choose a state..." />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-green-500/30 text-green-400 max-h-60">
                          {usStates.map((state) => (
                            <SelectItem 
                              key={state} 
                              value={state}
                              className="hover:bg-green-500/10 focus:bg-green-500/10"
                            >
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedState && (
                      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 text-sm">
                          <Shield className="w-4 h-4 inline mr-2" />
                          Selected: {selectedState} Drivers License Template
                        </p>
                      </div>
                    )}

                    <Button 
                      onClick={handleContinue}
                      disabled={!selectedState}
                      className="bg-green-500 text-black hover:bg-green-400 font-bold w-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue to Order Form
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DriversLicense;
