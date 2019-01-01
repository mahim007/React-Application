import  LOAD_COMMENTS from "../actions/actionTypes";

const loadCommentsReducer = (state=[], action) =>{
    console.log("reducer hit with: ",action);
    console.log("load_comments: ",LOAD_COMMENTS);
    
    
    switch(action.type){
        case "LOAD_COMMENTS": {
            return[
                ...action.comments
            ]
        }
        default : {
            return state
        }
    }
}

export default loadCommentsReducer;