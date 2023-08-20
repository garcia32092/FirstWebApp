import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
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
        }}>
        <Container id="homeContainer" style={{
          backgroundImage: 'url("/HeaderImage.jpg")',
          backgroundSize: 'cover',
          minHeight: '100vh',  // Set a minimum height for the Container
        }}>
          <Typography variant="h2" gutterBottom>
            Spartan Mechanical & Service
          </Typography>
          <Typography variant="body1" paragraph>
            We provide the best heating, ventilation, and air conditioning services...
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" component={Link} to="/services">
              Learn More
            </Button>
          </Box>
        </Container>
      </ScrollTrigger>
      <div style={{ marginTop: '950px' }}>
        <TriggeredContact />
      </div>
    </div>
  );
}

export default Home;
