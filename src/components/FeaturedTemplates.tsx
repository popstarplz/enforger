
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const FeaturedTemplates = () => {
  const templates = [
    {
      id: "STU_001",
      name: "STUDENT_ID_TEMPLATE",
      category: "EDUCATION",
      price: "$15",
      status: "ACTIVE"
    },
    {
      id: "EMP_001", 
      name: "EMPLOYEE_BADGE_TEMPLATE",
      category: "CORPORATE",
      price: "$20",
      status: "ACTIVE"
    },
    {
      id: "MEM_001",
      name: "MEMBERSHIP_CARD_TEMPLATE", 
      category: "ORGANIZATION",
      price: "$12",
      status: "ACTIVE"
    },
    {
      id: "EVT_001",
      name: "EVENT_BADGE_TEMPLATE",
      category: "EVENTS", 
      price: "$10",
      status: "ACTIVE"
    }
  ];

  return (
    <section className="py-20 bg-black font-mono">
      <div className="container mx-auto px-4">
        {/* Terminal Header */}
        <div className="text-center mb-16">
          <div className="text-primary/80 mb-2">$ ls /templates/featured/ --details</div>
          <h2 className="text-4xl font-bold text-primary mb-4">
            FEATURED_TEMPLATES/
          </h2>
          <div className="text-primary/80">
            [INFO] Displaying most popular template files<br />
            [STATUS] All templates verified and ready for download
          </div>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template) => (
            <Card key={template.id} className="bg-gray-950 border-primary/30 hover:border-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-primary/60 text-xs mb-2">FILE: {template.id}</div>
                <h3 className="text-primary font-bold text-sm mb-2">{template.name}</h3>
                
                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between">
                    <span className="text-primary/60">CATEGORY:</span>
                    <span className="text-primary">{template.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/60">PRICE:</span>
                    <span className="text-primary">{template.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-primary/60">STATUS:</span>
                    <span className="text-green-400">{template.status}</span>
                  </div>
                </div>

                <Button 
                  asChild
                  size="sm"
                  className="bg-primary text-black hover:bg-primary/90 font-mono font-bold w-full text-xs"
                >
                  <Link to="/templates">$ download</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Command Output */}
        <div className="bg-gray-950 border border-primary/30 p-6 max-w-4xl mx-auto">
          <div className="text-primary/80 text-sm mb-4">$ template_stats --summary</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-primary/60 mb-1">TOTAL_TEMPLATES:</div>
              <div className="text-primary text-2xl font-bold">50+</div>
            </div>
            <div>
              <div className="text-primary/60 mb-1">DOWNLOADS_TODAY:</div>
              <div className="text-primary text-2xl font-bold">127</div>
            </div>
            <div>
              <div className="text-primary/60 mb-1">AVG_RATING:</div>
              <div className="text-primary text-2xl font-bold">4.9/5</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-black font-mono font-bold"
            >
              <Link to="/templates">$ ./browse_all_templates.sh</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTemplates;
