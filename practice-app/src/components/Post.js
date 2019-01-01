import React from "react";
import {Link} from "react-router-dom";
import loadCommentsAction from "../actions/loadCommentsAction";
import {connect} from "react-redux";
import CommentPage from "./CommentPage";

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

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            comments: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        let postUrl=`http://jsonplaceholder.typicode.com/posts/${postId}`;
        let commentsUrl=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

        Promise.all([fetch(postUrl), fetch(commentsUrl)])
            .then( responses =>
                Promise.all(responses.map( res => res.json()))
                    .then( json =>{
                        console.log(json);
                        return json;
                    })
                    .then(results => {
                        this.setState({
                            post: results[0],
                            comments: results[1],
                            isLoaded: true
                        })
                        return results[1];
                    } )
                    .then(comments =>{
                        console.log("now dispatching action with: ", comments);
                        this.props.loadComments(comments);
                    })
            )


    }

    render() {
        return (
            <div>
                <CommentPage/>
                {
                    this.state.isLoaded === false ?
                        <h1>Loading....</h1>
                        :
                        <div>
                            <div className="jumbotron my-3">
                                <p>{this.state.post.title}</p>
                                <p>{this.state.post.body}</p>
                                <button className="btn btn-danger">
                                    <Link to="/home">Home</Link>
                                </button>
                            </div>
                            <div>
                                {
                                    this.state.comments.map((comment, index) =>(
                                        <div
                                            key={comment.id}
                                            className={"jumbotron"}
                                            style={styleList}
                                        >
                                            <p>No. {comment.id}</p>
                                            <p>name: {comment.name}</p>

                                            <p>body: {
                                                comment.body.length < 10?
                                                    comment.body:
                                                    comment.body.substr(0,10).concat("...")
                                            }</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return({
        loadComments: (comments) => dispatch(loadCommentsAction(comments))
    });
}

export default connect(null, mapDispatchToProps)(Post);
