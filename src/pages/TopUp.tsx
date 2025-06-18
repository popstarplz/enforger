
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bitcoin, DollarSign } from 'lucide-react';

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
    { value: 'BTC', label: 'Bitcoin (BTC)', icon: '₿' },
    { value: 'LTC', label: 'Litecoin (LTC)', icon: 'Ł' },
    { value: 'USDT', label: 'Tether (USDT)', icon: '₮' }
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
      // No balance record exists yet, create one
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
      // Create transaction record
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

      // For demo purposes, generate a mock address
      // In production, you would integrate with Coinbase Commerce API
      const mockAddresses = {
        BTC: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
        LTC: 'LQTpS1gFKq4VGvs4d9GtBxLJN6GjMQCYa7',
        USDT: '0x742d35Cc6669B432c46C9e8B4D0f0f4F0D8F4A8C'
      };

      const address = mockAddresses[selectedCrypto as keyof typeof mockAddresses];
      setPaymentAddress(address);

      toast({
        title: "Payment Address Generated",
        description: `Send exactly $${selectedAmount} worth of ${selectedCrypto} to the address below`
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
    <div className="min-h-screen bg-black text-primary font-mono">
      {/* Terminal Header */}
      <div className="border-b border-primary/30 bg-black">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-primary hover:text-primary/80">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-primary/80">root@enforger:~# ./topup.exe</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Terminal Window */}
        <div className="border border-primary bg-black mb-8">
          {/* Terminal Header */}
          <div className="bg-primary text-black px-4 py-2 flex items-center justify-between">
            <span className="font-bold">ACCOUNT_BALANCE_MANAGER</span>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>${balance.toFixed(2)}</span>
            </div>
          </div>

          <div className="p-6">
            {/* Boot Sequence */}
            <div className="mb-6 text-sm">
              <div className="text-primary/80 mb-1">$ sudo ./init_payment_system.sh</div>
              <div className="text-primary/60">
                [OK] Loading cryptocurrency payment gateway...<br />
                [OK] Coinbase Commerce: CONNECTED<br />
                [OK] Security protocols: ACTIVE<br />
                <span className="text-primary animate-pulse">[READY] System ready for top-up operations...</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              &gt; ACCOUNT_TOP_UP
            </h1>

            <div className="text-primary/90 text-sm mb-8">
              <div className="mb-1">// Minimum top-up amount: $10.00</div>
              <div className="mb-1">// Supported cryptocurrencies: BTC, LTC, USDT</div>
              <div>// Current balance: ${balance.toFixed(2)}</div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <div className="text-primary/80 text-sm mb-3">$ select_amount --interactive</div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {topUpAmounts.map((amount) => (
                  <Button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    className={`border-primary font-mono ${
                      selectedAmount === amount
                        ? "bg-primary text-black"
                        : "bg-black text-primary hover:bg-primary hover:text-black"
                    }`}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>
            </div>

            {/* Crypto Selection */}
            <div className="mb-6">
              <div className="text-primary/80 text-sm mb-3">$ select_cryptocurrency --method</div>
              <Select value={selectedCrypto} onValueChange={setSelectedCrypto}>
                <SelectTrigger className="bg-black border-primary text-primary font-mono">
                  <SelectValue placeholder="[SELECT CRYPTOCURRENCY]" />
                </SelectTrigger>
                <SelectContent className="bg-black border-primary">
                  {cryptoCurrencies.map((crypto) => (
                    <SelectItem 
                      key={crypto.value} 
                      value={crypto.value}
                      className="text-primary hover:bg-primary hover:text-black font-mono"
                    >
                      {crypto.icon} {crypto.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Generate Payment Button */}
            <div className="mb-6">
              <Button
                onClick={generatePaymentAddress}
                disabled={!selectedAmount || !selectedCrypto || loading}
                className="bg-primary text-black hover:bg-primary/90 font-mono font-bold border-2 border-primary w-full md:w-auto"
              >
                {loading ? "$ ./generating_address..." : "$ ./generate_payment_address --now"}
              </Button>
            </div>

            {/* Payment Address Display */}
            {paymentAddress && (
              <div className="bg-gray-900 border border-primary/30 p-6 mb-6">
                <div className="text-primary/80 text-sm mb-2">
                  $ payment_details --output
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-primary/60">AMOUNT:</span>
                    <span className="ml-2 text-primary">${selectedAmount} USD</span>
                  </div>
                  <div>
                    <span className="text-primary/60">CURRENCY:</span>
                    <span className="ml-2 text-primary">{selectedCrypto}</span>
                  </div>
                  <div>
                    <span className="text-primary/60">ADDRESS:</span>
                    <div className="mt-1 p-3 bg-black border border-primary/20 rounded">
                      <code className="text-primary break-all text-sm">{paymentAddress}</code>
                    </div>
                  </div>
                  <div className="text-primary/60 text-xs mt-4">
                    ⚠️ Send exactly ${selectedAmount} worth of {selectedCrypto} to this address.<br />
                    Your account will be credited once the transaction is confirmed.
                  </div>
                </div>
              </div>
            )}

            {/* System Status */}
            <div className="text-primary/60 text-sm bg-gray-900 border border-primary/30 p-4">
              <div className="text-primary/80 mb-2">$ system_status --payment</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>STATUS: {paymentAddress ? 'AWAITING_PAYMENT' : 'READY'}</div>
                <div>BALANCE: ${balance.toFixed(2)}</div>
                <div>GATEWAY: ONLINE</div>
                <div>SECURITY: ENABLED</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUp;
