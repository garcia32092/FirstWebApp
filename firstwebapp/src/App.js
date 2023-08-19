import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
    return (
        <Router>
          <NavBar/>
            <Routes>
                <Route path="/home" element={<Home/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </Router>
    );
}

export default App;
