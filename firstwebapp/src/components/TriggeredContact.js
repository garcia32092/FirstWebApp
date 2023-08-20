import React, { useState } from 'react';
import { Container } from '@mui/material';
import ScrollTrigger from 'react-scroll-trigger';
import Contact from './Contact';

const TriggeredContact = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollTrigger onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
      <Container style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s' }}>
        <Contact />
      </Container>
    </ScrollTrigger>
  );
}

export default TriggeredContact;
