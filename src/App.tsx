import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ApplicationForm from './pages/ApplicationForm';
import RefundPolicy from './pages/refund-policy';
import PrivacyPolicy from './pages/privacy-policy';
import Terms from './pages/terms';
import ShippingAndDelivery from './pages/ShippingAndDelivery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/apply" element={<ApplicationForm />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
    </Routes>
  );
}

export default App;