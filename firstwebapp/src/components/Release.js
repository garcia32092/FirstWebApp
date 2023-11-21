import React from 'react';
import { Typography, Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Release = () => {
    const location = useLocation();
    const { title, embedUrl } = location.state || {}; // Extract data from location state

    return (
        <Container style={{ marginTop: '25px', marginBottom: '25px' }}>
            {title && embedUrl ? (
                <>
                    <Typography variant="h6" align="center">{title}</Typography>
                    <iframe
                        title={`${title} Widget`}
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameborder="0"
                        src={embedUrl}
                        style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
                    </iframe>
                </>
            ) : (
                <Typography variant="h6" align="center">Release not found</Typography>
            )}
        </Container>
    );
}

export default Release;
