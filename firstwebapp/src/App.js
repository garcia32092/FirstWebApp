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
          <Home/>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </Router>
    );
}

export default App;
