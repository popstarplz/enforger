
import DocumentOrderPage from '@/components/DocumentOrderPage';

const SocialSecurity = () => {
  return (
    <DocumentOrderPage
      title="Social Security Card"
      price="$14.00"
      description="Professional Social Security card documents"
      fields={[
        { name: 'fullName', label: 'Full Name', type: 'text', required: true },
        { name: 'socialSecurityNumber', label: 'SSN (Optional)', type: 'text', placeholder: 'Leave blank for random' },
        { name: 'signature', label: 'Signature Text', type: 'text', required: true, placeholder: 'How signature should appear' }
      ]}
    />
  );
};

export default SocialSecurity;
