import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TriggeredContact from './TriggeredContact';

const Home = () => {
    return (
        <Container>
            <Typography variant="h2" gutterBottom>
                Spartan Mechanical & Service
            </Typography>
            <Typography variant="body1" paragraph>
                We provide the best heating, ventilation, and air conditioning services. Our team of experts is dedicated to ensuring your comfort and satisfaction. Whether you need a simple repair or a complete system installation, we have the expertise and equipment to get the job done right.
            </Typography>
            <Box sx={{ mt: 4 }}>
                <Button variant="contained" color="primary" component={Link} to="/services">
                    Learn More
                </Button>
            </Box>
            <TriggeredContact />
        </Container>
    );
}

export default Home;
