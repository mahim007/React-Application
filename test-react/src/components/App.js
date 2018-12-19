import React, { Component } from 'react';
import './App.css';

import RegistrationForm from "./RegistrationForm";
import OutputCourse from "./OutputCourse";
import Background from "./Background";
import {Provider} from "react-redux";
import store from "../store/store";

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            courseList: [],
            isSubmit: false
        };

    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <div>
                            <RegistrationForm
                                handleReset={this.handleReset}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <div>
                            <OutputCourse courses={this.state.courseList}  /></div>
                        <div>
                            <Background/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
