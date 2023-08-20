import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/">
                    <img src="/SpartanLogo.png" alt="Logo" width="100" height="100" />
                </Link>
                <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/services">Services</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
