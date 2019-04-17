import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import store from "../store/store";

import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import OutputResult from "./OutputResult";
import Review from './Review';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <div
                        style={{ display: 'flex', paddingTop: '100px' }}
                        className="row align-items-center justify-content-center">
                        <IncreaseButton />
                        <OutputResult />
                        <DecreaseButton />
                    </div>
                    <div
                        style={{ paddingTop: '50px' }}
                        className="row align-items-center justify-content-center">
                        <Review name='mahim' />
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
