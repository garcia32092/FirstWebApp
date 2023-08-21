import React from 'react';
import { Container } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';
import Contact from './Contact';

const TriggeredContact = () => {
  return (
    <ScrollTrigger onProgress={({ progress }) => {
      const multiplier = 1.9;  // Adjust this value to control the fading speed
      document.getElementById('contactContainer').style.opacity = Math.max((progress * multiplier) - 0.01, 0);
    }}>
      <Container id="contactContainer">
        <Contact />
      </Container>
    </ScrollTrigger>
  );
}

export default TriggeredContact;
