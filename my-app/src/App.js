import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import BlogPost from "./BlogPost";

// const author={
//     avatarUrl: "./logo.svg",
//     name: "J.K. Rowling",
// };

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    <BlogPost title="first blog" description={100}>
                        https://reactjs.org/docs/conditional-rendering.html
                    </BlogPost>
                </div>
            </div>
        );
    }


}

export default App;
