import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DarkNavbar from './components/DarkNavbar';
import DarkFooter from './components/DarkFooter';
import NewHome from './pages/NewHome';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Process from './pages/Process';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Disclaimer from './pages/legal/Disclaimer';
import RiskDisclosure from './pages/legal/RiskDisclosure';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import Terms from './pages/legal/Terms';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <div className="App bg-[#0a0a0b] min-h-screen">
      <BrowserRouter>
        <DarkNavbar />
        <Routes>
          <Route path="/" element={<NewHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/process" element={<Process />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/disclaimer" element={<Disclaimer />} />
          <Route path="/legal/risk-disclosure" element={<RiskDisclosure />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<Terms />} />
        </Routes>
        <DarkFooter />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
