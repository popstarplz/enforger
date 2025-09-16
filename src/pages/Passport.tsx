
import DocumentOrderPage from '@/components/DocumentOrderPage';

const Passport = () => {
  return (
    <DocumentOrderPage
      title="USA Passport (2021)"
      price="$20.00"
      description="Professional USA passport documents"
      fields={[
        { name: 'fullName', label: 'Full Name', type: 'text', required: true },
        { name: 'dateOfBirth', label: 'Date of Birth', type: 'date', required: true },
        { name: 'placeOfBirth', label: 'Place of Birth', type: 'text', required: true },
        { name: 'nationality', label: 'Nationality', type: 'text', required: true, defaultValue: 'United States' },
        { name: 'passportNumber', label: 'Passport Number (Optional)', type: 'text', placeholder: 'Leave blank for random' },
        { name: 'issueDate', label: 'Issue Date', type: 'date', required: true },
        { name: 'expirationDate', label: 'Expiration Date', type: 'date', required: true }
      ]}
      requiresPhoto={true}
    />
  );
};

export default Passport;
