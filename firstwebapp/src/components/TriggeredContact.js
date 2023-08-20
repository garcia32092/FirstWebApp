import React, { useState } from 'react';
import { Container } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';
import Contact from './Contact';

const TriggeredContact = () => {
    const [opacity, setOpacity] = useState(1);

  return (
    <ScrollTrigger onEnter={() => setOpacity(1)} onExit={() => setOpacity(0.1)}>
      <Container style={{ opacity: opacity, transition: 'opacity 8s' }}>
        <Contact />
      </Container>
    </ScrollTrigger>
  );
}

export default TriggeredContact;
