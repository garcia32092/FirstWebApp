import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FooterSection from './components/FooterSection';
import InitialAnimation from './components/InitialAnimation';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#cc0000',
        },
        secondary: {
            main: '#f48fb1',
        },
    },
    typography: {
        fontFamily: 'Custom-Arvo, sans-serif',
    },
});

function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

function App() {
    // Create the showAnimation state
    const [showAnimation, setShowAnimation] = useState(false);

    useEffect(() => {
        // Show the animation only if the user hasn't seen it yet
        if (!localStorage.getItem('animationShown')) {
            setShowAnimation(true);
            localStorage.setItem('animationShown', 'true');
        }
    }, []);

    // Handle the end of the animation
    const handleAnimationEnd = () => {
        setShowAnimation(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <ScrollToTop />
                {showAnimation && <InitialAnimation onAnimationEnd={handleAnimationEnd} />} {/* Conditionally render the InitialAnimation */}
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/services" element={<Services/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
            <FooterSection/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
