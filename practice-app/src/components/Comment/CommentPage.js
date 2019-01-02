import React from "react";


let styleList={
    border: "2px solid",
    display: "inline-block",
    borderRadius: "25px",
    color: "#00ffbf",
    width: "250px",
    height: "250px",
    backgroundColor: "#666699",
    textAlign: "center",
    margin: "20px"
};

const CommentPage = ({comments}) => {
    console.log("comment page loaded!!!!");
    console.log("comment page props:", comments);
    return (
        <div>
            {
                comments.map((comment, index) => (
                    <div
                        key={comment.id}
                        className={"jumbotron"}
                        style={styleList}
                    >
                        <p>No. {comment.id}</p>
                        <p>name: {comment.name}</p>

                        <p>body: {
                            comment.body.length < 10 ?
                                comment.body :
                                comment.body.substr(0, 10).concat("...")
                        }</p>
                    </div>
                ))
            }
            <input type="text"  />
        </div>
    );
}

export default CommentPage;