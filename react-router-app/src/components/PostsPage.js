import React from "react";
import {Link} from "react-router-dom";

const Posts = (props) => {
    console.log("posts called!");
    console.log(props);
    return(
        <div>
            <p>post id : {props.match.params.postId}
            </p>
            <Link to="/">Back to HomePage</Link>
        </div>
    );
};

export default Posts;
