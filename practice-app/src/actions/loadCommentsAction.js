import LOAD_COMMENTS from "./actionTypes";

const loadCommentsAction = (comments) => {
    console.log("action hit with: ",comments);
    
    return({
        type: "LOAD_COMMENTS",
        comments
    });
}

export default loadCommentsAction;