import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default NavBar;