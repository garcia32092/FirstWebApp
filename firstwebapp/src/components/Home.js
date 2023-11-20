import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
        <ScrollTrigger onProgress={({ progress }) => {
          const multiplier = 1.9;  // Adjust this value to control the fading speed
          const opacity = Math.max(1.6 - (progress * multiplier), 0);
          document.getElementById('homeContainer').style.opacity = opacity;
        }}>
            <Container id="homeContainer" style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/HeaderImage.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',  // Set a minimum height for the Container
            }}>
            </Container>
        </ScrollTrigger>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '22%',
            left: '38%',
            transform: 'translate(-50%, -50%)',
            '& img': {
                width: ['122%', '120%', '95%', '64%', '64%'], // 80% on small screens, 60% on medium, 50% on large
            }
        }}>
            <img src={process.env.PUBLIC_URL + "/SpartanText.png"} alt="Text" />
        </Box>
        <Container style={{ marginTop: '500px' }}>
            <div>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6} style={{ marginTop: '75px'}}>
                        <Typography variant="h3" gutterBottom align="center" data-aos="zoom-in">
                            Our business is personal
                        </Typography>
                        <Typography variant="body1" paragraph align="center" data-aos="zoom-in">
                            Spartan Mechanical & Service was founded in the year 2021 by a group of experienced engineers. Since then, the company has been providing top-quality services in the field of heating, ventilation, and air conditioning. Our team of experts is dedicated to offering the best solutions to our customers. We take pride in our work and strive to provide the highest quality services.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={process.env.PUBLIC_URL + "/Thumbs-Up.jpeg"}
                        alt="Thumbs Up" 
                        width="100%" 
                        data-aos="fade-left"
                        data-aos-duration="400"
                        data-aos-easing="ease-out"
                        />
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>
  );
}

export default Home;
