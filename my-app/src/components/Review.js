import React from 'react';
import { connect } from 'react-redux';

import changeReviewAction from '../actions/onChangeReview';


const review = (props) => {
    return (
        <div className="row">
            <input
                className="col-md-6"
                type="text"
                value={props.review}
                onChange={props.handleReviewChange}
            />
            <h2 className="col-md-6">
                User's review: {props.review}
            </h2>
        </div>
    );
}

function mapStateToProps(state) {
    console.log('in review: ', state);
    return({
        review: state.review.review
    })
}

function mapDispatchToProps(dispatch) {
    return({
        handleReviewChange: (evt) => {
            console.log('evt', evt.target.value);
             dispatch(changeReviewAction(evt.target.value)) }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(review);