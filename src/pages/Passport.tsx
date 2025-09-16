import DocumentOrderPage from '@/components/DocumentOrderPage';

const Passport = () => {
  const fields = [
    { 
      name: 'fullName', 
      label: 'Full Name', 
      type: 'text' as const, 
      required: true,
      priority: 'high' as const,
      tooltip: 'Enter your full legal name exactly as it appears on official documents'
    },
    { 
      name: 'dateOfBirth', 
      label: 'Date of Birth', 
      type: 'date' as const, 
      required: true,
      priority: 'high' as const
    },
    { 
      name: 'placeOfBirth', 
      label: 'Place of Birth', 
      type: 'text' as const, 
      required: true,
      priority: 'high' as const,
      placeholder: 'City, State, Country'
    },
    { 
      name: 'nationality', 
      label: 'Nationality', 
      type: 'text' as const, 
      required: true,
      priority: 'medium' as const,
      defaultValue: 'United States'
    },
    { 
      name: 'passportNumber', 
      label: 'Passport Number', 
      type: 'text' as const, 
      required: false,
      priority: 'low' as const,
      placeholder: 'Leave blank for auto-generated',
      tooltip: 'We\'ll generate a realistic passport number if left blank'
    },
    { 
      name: 'issueDate', 
      label: 'Issue Date', 
      type: 'date' as const, 
      required: true,
      priority: 'medium' as const
    },
    { 
      name: 'expirationDate', 
      label: 'Expiration Date', 
      type: 'date' as const, 
      required: true,
      priority: 'medium' as const,
      tooltip: 'US passports are typically valid for 10 years for adults'
    }
  ];

  return (
    <DocumentOrderPage
      title="USA Passport (2021)"
      price="$20.00"
      description="Professional USA passport documents with authentic security features"
      fields={fields}
      requiresPhoto={true}
    />
  );
};

export default Passport;