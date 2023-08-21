import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white">
      <Container>
        <Typography variant="body1" align="center" gutterBottom>
          &copy; {new Date().getFullYear()} Spartan Mechanical & Service
        </Typography>
        <Typography variant="body2" align="center">
          123 Main St, Anytown, USA
        </Typography>
        <Typography variant="body2" align="center">
          (123) 456-7890
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
