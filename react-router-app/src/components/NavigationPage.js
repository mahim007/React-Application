import React from "react";
import {NavLink} from "react-router-dom";
import Auth from "../auth";

const Navigation = () => {
    console.log("navigation called!");
    return(
        <nav>
            <h3>Navigation bar: </h3>
            <div>
                <NavLink to="/">Home</NavLink>{" "}
                <NavLink to="/about">About</NavLink>{" "}
                <NavLink to="/contact">Contact</NavLink>{" "}
                { Auth.isLoggedIn && <NavLink to="/logout">Logout</NavLink> }
                { Auth.isLoggedIn===false && <NavLink to="/login">Login</NavLink> }
            </div>
        </nav>
    );
};

export default Navigation;
