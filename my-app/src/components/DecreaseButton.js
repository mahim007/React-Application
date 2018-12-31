import React from 'react';
import onDecreaseClick from "../actions/onDecreaseClick";
import {connect} from "react-redux";

const DecreaseButton = (props) => {
    return(
        <div>
            <button
             className="btn btn-danger mx-3"
             onClick={props.handleDecrease}
             >Decrease</button>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return({
        handleDecrease: () => dispatch(onDecreaseClick())
    });
}

export default connect(null, mapDispatchToProps)(DecreaseButton) ;