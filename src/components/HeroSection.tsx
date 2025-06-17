
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HeroSection = () => {
  const [documentType, setDocumentType] = useState('');
  const [serviceType, setServiceType] = useState('');

  const documentTypes = [
    { value: 'student-id', label: 'student_id.doc' },
    { value: 'employee-badge', label: 'employee_badge.doc' },
    { value: 'membership-card', label: 'membership_card.doc' },
    { value: 'event-badge', label: 'event_badge.doc' },
    { value: 'certificate', label: 'certificate.doc' },
    { value: 'business-card', label: 'business_card.doc' }
  ];

  const serviceTypes = [
    { value: 'custom', label: 'custom_creation.exe' },
    { value: 'template', label: 'template_download.exe' }
  ];

  return (
    <>
      <section className="min-h-screen bg-black text-primary font-mono flex items-center justify-center px-4">
        <div className="max-w-4xl w-full">
          {/* Terminal Window */}
          <div className="border border-primary bg-black mb-8">
            {/* Terminal Header */}
            <div className="bg-primary text-black px-4 py-2 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-bold">root@enforger:~#</span>
            </div>
            
            <div className="p-6">
              {/* Boot Sequence */}
              <div className="mb-6 text-sm">
                <div className="text-primary/80 mb-1">$ sudo ./boot_enforger.sh</div>
                <div className="text-primary/60">
                  [OK] Loading Enforger Document Generation System...<br />
                  [OK] Initializing secure document protocols...<br />
                  [OK] Authentication system: READY<br />
                  [OK] Payment gateway: CONNECTED<br />
                  <span className="text-primary animate-pulse">[READY] System operational. Awaiting commands...</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 typewriter">
                &gt; ENFORGER_TERMINAL
              </h1>
              
              <div className="text-primary/90 text-lg mb-8 leading-relaxed">
                <div className="mb-2">// Professional document generation system</div>
                <div className="mb-2">// Access Level: ROOT | Status: ONLINE</div>
                <div>// Select parameters and execute</div>
              </div>

              {/* Command Interface */}
              <div className="bg-gray-900 border border-primary/30 p-6 mb-6">
                <div className="text-primary mb-4 flex items-center">
                  <span className="text-primary/60">root@enforger:~#</span>
                  <span className="ml-2">configure_document --interactive</span>
                  <span className="animate-pulse ml-1">_</span>
                </div>
                
                <div className="space-y-4 ml-6">
                  <div>
                    <label className="text-primary/80 text-sm block mb-2">--document-type:</label>
                    <Select value={documentType} onValueChange={setDocumentType}>
                      <SelectTrigger className="bg-black border-primary text-primary font-mono">
                        <SelectValue placeholder="[SELECT DOCUMENT TYPE]" />
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
                        <SelectValue placeholder="[SELECT SERVICE MODE]" />
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

                <div className="mt-6 ml-6">
                  <div className="text-primary/60 text-sm mb-3">
                    $ Parameters: {documentType || '[UNSET]'} | {serviceType || '[UNSET]'}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      className="bg-primary text-black hover:bg-primary/90 font-mono font-bold border-2 border-primary"
                      disabled={!documentType || !serviceType}
                    >
                      <Link to="/services">$ ./execute --now</Link>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-black font-mono font-bold"
                    >
                      <Link to="/services">$ ./show_options --all</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* System Status */}
              <div className="text-primary/60 text-sm bg-gray-900 border border-primary/30 p-4">
                <div className="text-primary/80 mb-2">$ system_status --verbose</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>STATUS: {documentType && serviceType ? 'READY_TO_EXECUTE' : 'AWAITING_PARAMETERS'}</div>
                  <div>UPTIME: 99.9% | SECURE: TRUE</div>
                  <div>ACTIVE_SESSIONS: 1,247 | QUEUE: 0</div>
                  <div>LAST_UPDATE: {new Date().toLocaleTimeString()}</div>
                </div>
              </div>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'DOCS_GENERATED', value: '10,247', status: 'ACTIVE' },
              { label: 'SUCCESS_RATE', value: '99.9%', status: 'OPTIMAL' },
              { label: 'AVG_EXEC_TIME', value: '<12h', status: 'FAST' }
            ].map((stat, index) => (
              <div key={index} className="border border-primary/30 bg-black p-4">
                <div className="text-primary/80 text-sm">$ query {stat.label.toLowerCase()}</div>
                <div className="text-primary text-2xl font-bold">{stat.value}</div>
                <div className="text-primary/60 text-xs">[{stat.status}]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .typewriter {
          border-right: 2px solid #00FF00;
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { border-color: #00FF00; }
          51%, 100% { border-color: transparent; }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
