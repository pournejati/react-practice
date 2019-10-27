import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    const activeStyle = { color: 'red' };

    return (
        <nav className="mb-3">
            <NavLink to="/" exact activeStyle={activeStyle}>Home</NavLink>
            {"  |  "}
            <NavLink to="/contacts" activeStyle={activeStyle}>Contacts</NavLink>
        </nav>
    )
}

export default Nav;