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
import ResetPassword from './pages/auth/ResetPassword';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';
import VerifyMail from './pages/auth/VerifyMail';
import GetMail from './pages/auth/GetMail';
import VerifyOTP from './pages/auth/VerifyOTP';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="pt-20">
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify-email" element={<VerifyMail />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/get-otp" element={<GetMail />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<PlanSelection />} />
              <Route path="/verify-account" element={<VerifyAccount />} />
              <Route
                path="/verify-account/next-of-kin"
                element={<VerifyKinAccount />}
              />
              <Route
                path="/available-packages"
                element={<AvailablePackages />}
              />
              <Route path="/payment-plan" element={<PaymentPlan />} />
              <Route path="/payment-plan/daily" element={<PaymentPlanSpan />} />
              <Route path="/payment-checkout" element={<PaymentCheckout />} />
              <Route path="/wallet" element={<Wallet />} />
            </Route>
            <Route path="*" element={<Signin />} />
          </Routes>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;

