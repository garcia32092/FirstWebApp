import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkIcon from '@mui/icons-material/Link';

const socialLinks = [
    { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/real1eli' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/real1elias' },
    { name: 'YouTube', icon: <YouTubeIcon />, url: 'https://www.youtube.com/@real1elias' },
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/real1elias' },
    { name: 'TikTok', icon: <LinkIcon />, url: 'https://www.tiktok.com/@real1eli' },
    { name: 'SnapChat', icon: <LinkIcon />, url: 'https://www.t.snapchat.com/j89R5cgz' },
    { name: 'Threads', icon: <LinkIcon />, url: 'https://threads.com/@real1elias' },
    { name: 'SoundCloud', icon: <LinkIcon />, url: 'https://soundcloud.com/real1elias' },
    // { name: 'Discord', icon: <LinkIcon />, url: 'https://discord.com/' },
];

const Links = () => {
    return (
        <Container style={{ marginTop: '10px', marginBottom: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {socialLinks.map((link, index) => (
                <Button
                    variant="outlined"
                    key={index}
                    startIcon={link.icon}
                    href={link.url}
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer"
                    color="secondary"
                    style={{
                        marginTop: '10px'
                    }}
                >
                    <Typography variant="body1">{link.name}</Typography>
                </Button>
            ))}
        </Container>
    );
}

export default Links;
