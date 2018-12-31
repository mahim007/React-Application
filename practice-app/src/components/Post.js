import React from "react";
import {Link} from "react-router-dom";

class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(data => data.json())
            .then(post => this.setState({
                post: post,
                isLoaded: true
            }))

    }

    render() {
        return (
            <div>
                {
                    this.state.isLoaded === false ?
                        <h1>Loading....</h1>
                        :
                        <div className="jumbotron my-3">
                            <p>{this.state.post.title}</p>
                            <p>{this.state.post.body}</p>
                            <button className="btn btn-danger">
                                <Link to="/home">Home</Link>
                            </button>
                        </div>
                }
            </div>
        );
    }
}

export default Post;