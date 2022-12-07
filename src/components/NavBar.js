import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    
    
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/PartyMusic">PartyMusic</NavLink>
            <NavLink to="/StudyMusic">StudyMusic</NavLink>
        </nav>
    );
}

export default NavBar;