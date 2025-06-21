
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import TopUp from '@/pages/TopUp';
import Auth from '@/pages/Auth';
import Order from '@/pages/Order';
import DriversLicense from '@/pages/DriversLicense';
import BankStatements from '@/pages/BankStatements';
import PayStubs from '@/pages/PayStubs';
import Bills from '@/pages/Bills';
import CreditCards from '@/pages/CreditCards';
import Passport from '@/pages/Passport';
import SocialSecurity from '@/pages/SocialSecurity';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/topup" element={<TopUp />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/order" element={<Order />} />
          <Route path="/driverslicense" element={<DriversLicense />} />
          <Route path="/bankstatements" element={<BankStatements />} />
          <Route path="/paystubs" element={<PayStubs />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/creditcards" element={<CreditCards />} />
          <Route path="/passport" element={<Passport />} />
          <Route path="/socialsecurity" element={<SocialSecurity />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
