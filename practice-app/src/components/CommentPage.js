import React from "react";
import {connect} from "react-redux";

const CommentPage = (props) => {
    console.log("comment page loaded!!!!");
    console.log("comment page props:",props.comments);
    return <div></div>
}

function mapStateToProps(state){
    console.log("state in commentpage: "+state);
    
    return({
        comments: state.comments
    });
}

export default connect(mapStateToProps)(CommentPage);