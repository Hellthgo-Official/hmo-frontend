import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanSelection from './pages/PlanSelection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<PlanSelection />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

