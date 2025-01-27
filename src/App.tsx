import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Background } from './components/Background';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Faq } from './pages/Faq.tsx';
import { Contact } from './pages/Contact';

function BackgroundWrapper() {
  const location = useLocation();
  return location.pathname === '/' ? <Background /> : null;
}

function App() {
  return (
    <Router>
      <div className="relative">
        <BackgroundWrapper />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;