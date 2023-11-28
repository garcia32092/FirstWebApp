import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Music from './Music';
import releasesData from '../data/releases.json';
import { useTheme } from '@mui/material/styles';
import NorthIcon from '@mui/icons-material/North';

const MainPage = () => {
    const [releases, setReleases] = useState([]);
    const [selectedRelease, setSelectedRelease] = useState(null);
    const theme = useTheme();

    useEffect(() => {
        setReleases(releasesData);
        if (releasesData.length > 0) {
            setSelectedRelease(releasesData[0]);
        }
    }, []);

    const renderLinkshareEmbed = () => {
        if (selectedRelease.linkshareURL) {
            return (
                <iframe
                    title={`${selectedRelease.title} Linkshare`}
                    src={selectedRelease.linkshareURL}
                    width="100%"
                    height="300"
                    scrolling="no"
                    frameborder="0"
                    style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
                </iframe>
            );
        } else {
            return (
                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        marginTop: '20px',
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                    }}
                >
                    <NorthIcon/>This release is not on streaming platforms<NorthIcon/>
                </Typography>
            );
        }
    };

    return (
        <Container style={{ marginTop: '25px', marginBottom: '25px', backgroundColor: theme.palette.background.default }}>
            {selectedRelease && (
                <>
                    <Typography
                        variant="h6"
                        align="center"
                        color={theme.palette.text.primary}
                        sx={{
                            fontSize: { xs: '1.05rem', sm: '1.25rem' },
                        }}
                    >
                        {selectedRelease.title}
                    </Typography>
                    <iframe
                        title={`${selectedRelease.title} Widget`}
                        width="100%"
                        height="300"
                        scrolling="no"
                        frameborder="0"
                        src={selectedRelease.embedUrl}
                        style={{ width: '0px', minWidth: '100%', maxWidth: '100%' }}>
                    </iframe>
                    {renderLinkshareEmbed()}
                </>
            )}
            <Music releases={releases} onReleaseSelect={setSelectedRelease} />
        </Container>
    );
}

export default MainPage;
