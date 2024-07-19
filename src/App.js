import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard'; 
import Doctor from './components/doctor';
import Contact from './components/contact';
import Tracker from './components/tracker';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
