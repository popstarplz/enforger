
import DocumentOrderPage from '@/components/DocumentOrderPage';

const BankStatements = () => {
  return (
    <DocumentOrderPage
      title="Bank Statements"
      price="$15.00"
      description="Professional bank statement documents"
      fields={[
        { name: 'bankName', label: 'Bank Name', type: 'text', required: true },
        { name: 'accountHolder', label: 'Account Holder Name', type: 'text', required: true },
        { name: 'accountNumber', label: 'Account Number', type: 'text', required: true },
        { name: 'balance', label: 'Account Balance', type: 'number', required: true },
        { name: 'statementPeriod', label: 'Statement Period', type: 'text', required: true, placeholder: 'e.g., January 2024' }
      ]}
    />
  );
};

export default BankStatements;
