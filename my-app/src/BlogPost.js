import React from "react";
import PropTypes from "prop-types";

class BlogPost extends React.Component{
    render() {
        return (
            <div>
                <h1>title: {this.props.title}</h1>
                <p>description: {this.props.description}</p>
                <a href={this.props.children}>Click me!</a>
            </div>
        );
    }
}

BlogPost.propTypes={
    title: PropTypes.string,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};

export default BlogPost;