import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions"

class Post extends React.Component{
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems=this.props.posts.map(
            (post)=>(
                <div
                    key={post.id}
                    className="jumbotron"
                >
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            )
        );
        return (
            <div>
                <h2 className="text text-success" style={{textAlign: "center"}}>Posts</h2>
                <div>{postItems}</div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {
        posts: state.posts.items
    }
};

export default connect(mapStateToProps, {fetchPosts})(Post);