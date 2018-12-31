import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import {Provider} from "react-redux";
import store from "../store/store";

import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import OutputResult from "./OutputResult";

class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <IncreaseButton/>
                            <OutputResult/>
                            {console.log(store.getState())}
                            <DecreaseButton/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
