import React from 'react';
import { Container, Typography, Box, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'react-scroll-trigger';
import TriggeredContact from './TriggeredContact';

const Home = () => {
  return (
    <div>
        <ScrollTrigger onProgress={({ progress }) => {
          const multiplier = 1.7;  // Adjust this value to control the fading speed
          const opacity = Math.max(1.6 - (progress * multiplier), 0);
          document.getElementById('homeContainer').style.opacity = opacity;
          document.getElementById('infoCard').style.opacity = Math.max((progress * multiplier) - 0.6, 0);
        }}>
            <Container id="homeContainer" style={{
                backgroundImage: 'url("/HeaderImage.jpg")',
                backgroundSize: 'cover',
                minHeight: '100vh',  // Set a minimum height for the Container
            }}>
            </Container>
        </ScrollTrigger>
        <Card style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: '10px',
            textAlign: 'center',
            position: 'absolute',
            top: '18%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '70px'
        }}>
            <Typography variant="h2" gutterBottom style={{ color: '#cc0000', textShadow: '2px 1px 0.5px black, 0 0 0em black, 0 0 0em black' }}>
                Spartan Mechanical & Service
            </Typography>
        </Card>
        <Card id="infoCard" style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '25px',
            textAlign: 'center',
            position: 'absolute',
            top: '130%',
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
