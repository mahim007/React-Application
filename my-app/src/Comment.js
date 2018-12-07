import React from "react";

function formatDate(date) {
    return date;
}

function Comment(props) {
    return(
        <div className="comment">
            <div className="userInfo">
                <img className="avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                />
                <div className="userInfoName">
                    {props.author.name}
                </div>
            </div>
            <div className="commentText">
                {props.text}
            </div>
            <div className="commentDate">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

export default Comment;