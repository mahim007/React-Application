import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
    console.log("home called!");
    return(
        <div>
            <h3>Home Page</h3>
            <h3>Posts</h3>
            <Link to="posts/1">Post 1</Link>
            {" "}
            <Link to="posts/2">Post 2</Link>
            {" "}
            <Link to="posts/3">Post 3</Link>
        </div>
    );
};

export default HomePage;
