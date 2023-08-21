import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FooterSection from './components/FooterSection';

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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
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
