
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AmountSelectionProps {
  selectedAmount: number | null;
  onAmountSelect: (amount: number) => void;
}

const AmountSelection = ({ selectedAmount, onAmountSelect }: AmountSelectionProps) => {
  const topUpAmounts = [10, 15, 20, 40, 100, 200];

  return (
    <Card className="bg-gray-900/50 backdrop-blur-sm border-green-500/30">
      <CardHeader>
        <CardTitle className="text-green-400">Select Amount</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {topUpAmounts.map((amount) => (
            <Button
              key={amount}
              onClick={() => onAmountSelect(amount)}
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
  );
};

export default AmountSelection;
