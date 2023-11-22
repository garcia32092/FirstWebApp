import React from 'react';
import { Container } from '@mui/material';

const Videos = () => {
    return (
        <Container style={{
            marginTop: '25px',
            marginBottom: '1px',
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' // Add this to vertically center as well
        }}>
            <iframe
                title="YT Video"
                src="https://www.youtube.com/embed?list=UULFLlTafwrWEXSrMb3VLfpfGw"
                width="850"
                height="478"
                style={{
                    border: 'none', // Optional, removes the border
                    maxWidth: '100%', // Ensures responsiveness
                    maxHeight: '100vh' // Adjusts height based on viewport height
            }}
                allowFullScreen>
            </iframe>
            <iframe
                title="YT Subscribe Button"
                src="https://www.youtube.com/subscribe_embed?channelid=UCLlTafwrWEXSrMb3VLfpfGw"
                width="115"
                height="25"
                style={{
                    marginTop: '30px',
                    border: 'none',
            }}>
            </iframe>
        </Container>
    );
}

export default Videos;
