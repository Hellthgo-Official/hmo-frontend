import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PlanSelection from './pages/PlanSelection';
import VerifyAccount from './pages/VerifyAccount';
import VerifyKinAccount from './pages/VerifyKinAccount';
import AvailablePackages from './pages/AvailablePackages';
import PaymentPlan from './pages/PaymentPlan';
import PaymentPlanSpan from './pages/PaymentPlanSpan';
import PaymentCheckout from './pages/PaymentCheckout';
import Wallet from './pages/Wallet';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<PlanSelection />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          <Route
            path="/verify-account/next-of-kin"
            element={<VerifyKinAccount />}
          />
          <Route path="/available-packages" element={<AvailablePackages />} />
          <Route path="/payment-plan" element={<PaymentPlan />} />
          <Route path="/payment-plan/daily" element={<PaymentPlanSpan />} />
          <Route path="/payment-checkout" element={<PaymentCheckout />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

