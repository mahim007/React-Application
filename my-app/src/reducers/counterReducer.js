const initialState={
    counter: 0
};

function counterReducer(state=initialState, action){
    console.log("count reducer : counter :", state.counter);
    
    switch (action.type) {
        case "INCREASE": {
            return({
                counter: state.counter+1
            });
        }
        case "DECREASE": {
            return({
                counter: state.counter-1
            });
        }
        default:{
            return state;
        }
    }
};

export default counterReducer;