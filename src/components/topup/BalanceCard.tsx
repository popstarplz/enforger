
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  return (
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
  );
};

export default BalanceCard;
