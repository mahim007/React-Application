import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {createPost} from "../actions/postActions";

class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:"",
            body:"",
        };

        this.changeInput=this.changeInput.bind(this);
        this.submitPost=this.submitPost.bind(this);
    }

    changeInput(evt){
        this.setState({
            [evt.target.name] : evt.target.value,
        });
    }

    submitPost(e){
        e.preventDefault();
        let data={
            title: this.state.title,
            body: this.state.body,
        };

        this.props.createPost(data);
    }

    render() {
        return(
            <div>
                <h4>Add Post</h4>
                <form onSubmit={this.submitPost}>
                    <div>
                        <label>Title:</label><br/>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.changeInput}
                        />
                    </div>
                    <div>
                        <label>Body</label><br/>
                        <textarea
                            name="body"
                            value={this.state.body}
                            onChange={this.changeInput}
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes={
    createPost: PropTypes.func.isRequired
};

export default connect(null, {createPost})(PostForm);