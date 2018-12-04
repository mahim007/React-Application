import React, { Component } from 'react';
import './App.css';
import Board from "./Board/Board";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="py-5">
                    <h3 className="text text-danger">Welcome!</h3>
                </div>
                <Board/>
            </div>
        );
    }
}

export default App;