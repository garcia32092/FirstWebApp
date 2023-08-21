import React from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Link to="/">
                    <img src="/SpartanLogo.png" alt="Logo" width="100" height="100" />
                </Link>
                <div style={{ flexGrow: 1 }} />
                <Button startIcon={<StarIcon />} color="inherit" variant="text" component={Link} to="#">
                    Review us on Google
                </Button>
                <Button startIcon={<CallIcon />} color="inherit" variant="text" component={Link} to="#">
                    Call Us
                </Button>
                <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}>Services</Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
