
import DocumentOrderPage from '@/components/DocumentOrderPage';

const PayStubs = () => {
  return (
    <DocumentOrderPage
      title="Pay Stubs"
      price="$12.00"
      description="Professional pay stub documents"
      fields={[
        { name: 'employeeName', label: 'Employee Name', type: 'text', required: true },
        { name: 'employerName', label: 'Employer Name', type: 'text', required: true },
        { name: 'grossPay', label: 'Gross Pay', type: 'number', required: true },
        { name: 'netPay', label: 'Net Pay', type: 'number', required: true },
        { name: 'payPeriod', label: 'Pay Period', type: 'text', required: true, placeholder: 'e.g., 01/01/2024 - 01/15/2024' }
      ]}
    />
  );
};

export default PayStubs;
