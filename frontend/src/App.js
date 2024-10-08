import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Vaults from './Pages/Vaults';
import Portfolio from './Pages/Portfolio';
import VaultDetails from './Pages/VaultDetails'; // Import your VaultDetails component
import Dashboard from './Components/Dashboard';
import DashboardLayout from './Components/DashboardLayout';
import DashboardLayoutPort from './Components/DashboardLayoutPort';
import DashboardLayoutTransaction from './Components/DashboardLayoutTransaction';
import DashboardLayoutProfile from './Components/DasboardLayoutProfile';
import Roadmap from './Components/Roadmap';
function App() {
  return (
    <div className="page-wrapper"> {/* Wrapper for flex layout */}
      <Router>
        <Header /> {/* Moved Header outside of Routes for consistent placement */}
        <main className="main-content"> {/* Main content wrapper */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/retailers/vaults" element={<Vaults />} />
            <Route path="/retailers/portfolio" element={<Portfolio />} />
            <Route path="/retailers/roadmap" element={<Roadmap />} />
            <Route path='/retailers/dashboard/profile' element={<DashboardLayoutProfile />} />
            <Route path='/retailers/dashboard/vault' element={<DashboardLayout />} />
            <Route path='/retailers/dashboard/portfolio' element={<DashboardLayoutPort />} />
            <Route path='/retailers/dashboard/history' element={<DashboardLayoutTransaction />} />
            <Route path='/retailers/dashboard/faq' element={<Dashboard />} />
            <Route path="/vault/:vaultName" element={<VaultDetails />} /> {/* New route for vault details */}
          </Routes>
        </main>
        <Footer /> {/* Footer outside of Routes for consistent placement */}
      </Router>
    </div>
  );
}

export default App;
