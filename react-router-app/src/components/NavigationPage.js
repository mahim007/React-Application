import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    console.log("navigation called!");
    return(
        <nav>
            <h3>Navigation bar: </h3>
            <div>
                <NavLink to="/">Home</NavLink>{" "}
                <NavLink to="/about">About</NavLink>{" "}
                <NavLink to="/contact">Contact</NavLink>{" "}
            </div>
        </nav>
    );
};

export default Navigation;
