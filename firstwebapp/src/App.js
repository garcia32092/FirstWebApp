import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import Music from './components/Music';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import InitialAnimation from './components/InitialAnimation';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#000000',
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
      AOS.init({
        duration: 1000,
      });
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
            <Router basename="/">
                <ScrollToTop />
                {showAnimation && <InitialAnimation onAnimationEnd={handleAnimationEnd} />} {/* Conditionally render the InitialAnimation */}
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Music/>} />
                    <Route path="/videos" element={<Music/>} />
                    <Route path="/socials" element={<Contact/>} />
                    <Route path="/home" element={<Home/>} /> {/* For viewing purposes of using animation (TO BE DELETED) */}
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
