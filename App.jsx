import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

function App() {
  return (
    <Router>
      <header style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f4f4f4' }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>ABC</div>
        </Link>
        {/* Navigation */}
        <nav style={{ marginLeft: 'auto' }}>
          <ol style={{ display: 'flex', listStyle: 'none', gap: '500px', margin: 0, padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Aboutus">About Us</Link></li>
            <li><Link to="/Contactus">Contact Us</Link></li>
          </ol>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      <footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '10px 0' }}>
        © {new Date().getFullYear()} OurCompany. All Rights Reserved.
      </footer>
    </Router>
  );
}

export default App;
