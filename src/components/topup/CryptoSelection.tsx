
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CryptoSelectionProps {
  selectedCrypto: string;
  onCryptoSelect: (crypto: string) => void;
}

const CryptoSelection = ({ selectedCrypto, onCryptoSelect }: CryptoSelectionProps) => {
  const cryptoCurrencies = [
    { value: 'BTC', label: 'Bitcoin', icon: '₿', color: 'text-orange-400' },
    { value: 'LTC', label: 'Litecoin', icon: 'Ł', color: 'text-blue-400' },
    { value: 'USDT', label: 'Tether', icon: '₮', color: 'text-green-400' }
  ];

  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
      <CardHeader>
        <CardTitle className="text-green-400">Payment Method</CardTitle>
      </CardHeader>
      <CardContent>
        <Select value={selectedCrypto} onValueChange={onCryptoSelect}>
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
  );
};

export default CryptoSelection;
