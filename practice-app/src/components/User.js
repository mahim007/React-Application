import React from "react";
import { Link } from "react-router-dom";

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

class User extends React.Component {
    constructor(props){
        super(props);

        this.state={
            posts: [],
            userInfo: null,
            isLoaded: false
        };
    }

    componentDidMount(){
        let userId=this.props.match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then( res => res.json() )
        .then( posts => this.setState({
            posts: posts,
        }) )

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then( data => data.json())
        .then( user => this.setState({
            ...this.state,
            userInfo: user,
            isLoaded: true
        }))
    }

    render(){

        console.log(this.state);
        console.log(this.props);
        
        
        return(
            <div>
                {
                    this.state.isLoaded === false ?
                    <h1>Loading</h1>
                    :
                    <div>
                        <h1>{this.state.userInfo.name}</h1>
                    <ul>{
                        this.state.posts.map( (post, index) => (
                            <li style={{display: "inline-block"}} key={post.id}>
                                <div style={styleList} className="jumbotron my-3">
                                    <p>{post.title}</p>
                                    <button 
                                        className="btn btn-secondary"
                                    >
                                        <Link to={{pathname: `/user/${this.props.match.params.id}/post/${post.id}`}}>View Post</Link>
                                    </button>
                                </div>
                            </li>
                        ) )
                    }</ul>
                    </div>
                }
            </div>
        );
    }
};

export default User;