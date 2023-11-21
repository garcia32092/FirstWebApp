import React, { useState } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './Music.css'; // Import the CSS file

const Music = ({ releases, onReleaseSelect }) => {
    const [activeReleaseIndex, setActiveReleaseIndex] = useState(null);

    const handleReleaseClick = (release, index) => {
        setActiveReleaseIndex(index);
        onReleaseSelect(release);
    };

    const renderReleaseButtons = () => {
        return releases.map((release, index) => (
            <Grid item key={index}>
                <Card 
                    onClick={() => handleReleaseClick(release, index)}
                    className={`card ${activeReleaseIndex === index ? 'card-active' : ''}`}
                >
                    <CardMedia
                        component="img"
                        height="155"
                        image={release.imageUrl}
                        alt={release.title}
                    />
                    <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography gutterBottom variant="body2" align="center">
                            {release.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {release.releaseDate}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            {release.releaseType}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ));
    };

    return (
        <Container style={{ 
            marginTop: '25px', 
            marginBottom: '25px', 
            display: 'flex', 
            justifyContent: 'center' 
        }}>
            <Grid container spacing={4} style={{ 
                maxWidth: '100%', 
                display: 'flex', 
                justifyContent: 'center' 
            }}>
                {renderReleaseButtons()}
            </Grid>
        </Container>
    );
}

export default Music;
