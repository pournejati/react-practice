import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    const activeStyle = { color: 'navy' };

    return (
        <nav className="mb-3">
            <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
            <span className="ml-2 mr-2">|</span>
            <NavLink to="/contacts" activeStyle={activeStyle}>Contacts</NavLink>
        </nav>
    )
}

export default NavBar;