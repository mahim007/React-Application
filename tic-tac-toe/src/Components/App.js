import React, { Component } from 'react';
import './App.css';
import Game from "./Game/Game";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="py-3">
                    <h2 className="text text-danger">Welcome!</h2>
                </div>
                <Game/>
            </div>
        );
    }
}

export default App;