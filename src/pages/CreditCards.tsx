
import DocumentOrderPage from '@/components/DocumentOrderPage';

const CreditCards = () => {
  return (
    <DocumentOrderPage
      title="Credit Cards"
      price="$16.00"
      description="Professional credit card documents"
      fields={[
        { name: 'cardholderName', label: 'Cardholder Name', type: 'text', required: true },
        { name: 'cardType', label: 'Card Type', type: 'select', required: true, options: ['Visa', 'Mastercard', 'American Express', 'Discover'] },
        { name: 'creditLimit', label: 'Credit Limit', type: 'number', required: true },
        { name: 'currentBalance', label: 'Current Balance', type: 'number', required: true },
        { name: 'statementDate', label: 'Statement Date', type: 'date', required: true }
      ]}
    />
  );
};

export default CreditCards;
