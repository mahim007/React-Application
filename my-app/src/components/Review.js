import React from 'react';
import { connect } from 'react-redux';

import changeReviewAction from '../actions/onChangeReview';


const review = (props) => {
    //console.log(props);
    return (
        <div className="row" style={{display: 'flex'}}>
            <input
                className="col-md-6"
                type="text"
                value={props.review}
                onChange={props.handleReviewChange}
            />
            <p className="col-md-6">
                User's review: {props.review}
            </p>
        </div>
    );
}

function mapStateToProps(state) {
    return({
        review: state.review.review
    })
}

function mapDispatchToProps(dispatch) {
    return({
        handleReviewChange: (evt) => {
             dispatch(changeReviewAction(evt.target.value)) }
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(review);