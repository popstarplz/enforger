
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-950 font-mono">
      <div className="container mx-auto px-4">
        {/* Terminal Header */}
        <div className="text-center mb-16">
          <div className="text-primary/80 mb-2">$ cat /services/overview.txt</div>
          <h2 className="text-4xl font-bold text-primary mb-4">
            &gt; SERVICE_MODULES_LOADED
          </h2>
          <div className="text-primary/80 max-w-2xl mx-auto">
            [INFO] Two primary execution paths available:<br />
            [1] CUSTOM_CREATION: Full-service document generation<br />
            [2] DIY_TEMPLATES: Self-service template distribution
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Custom Service */}
          <Card className="bg-black border-primary/50 hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-primary/80 text-sm mb-2">$ ./execute custom_service.sh</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                CUSTOM_CREATION_MODULE
              </h3>
              
              <div className="text-primary/80 mb-6 space-y-2">
                <div># Professional document generation service</div>
                <div># Input: Your specifications</div>
                <div># Output: Ready-to-use documents</div>
                <div># Processing time: &lt;24 hours</div>
              </div>

              <div className="bg-gray-900 border border-primary/30 p-4 mb-6">
                <div className="text-primary/60 text-sm">FEATURES:</div>
                <ul className="text-primary/80 space-y-1 text-sm mt-2">
                  <li>+ Custom design integration</li>
                  <li>+ Photo/logo embedding</li>
                  <li>+ Security features</li>
                  <li>+ Professional quality output</li>
                </ul>
              </div>

              <Button 
                asChild
                className="bg-primary text-black hover:bg-primary/90 font-mono font-bold w-full"
              >
                <Link to="/order">$ ./initiate_custom_order.sh</Link>
              </Button>
            </CardContent>
          </Card>

          {/* DIY Templates */}
          <Card className="bg-black border-primary/50 hover:border-primary transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-primary/80 text-sm mb-2">$ ./execute template_service.sh</div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                DIY_TEMPLATE_MODULE
              </h3>
              
              <div className="text-primary/80 mb-6 space-y-2">
                <div># Self-service template distribution</div>
                <div># Input: Template selection + payment</div>
                <div># Output: Editable document files</div>
                <div># Processing time: Instant download</div>
              </div>

              <div className="bg-gray-900 border border-primary/30 p-4 mb-6">
                <div className="text-primary/60 text-sm">FEATURES:</div>
                <ul className="text-primary/80 space-y-1 text-sm mt-2">
                  <li>+ Instant download access</li>
                  <li>+ Fully editable formats</li>
                  <li>+ Print-ready resolution</li>
                  <li>+ Multiple file formats</li>
                </ul>
              </div>

              <Button 
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-black font-mono font-bold w-full"
              >
                <Link to="/templates">$ ./browse_templates.sh</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Status Display */}
        <div className="mt-16 text-center">
          <div className="bg-black border border-primary/30 p-6 max-w-2xl mx-auto">
            <div className="text-primary/80 text-sm mb-2">$ system_status --verbose</div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-primary/60">UPTIME:</span>
                <span className="text-primary ml-2">99.9%</span>
              </div>
              <div>
                <span className="text-primary/60">ORDERS_PROCESSED:</span>
                <span className="text-primary ml-2">10,000+</span>
              </div>
              <div>
                <span className="text-primary/60">TEMPLATES_AVAILABLE:</span>
                <span className="text-primary ml-2">50+</span>
              </div>
              <div>
                <span className="text-primary/60">AVG_DELIVERY:</span>
                <span className="text-primary ml-2">&lt;12h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
