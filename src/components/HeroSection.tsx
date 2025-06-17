
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { useState } from 'react';

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
    { value: 'template', label: 'DIY Template' }
  ];

  return (
    <section className="min-h-screen bg-black text-primary font-mono flex items-center justify-center px-4">
      <div className="max-w-4xl w-full">
        {/* Terminal Header */}
        <div className="border border-primary bg-black mb-8">
          <div className="bg-primary text-black px-4 py-2 flex items-center">
            <div className="flex space-x-2 mr-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="font-bold">enforger@terminal:~$</span>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <div className="text-primary mb-2">$ ./initialize_enforger.sh</div>
              <div className="text-primary/80 mb-4">
                [INFO] Loading Enforger Identity Document System...
                <br />
                [SUCCESS] Professional document creation platform initialized
                <br />
                [STATUS] Ready for user input
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 typewriter">
              &gt; ENFORGER_
            </h1>
            
            <div className="text-primary/90 text-lg mb-8 leading-relaxed">
              <div className="mb-2"># Professional Identity Documents - Made Simple</div>
              <div className="mb-2"># Choose: Custom creation OR DIY templates</div>
              <div># Secure • Professional • Fast execution</div>
            </div>

            {/* Command Interface */}
            <div className="bg-gray-900 border border-primary/30 p-6 mb-6">
              <div className="text-primary mb-4">$ configure_order --interactive</div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-primary/80 text-sm block mb-2">--document-type:</label>
                  <Select value={documentType} onValueChange={setDocumentType}>
                    <SelectTrigger className="bg-black border-primary text-primary font-mono">
                      <SelectValue placeholder="SELECT DOCUMENT TYPE" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-primary">
                      {documentTypes.map((type) => (
                        <SelectItem 
                          key={type.value} 
                          value={type.value}
                          className="text-primary hover:bg-primary hover:text-black font-mono"
                        >
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-primary/80 text-sm block mb-2">--service-mode:</label>
                  <Select value={serviceType} onValueChange={setServiceType}>
                    <SelectTrigger className="bg-black border-primary text-primary font-mono">
                      <SelectValue placeholder="SELECT SERVICE MODE" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-primary">
                      {serviceTypes.map((service) => (
                        <SelectItem 
                          key={service.value} 
                          value={service.value}
                          className="text-primary hover:bg-primary hover:text-black font-mono"
                        >
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-primary text-black hover:bg-primary/90 font-mono font-bold border-2 border-primary"
                  disabled={!documentType || !serviceType}
                >
                  <Link to="/services">$ ./execute_order.sh</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-black font-mono font-bold"
                >
                  <Link to="/services">$ ./view_options.sh</Link>
                </Button>
              </div>
            </div>

            {/* Status Output */}
            <div className="text-primary/60 text-sm">
              <div>$ status: {documentType || 'AWAITING_INPUT'} | {serviceType || 'AWAITING_INPUT'}</div>
              <div>$ uptime: 99.9% | secure: TRUE | ready: {documentType && serviceType ? 'TRUE' : 'FALSE'}</div>
            </div>
          </div>
        </div>

        {/* Quick Stats Terminal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'DOCUMENTS_CREATED', value: '10,000+' },
            { label: 'SATISFACTION_RATE', value: '99.9%' },
            { label: 'PROCESSING_TIME', value: '<24h' }
          ].map((stat, index) => (
            <div key={index} className="border border-primary/30 bg-black p-4">
              <div className="text-primary/80 text-sm">$ echo ${stat.label}</div>
              <div className="text-primary text-2xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .typewriter {
          border-right: 2px solid #00FF00;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { border-color: #00FF00; }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
