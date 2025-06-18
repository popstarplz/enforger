
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

interface PaymentDetailsProps {
  selectedAmount: number | null;
  selectedCrypto: string;
  paymentAddress: string;
}

const PaymentDetails = ({ selectedAmount, selectedCrypto, paymentAddress }: PaymentDetailsProps) => {
  if (!paymentAddress) return null;

  return (
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
  );
};

export default PaymentDetails;
