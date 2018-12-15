import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import Count from "./components/Counts"
import Controller from "./components/Controller";

class App3 extends React.Component{
    render() {
        return(
            <Provider store={store}>
                <div className="container">
                    <div className="App">
                        <h1>this is app3</h1>
                        <Count/>
                        <Controller/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App3;