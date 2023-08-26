import React from 'react';
import { Container, Typography, Box, IconButton, Link, Grid } from '@mui/material';
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material';

const FooterSection = () => {
  return (
    <Box py={4} bgcolor="#282c34" color="white">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <img src={process.env.PUBLIC_URL + "/SpartanLogo.png"} alt="Logo" width="100" height="100" />
            <Box mt={2}>
              <IconButton color="primary" component={Link} href="#">
                <Facebook />
              </IconButton>
              <IconButton color="primary" component={Link} href="#">
                <Instagram />
              </IconButton>
              <IconButton color="primary" component={Link} href="#">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Typography variant="h5">Quick Links</Typography>
            <Box mt={2}>
              <Typography component={Link} href="/" color="inherit" display="block">
                Home
              </Typography>
              <Typography component={Link} href="/services" color="inherit" display="block">
                Services
              </Typography>
              <Typography component={Link} href="/contact" color="inherit" display="block">
                Contact
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterSection;
