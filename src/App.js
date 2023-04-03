import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './pages';
import QualityStandartsPage from './pages/Categories';

// Hello there

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QualityStandarts" element={<QualityStandartsPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
