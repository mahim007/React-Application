import React from 'react';
import {connect} from "react-redux";
import onIncreaseClick from "../actions/onIncreaseClick";

const IncreaseButton = (props) => {
    return(
        <div>
            <button
                className="btn btn-success mx-3"
                onClick={ props.handleIncrease }
            >Increase</button>
        </div>
    );
};

function mapDispatchToProps(dispatch){
    return({
        handleIncrease: () => dispatch(onIncreaseClick())
    });
}



export default connect(null, mapDispatchToProps)(IncreaseButton);