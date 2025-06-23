
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Order = () => {
  const orders = [
    {
      id: 'ORD-001',
      type: 'Driver\'s License',
      status: 'Processing',
      price: '$18.00',
      submittedAt: '2024-01-15 14:30',
      estimatedCompletion: '24-48 hours'
    },
    {
      id: 'ORD-002',
      type: 'Bank Statement',
      status: 'Completed',
      price: '$15.00',
      submittedAt: '2024-01-14 10:15',
      downloadUrl: '#'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Processing':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <FileText className="w-4 h-4 text-blue-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Processing':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-green-400">
      <Header />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/services" className="text-green-400 hover:text-green-300 mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-green-500">Order Status</h1>
        </div>

        {orders.length === 0 ? (
          <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
            <CardContent className="p-12 text-center">
              <FileText className="w-16 h-16 text-green-400/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-400 mb-2">No Orders Yet</h3>
              <p className="text-green-400/70 mb-6">You haven't placed any orders yet. Browse our services to get started.</p>
              <Button asChild className="bg-green-500 text-black hover:bg-green-400">
                <Link to="/services">Browse Services</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center text-green-400">
                      {getStatusIcon(order.status)}
                      <span className="ml-2">Order #{order.id}</span>
                    </CardTitle>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <span className="text-green-400/70 text-sm">Document Type</span>
                      <p className="text-green-400 font-medium">{order.type}</p>
                    </div>
                    <div>
                      <span className="text-green-400/70 text-sm">Price</span>
                      <p className="text-green-400 font-medium">{order.price}</p>
                    </div>
                    <div>
                      <span className="text-green-400/70 text-sm">Submitted</span>
                      <p className="text-green-400 font-medium">{order.submittedAt}</p>
                    </div>
                    <div className="flex items-center">
                      {order.status === 'Completed' && order.downloadUrl ? (
                        <Button 
                          asChild
                          className="bg-green-500 text-black hover:bg-green-400"
                        >
                          <a href={order.downloadUrl} download>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </a>
                        </Button>
                      ) : (
                        <div>
                          <span className="text-green-400/70 text-sm">Est. Completion</span>
                          <p className="text-yellow-400 font-medium">{order.estimatedCompletion}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Order;
