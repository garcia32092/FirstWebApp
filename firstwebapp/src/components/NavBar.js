import React from 'react';
import { Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SpotifySVG from '../assets/spotify.svg';
import AppleMusicSVG from '../assets/applemusic.svg';
import InstagramSVG from '../assets/instagram.svg';
import TikTokSVG from '../assets/tiktok.svg';
import XSVG from '../assets/x.svg';
import FacebookSVG from '../assets/facebook.svg';
import YouTubeSVG from '../assets/youtube.svg';
import DiscordSVG from '../assets/discord.svg';

const NavBar = () => {
    const theme = useTheme();

    const socialLinks = [
        { icon: <img src={SpotifySVG} alt="Spotify" style={{ width: 40, height: 40 }} />, url: '' },
        { icon: <img src={AppleMusicSVG} alt="Apply Music" style={{ width: 40, height: 40 }} />, url: '' },
        { icon: <img src={InstagramSVG} alt="Instagram" style={{ width: 40, height: 40 }} />, url: 'https://www.instagram.com/real1elias' },
        { icon: <img src={TikTokSVG} alt="TikTok" style={{ width: 40, height: 40 }} />, url: 'https://www.tiktok.com/@real1eli' },
        { icon: <img src={XSVG} alt="X" style={{ width: 40, height: 40 }} />, url: 'https://www.twitter.com/real1eli' },
        { icon: <img src={FacebookSVG} alt="Facebook" style={{ width: 40, height: 40 }} />, url: 'https://www.facebook.com/real1elias' },
        { icon: <img src={YouTubeSVG} alt="YouTube" style={{ width: 40, height: 40 }} />, url: 'https://www.youtube.com/@real1elias' },
        { icon: <img src={DiscordSVG} alt="Discord" style={{ width: 40, height: 40 }} />, url: '' },
    ];

    return (
        <Container style={{ backgroundColor: theme.palette.background.default }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + theme.palette.mode === 'dark' ? "/WhiteKnowledgeLogo.png" : "/BlackKnowledgeLogo.png"} alt="Logo" width="125" height="89" /> {/* logo png image ratio is 1 to 0.71 */}
                </Link>
            </div>
            <div style={{ marginTop: '20px', justifyContent: 'center', display: 'flex' }}>
                    {socialLinks.map((link, index) => (
                        <IconButton
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: '#f0f0f0',
                                borderRadius: '50%',
                                margin: '0 7px',
                                '&:hover': {
                                    backgroundColor: '#cccccc',
                                },
                                height: { xs: '32px', sm: '42px' },
                                width: { xs: '32px', sm: '42px' },
                                padding: { xs: '4px', sm: '5px' },
                            }}
                        >
                            {link.icon}
                        </IconButton>
                    ))}
            </div>
        </Container>
    );
}

export default NavBar;
