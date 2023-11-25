import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Music from './Music';
import releasesData from '../data/releases.json';

const MainPage = () => {
    const [releases, setReleases] = useState([]);
    const [selectedRelease, setSelectedRelease] = useState(null);

    useEffect(() => {
        setReleases(releasesData);
        if (releasesData.length > 0) {
            setSelectedRelease(releasesData[0]);
        }
    }, []);

    return (
        <Container style={{ marginTop: '25px', marginBottom: '25px' }}>
            {selectedRelease && (
                <>
                    <Typography variant="h6" align="center">{selectedRelease.title}</Typography>
                    <iframe
                        title={`${selectedRelease.title} Widget`}
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameborder="0"
                        src={selectedRelease.embedUrl}
                        style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
                    </iframe>
                </>
            )}
            <Music releases={releases} onReleaseSelect={setSelectedRelease} />
        </Container>
    );
}

export default MainPage;
