import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <NavLink to="/home">Home</NavLink>{" "}
            <NavLink to="/about">About</NavLink>{" "}
            <NavLink to="/contact">Contact</NavLink>{" "}
        </nav>
    );
};

export default Header;