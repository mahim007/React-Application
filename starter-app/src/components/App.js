import React, { Component } from 'react';
import './App.css';
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import {Provider} from "react-redux";
import store from "../store/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </div>
            </Provider>
        );
    }
}

export default App;
