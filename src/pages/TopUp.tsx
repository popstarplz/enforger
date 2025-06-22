
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Wallet, Copy, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const TopUp = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [paymentAddress, setPaymentAddress] = useState<string>('');
  const [copied, setCopied] = useState<string>('');
  const { toast } = useToast();

  const topUpAmounts = [10, 25, 50, 100, 250, 500];
  
  const cryptoCurrencies = [
    { 
      value: 'BTC', 
      label: 'Bitcoin', 
      icon: '₿', 
      color: 'text-orange-400',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'
    },
    { 
      value: 'LTC', 
      label: 'Litecoin', 
      icon: 'Ł', 
      color: 'text-blue-400',
      address: 'LQTpS1gFKq4VGvs4d9GtBxLJN6GjMQCYa7'
    },
    { 
      value: 'XMR', 
      label: 'Monero', 
      icon: 'ɱ', 
      color: 'text-purple-400',
      address: '44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A'
    }
  ];

  const generatePaymentAddress = () => {
    if (!selectedAmount || !selectedCrypto) {
      toast({
        title: "Error",
        description: "Please select amount and cryptocurrency",
        variant: "destructive"
      });
      return;
    }

    const crypto = cryptoCurrencies.find(c => c.value === selectedCrypto);
    if (crypto) {
      setPaymentAddress(crypto.address);
      toast({
        title: "Payment Address Generated",
        description: `Send exactly $${selectedAmount} worth of ${selectedCrypto} to the address below`,
      });
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-green-400">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/" className="text-green-400 hover:text-green-300 mr-4">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-3xl font-bold text-green-500">Account Top-Up</h1>
        </div>

        {/* Current Balance */}
        <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-green-400">
              <Wallet className="w-5 h-5 mr-2" />
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">$0.00</div>
            <p className="text-green-400/70 mt-2">Add funds to your account using cryptocurrency</p>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Amount Selection */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Select Amount (USD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {topUpAmounts.map((amount) => (
                  <Button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={`${
                      selectedAmount === amount
                        ? "bg-green-500 text-black"
                        : "bg-transparent border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                    } transition-all duration-300`}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Crypto Selection */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Select Cryptocurrency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cryptoCurrencies.map((crypto) => (
                  <Button
                    key={crypto.value}
                    onClick={() => setSelectedCrypto(crypto.value)}
                    variant={selectedCrypto === crypto.value ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedCrypto === crypto.value
                        ? "bg-green-500 text-black"
                        : "bg-transparent border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                    } transition-all duration-300`}
                  >
                    <span className={`${crypto.color} mr-3 text-lg`}>{crypto.icon}</span>
                    {crypto.label} ({crypto.value})
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Generate Payment Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={generatePaymentAddress}
            disabled={!selectedAmount || !selectedCrypto}
            className="bg-green-500 text-black hover:bg-green-400 font-bold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Generate Payment Address
          </Button>
        </div>

        {/* Payment Details */}
        {paymentAddress && (
          <Card className="bg-gray-900/70 backdrop-blur-sm border-green-500/50 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                Payment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-green-400/70">Amount:</span>
                  <span className="ml-2 text-green-400 font-semibold">${selectedAmount} USD</span>
                </div>
                <div>
                  <span className="text-green-400/70">Currency:</span>
                  <span className="ml-2 text-green-400 font-semibold">{selectedCrypto}</span>
                </div>
              </div>
              
              <div>
                <span className="text-green-400/70 text-sm">Payment Address:</span>
                <div className="mt-2 p-4 bg-black/50 border border-green-500/30 rounded-lg flex items-center justify-between">
                  <code className="text-green-400 break-all text-sm font-mono mr-2">{paymentAddress}</code>
                  <Button
                    onClick={() => copyToClipboard(paymentAddress, 'Address')}
                    variant="ghost"
                    size="sm"
                    className="text-green-400 hover:bg-green-500/10 flex-shrink-0"
                  >
                    {copied === 'Address' ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="text-green-400/60 text-sm p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <div className="font-semibold mb-2">⚠️ Important Instructions:</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Send exactly ${selectedAmount} worth of {selectedCrypto} to this address</li>
                  <li>Your account will be credited once the transaction is confirmed</li>
                  <li>Confirmation time varies by network (BTC: ~30min, LTC: ~10min, XMR: ~20min)</li>
                  <li>Do not send any other cryptocurrency to this address</li>
                </ul>
              </div>

              <div className="text-center pt-4">
                <p className="text-green-400/80 text-sm">
                  Need help? Contact support with your transaction ID once payment is sent.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default TopUp;
