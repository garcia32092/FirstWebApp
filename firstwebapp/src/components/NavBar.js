import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const linkStyle = {
        color: 'black', // Text color
        textDecoration: 'none',
        '&:hover': {
            color: 'black', // Highlight color on hover
        },
    };

    return (
        <AppBar position="static" color="default" style={{ backgroundColor: 'inherit', boxShadow: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
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
                <Button style={linkStyle} component={Link} to="/socials">
                    Socials
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
