import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import MakeProjects from './pages/MakeProjects';
import AppscriptProjects from './pages/AppscriptProjects';
import ZapierProjects from './pages/ZapierProjects';
import NNProjects from './pages/NNProjects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/MakeProjects" element={<MakeProjects />} />
          <Route path="/NNProjects" element={<NNProjects />} />
          <Route path="/AppscriptProjects" element={<AppscriptProjects />} />
          <Route path="/ZapierProjects" element={<ZapierProjects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
