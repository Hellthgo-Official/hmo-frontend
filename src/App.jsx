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
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import ForgotPassword from './pages/auth/ForgotPassword';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

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
      <AuthProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<PlanSelection />} />
            </Route>
            <Route path="*" element={<Signin />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;

