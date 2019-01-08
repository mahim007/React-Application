import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

import {Provider} from "react-redux";
import store from "../store/store";

import IncreaseButton from "./IncreaseButton";
import DecreaseButton from "./DecreaseButton";
import OutputResult from "./OutputResult";

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            title: ""
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(e){
        let title=e.target.value;
        console.log("title: ",title);

        this.setState({
            title: title
        });

    }

    handleSubmit(){

    }

    render(){

         function  mun(){
              console.log("muntaqim");

         }
        return(
            <Provider store={store}>
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <IncreaseButton/>
                            <OutputResult/>
                            {console.log(store.getState())}
                            <DecreaseButton/>

                            <form  >
                                <input type="text" value="" onChange={mun} />
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
