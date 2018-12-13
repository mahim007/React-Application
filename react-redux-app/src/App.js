import React, { Component } from 'react';
import './App.css';
import Post from "./Components/Post";
import PostForm from "./Components/PostForm";
import { Provider } from "react-redux";
import store from "./store";

// const store=createStore(() => [], {}, applyMiddleware);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <h2 className="text text-danger" style={{textAlign: "center"}}>Header</h2>
                        <PostForm />
                        <hr/>
                        <Post />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;

// ReactDOM.render(<App/>, document.getElementById("root"));