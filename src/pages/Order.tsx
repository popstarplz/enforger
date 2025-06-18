
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Order = () => {
  const [user, setUser] = useState<any>(null);
  const [orders] = useState([
    {
      id: 1,
      service: "Web Penetration Test",
      status: "In Progress",
      price: 299,
      date: "2024-01-15"
    },
    {
      id: 2,
      service: "Network Security Audit",
      status: "Completed",
      price: 499,
      date: "2024-01-10"
    }
  ]);
  const { toast } = useToast();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({
        title: "Access Required",
        description: "Please sign in to view orders",
        variant: "destructive"
      });
      window.location.href = '/auth';
      return;
    }
    setUser(user);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'text-green-400';
      case 'In Progress':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400">
      <Header />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-green-400 hover:text-green-300 mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-green-500">Order History</h1>
        </div>

        {user && (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-green-400">
                    <div className="flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      Order #{order.id}
                    </div>
                    <span className={`text-sm ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <span className="text-green-400/70 text-sm">Service:</span>
                      <div className="text-green-400 font-semibold">{order.service}</div>
                    </div>
                    <div>
                      <span className="text-green-400/70 text-sm">Price:</span>
                      <div className="text-green-400 font-semibold">${order.price}</div>
                    </div>
                    <div>
                      <span className="text-green-400/70 text-sm">Date:</span>
                      <div className="text-green-400 font-semibold">{order.date}</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-green-500/50 text-green-400 hover:bg-green-500/10"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {orders.length === 0 && (
              <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
                <CardContent className="py-12 text-center">
                  <Package className="w-16 h-16 mx-auto mb-4 text-green-400/50" />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">No Orders Yet</h3>
                  <p className="text-green-400/70 mb-6">Start exploring our services to place your first order</p>
                  <Link to="/services">
                    <Button className="bg-green-500 text-black hover:bg-green-400 font-bold">
                      Browse Services
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Order;
