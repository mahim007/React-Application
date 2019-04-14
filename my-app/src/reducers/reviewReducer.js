const initialState = {
    review: '',
}

export default function reviewReducer(state = initialState, action) {
    switch(action.type) {
        case 'CHANGE_REVIEW': {
            console.log('action: ', action);
            return({
                review: action.review,
            });
        }
        default: {
            return state
        }
    }
}