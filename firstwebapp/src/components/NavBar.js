import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookSVG from '../assets/facebook.svg';

const NavBar = () => {
    const linkStyle = {
        color: 'black', // Text color
        textDecoration: 'none',
        '&:hover': {
            color: 'black', // Highlight color on hover
        },
    };

    const socialLinks = [
        // { icon: <TwitterIcon />, url: 'https://twitter.com/real1eli', color: '#1DA1F2' }, // Twitter blue
        // { icon: <InstagramIcon />, url: 'https://www.instagram.com/real1elias', color: '#C13584' }, // Instagram gradient (pick one of the colors)
        // { icon: <YouTubeIcon />, url: 'https://www.youtube.com/@real1elias', color: '#FF0000' }, // YouTube red
        { icon: <img src={FacebookSVG} alt="Facebook" style={{ width: 42, height: 42 }} />, url: 'https://www.facebook.com/real1elias' },
        // ... add more links here
    ];

    return (
        <AppBar position="static" color="default" style={{ backgroundColor: 'inherit', boxShadow: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <Link to="/">
                    <img src={process.env.PUBLIC_URL + "/BlackKnowledgeLogo.png"} alt="Logo" width="200" height="142" /> {/* logo png image ratio is 1 to 0.71 */}
                </Link>
            </div>
            <Toolbar style={{ justifyContent: 'center' }}>
                <Button style={linkStyle} component={Link} to="/music">
                    Music
                </Button>
                <Button style={linkStyle} component={Link} to="/videos">
                    Videos
                </Button>
                <Button style={linkStyle} component={Link} to="/links">
                    Links
                </Button>
            </Toolbar>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                    {socialLinks.map((link, index) => (
                        <IconButton
                        className="social-icon-button"
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{
                            backgroundColor: '#f0f0f0',
                            borderRadius: '50%',
                            margin: '0 5px',
                            '&:hover': {
                                backgroundColor: '#cccccc',
                            },
                        }}
                        >
                            {link.icon}
                        </IconButton>
                    ))}
            </div>
        </AppBar>
    );
}

export default NavBar;
