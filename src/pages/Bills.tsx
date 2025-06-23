
import DocumentOrderPage from '@/components/DocumentOrderPage';

const Bills = () => {
  return (
    <DocumentOrderPage
      title="Utility Bills"
      price="$10.00"
      description="Electricity, gas, water, and internet bills"
      fields={[
        { name: 'billType', label: 'Bill Type', type: 'select', required: true, options: ['Electricity', 'Gas', 'Water', 'Internet'] },
        { name: 'customerName', label: 'Customer Name', type: 'text', required: true },
        { name: 'serviceAddress', label: 'Service Address', type: 'text', required: true },
        { name: 'billAmount', label: 'Bill Amount', type: 'number', required: true },
        { name: 'billDate', label: 'Bill Date', type: 'date', required: true }
      ]}
    />
  );
};

export default Bills;
