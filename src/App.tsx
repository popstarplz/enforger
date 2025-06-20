
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import TopUp from '@/pages/TopUp';
import Auth from '@/pages/Auth';
import Order from '@/pages/Order';
import DriversLicense from '@/pages/DriversLicense';
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
