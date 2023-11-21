import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { 
//     TikTok, Twitter, Instagram, YouTube, 
//     Snapchat, Facebook, Thread, SoundCloud, 
//     Discord, // Import other relevant icons
// } from '@mui/icons-material';

const socialLinks = [
    // { name: 'TikTok', icon: <TikTok />, url: 'https://www.tiktok.com/' },
    { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/' },
    { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/' },
    // { name: 'YouTube', icon: <YouTube />, url: 'https://www.youtube.com/' },
    // { name: 'SnapChat', icon: <Snapchat />, url: 'https://www.snapchat.com/' },
    { name: 'Facebook', icon: <FacebookIcon />, url: 'https://www.facebook.com/' },
    // { name: 'Threads', icon: <Thread />, url: 'https://threads.com/' }, // Replace with correct URL
    // { name: 'SoundCloud', icon: <SoundCloud />, url: 'https://soundcloud.com/' },
    // { name: 'Discord', icon: <Discord />, url: 'https://discord.com/' },
    // Add other platforms as needed
];

const Links = () => {
    return (
        <Container style={{ marginTop: '25px', marginBottom: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6">Testing Links Component</Typography>
            {socialLinks.map((link, index) => (
                <Button
                    key={index}
                    startIcon={link.icon}
                    href={link.url}
                    target="_blank" // Open link in a new tab
                    rel="noopener noreferrer"
                    style={{ marginBottom: '10px', textTransform: 'none' }}
                >
                    <Typography variant="body1">Test: {link.name}</Typography>
                </Button>
            ))}
        </Container>
    );
}

export default Links;
