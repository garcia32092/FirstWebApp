import React from 'react';
import { Container, Typography, Box, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';
import TriggeredContact from './TriggeredContact';

const Home = () => {
  return (
    <div>
        <ScrollTrigger onProgress={({ progress }) => {
          const multiplier = 1.9;  // Adjust this value to control the fading speed
          const opacity = Math.max(1.6 - (progress * multiplier), 0);
          document.getElementById('homeContainer').style.opacity = opacity;
          document.getElementById('infoCard').style.opacity = Math.max((progress * multiplier) - 0.7, 0);
        }}>
            <Container id="homeContainer" style={{
                backgroundImage: 'url("/HeaderImage.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',  // Set a minimum height for the Container
            }}>
            </Container>
        </ScrollTrigger>
        <Box style={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            alignItems: 'center',
            position: 'absolute',
            top: '22%',
            left: '38%',
            transform: 'translate(-50%, -50%)',
        }}>
            <Typography variant="h2" style={{ fontFamily: 'Custom-Arvo', fontWeight: 'bold', fontStyle: 'normal', fontSize: '5vw', color: '#cc0000', textShadow: '2px 1px 0.5px black, 0 0 0em black, 0 0 0em black' }}>
                SPARTAN
            </Typography>
            <Typography variant="h4" style={{ fontFamily: 'Custom-Arvo', fontWeight: 'bold', fontStyle: 'normal', fontSize: '3vw', color: '#cc0000', textShadow: '2px 1px 0.5px black, 0 0 0em black, 0 0 0em black' }}>
                MECHANICAL & SERVICE
            </Typography>
        </Box>
        <Card id="infoCard" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '28px',
            textAlign: 'center',
            position: 'absolute',
            top: '140%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0
        }}>
            <Typography variant="body1" paragraph>
                We provide the best heating, ventilation, and air conditioning services...
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Button variant="contained" color="primary" component={Link} to="/services">
                    Learn More
                </Button>
            </Box>
        </Card>
      <div style={{ marginTop: '450px' }}>
        <TriggeredContact />
      </div>
    </div>
  );
}

export default Home;
