
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bitcoin, DollarSign, Wallet, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TopUp = () => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [paymentAddress, setPaymentAddress] = useState<string>('');
  const [balance, setBalance] = useState<number>(0);
  const { toast } = useToast();

  const topUpAmounts = [10, 15, 20, 40, 100, 200];
  const cryptoCurrencies = [
    { value: 'BTC', label: 'Bitcoin', icon: '₿', color: 'text-orange-400' },
    { value: 'LTC', label: 'Litecoin', icon: 'Ł', color: 'text-blue-400' },
    { value: 'USDT', label: 'Tether', icon: '₮', color: 'text-green-400' }
  ];

  useEffect(() => {
    checkUser();
    fetchUserBalance();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      window.location.href = '/auth';
      return;
    }
    setUser(user);
  };

  const fetchUserBalance = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('user_balances')
      .select('balance')
      .eq('user_id', user.id)
      .single();

    if (data) {
      setBalance(data.balance);
    } else if (error && error.code === 'PGRST116') {
      await supabase
        .from('user_balances')
        .insert({ user_id: user.id, balance: 0 });
      setBalance(0);
    }
  };

  const generatePaymentAddress = async () => {
    if (!selectedAmount || !selectedCrypto || !user) {
      toast({
        title: "Error",
        description: "Please select amount and cryptocurrency",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      const { data: transaction, error } = await supabase
        .from('topup_transactions')
        .insert({
          user_id: user.id,
          amount: selectedAmount,
          crypto_currency: selectedCrypto,
          status: 'pending'
        })
        .select()
        .single();

      if (error) throw error;

      // Mock addresses for demo
      const mockAddresses = {
        BTC: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        LTC: 'LQTpS1gFKq4VGvs4d9GtBxLJN6GjMQCYa7',
        USDT: '0x742d35Cc6669B432c46C9e8B4D0f0f4F0D8F4A8C'
      };

      const address = mockAddresses[selectedCrypto as keyof typeof mockAddresses];
      setPaymentAddress(address);

      toast({
        title: "Payment Ready",
        description: `Send exactly $${selectedAmount} worth of ${selectedCrypto} to complete your top-up`
      });

    } catch (error) {
      console.error('Error creating transaction:', error);
      toast({
        title: "Error",
        description: "Failed to generate payment address",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
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

        {/* Balance Card */}
        <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-green-400">
              <Wallet className="w-5 h-5 mr-2" />
              Current Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-500">${balance.toFixed(2)}</div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Amount Selection */}
          <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Select Amount</CardTitle>
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
              <CardTitle className="text-green-400">Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                <SelectTrigger className="bg-black/50 border-green-500/50 text-green-400 hover:border-green-400">
                  <SelectValue placeholder="Select cryptocurrency" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-green-500/50">
                  {cryptoCurrencies.map((crypto) => (
                    <SelectItem 
                      key={crypto.value} 
                      value={crypto.value}
                      className="text-green-400 hover:bg-green-500/20 focus:bg-green-500/20"
                    >
                      <span className={`${crypto.color} mr-2`}>{crypto.icon}</span>
                      {crypto.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Generate Payment Button */}
        <div className="mt-8 text-center">
          <Button
            onClick={generatePaymentAddress}
            disabled={!selectedAmount || !selectedCrypto || loading}
            className="bg-green-500 text-black hover:bg-green-400 font-bold px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
          >
            {loading ? "Generating..." : "Generate Payment Address"}
          </Button>
        </div>

        {/* Payment Details */}
        {paymentAddress && (
          <Card className="bg-gray-900/70 backdrop-blur-sm border-green-500/50 mt-8">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Shield className="w-5 h-5 mr-2" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
                <div className="mt-2 p-4 bg-black/50 border border-green-500/30 rounded-lg">
                  <code className="text-green-400 break-all text-sm font-mono">{paymentAddress}</code>
                </div>
              </div>
              
              <div className="text-green-400/60 text-sm p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                ⚠️ Send exactly ${selectedAmount} worth of {selectedCrypto} to this address. Your account will be credited once confirmed.
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
