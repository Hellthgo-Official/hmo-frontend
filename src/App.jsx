import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Sidebar from './components/Sidebar';
import { AuthProvider } from './context/AuthProvider';
import GetMail from './pages/auth/GetMail';
import ResetPassword from './pages/auth/ResetPassword';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import VerifyMail from './pages/auth/VerifyMail';
import VerifyOTP from './pages/auth/VerifyOTP';
import AvailablePackages from './pages/plan/AvailablePackages';
import PaymentCheckout from './pages/plan/PaymentCheckout';
import PaymentPlan from './pages/plan/PaymentPlan';
import PaymentPlanSpan from './pages/plan/PaymentPlanSpan';
import PlanSelection from './pages/plan/PlanSelection';
import VerifyAccount from './pages/plan/VerifyAccount';
import VerifyKinAccount from './pages/plan/VerifyKinAccount';
import Profile from './pages/profile/Profile';
import FundWallet from './pages/wallet/FundWallet';
import OnrampWallet from './pages/wallet/OnrampWallet';
import TransferFunds from './pages/wallet/TransferFunds';
import Wallet from './pages/wallet/Wallet';
import ProcessingWallet from './pages/wallet/ProcessingWallet';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="pt-20">
          <Navbar />
          <div className="w-full flex">
            <Sidebar />
            <div className="w-full lg:w-[75%] lg:ml-auto lg:flex lg:items-center lg:justify-center  mt-10 p-5 lg:p-10">
              <div className="w-full lg:w-3/4 lg:p-5 lg:rounded-lg shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
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
                    <Route
                      path="/payment-plan/daily"
                      element={<PaymentPlanSpan />}
                    />
                    <Route
                      path="/payment-checkout"
                      element={<PaymentCheckout />}
                    />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/onramp-wallet" element={<OnrampWallet />} />
                    <Route path="/fund-wallet" element={<FundWallet />} />
                    <Route path="/transfer-funds" element={<TransferFunds />} />
                    <Route
                      path="/processing-funds"
                      element={<ProcessingWallet />}
                    />
                    <Route path="/profile" element={<Profile />} />
                  </Route>
                  <Route path="*" element={<Signin />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </AuthProvider>
    </Router>
  );
};

export default App;

