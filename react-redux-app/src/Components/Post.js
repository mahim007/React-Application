import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";
import PropTypes from "prop-types";


class Post extends React.Component{
    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
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

Post.propTypes={
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state =>{
    console.log(state);
    return {
        posts: state.posts.items,
        newPost: state.posts.item
    }
};

export default connect(mapStateToProps, {fetchPosts})(Post);