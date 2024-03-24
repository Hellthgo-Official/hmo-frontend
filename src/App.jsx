import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlanSelection from './pages/PlanSelection';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<PlanSelection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

