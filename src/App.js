import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Confirm from './Pages/Confirm';
import './App2.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Confirm />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


