import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, About, LoginRegistration } from '../src'
import './App.css'; 

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginregistration" element={<LoginRegistration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
