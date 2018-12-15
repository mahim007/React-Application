import React from "react";
import {createStore} from "redux";

class App2 extends React.Component{
    render() {

        const reducer = (state={}, action) =>{
            switch (action.type) {
                case "A":
                    return{
                        ...state,
                        shirt: "shirt"
                    };
                case "B":
                    return{
                        ...state,
                        pant: "pant"
                    };
                default:
                    return state;
            }
        };

        const store=createStore(reducer);

        store.subscribe(() =>{
            console.log(store.getState().shirt);
        });

        store.subscribe(() => {
            console.log(store.getState().pant);
        });

        store.dispatch({type: "X"});
        store.dispatch({type: "A"});
        store.dispatch({type: "C"});
        store.dispatch({type: "B"});
        store.dispatch({type: "C"});

        return (
            <div>

            </div>
        );
    }
}

export default App2;