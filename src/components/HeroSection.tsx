
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Shield, Zap, Lock } from 'lucide-react';

const HeroSection = () => {
  const [documentType, setDocumentType] = useState('');
  const [serviceType, setServiceType] = useState('');

  const documentTypes = [
    { value: 'student-id', label: 'Student ID' },
    { value: 'employee-badge', label: 'Employee Badge' },
    { value: 'membership-card', label: 'Membership Card' },
    { value: 'event-badge', label: 'Event Badge' },
    { value: 'certificate', label: 'Certificate' },
    { value: 'business-card', label: 'Business Card' }
  ];

  const serviceTypes = [
    { value: 'custom', label: 'Custom Creation' },
    { value: 'template', label: 'Template Download' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        {/* Main Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-green-500 mb-6 glow-text">
            ENFORGER
          </h1>
          <p className="text-xl md:text-2xl text-green-400/80 mb-8 max-w-2xl mx-auto">
            Professional document generation with unmatched security
          </p>
        </div>

        {/* Configuration Panel */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-lg p-8 mb-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-green-400 mb-6 text-center">Configure Your Order</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="text-green-400/80 text-sm block mb-3">Document Type</label>
              <Select value={documentType} onValueChange={setDocumentType}>
                <SelectTrigger className="bg-black/50 border-green-500/50 text-green-400 hover:border-green-400 transition-colors">
                  <SelectValue placeholder="Select document type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-green-500/50">
                  {documentTypes.map((type) => (
                    <SelectItem 
                      key={type.value} 
                      value={type.value}
                      className="text-green-400 hover:bg-green-500/20 focus:bg-green-500/20"
                    >
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-green-400/80 text-sm block mb-3">Service Mode</label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="bg-black/50 border-green-500/50 text-green-400 hover:border-green-400 transition-colors">
                  <SelectValue placeholder="Select service mode" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-green-500/50">
                  {serviceTypes.map((service) => (
                    <SelectItem 
                      key={service.value} 
                      value={service.value}
                      className="text-green-400 hover:bg-green-500/20 focus:bg-green-500/20"
                    >
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center">
            <Button 
              asChild
              className="bg-green-500 text-black hover:bg-green-400 font-bold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              disabled={!documentType || !serviceType}
            >
              <Link to="/services">Generate Document</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
            <Shield className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Secure</h3>
            <p className="text-green-400/70 text-sm">Military-grade encryption</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
            <Zap className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Fast</h3>
            <p className="text-green-400/70 text-sm">Delivered within hours</p>
          </div>
          
          <div className="text-center p-6 bg-gray-900/30 backdrop-blur-sm border border-green-500/20 rounded-lg hover:border-green-500/50 transition-all duration-300">
            <Lock className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-green-400 mb-2">Private</h3>
            <p className="text-green-400/70 text-sm">Zero data retention</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
