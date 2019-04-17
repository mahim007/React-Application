import React from 'react';
import {connect} from "react-redux";

const OutputResult = (props) => {
    return(
        <div style={{
            background : "skyblue",
            borderRadius: 50,
            height: 100,
            width: 100,
            textAlign: "center"
        }}>
        <h1 className="py-4">{props.counterValue.counter}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return({
        counterValue: state.counter
    });
}

export default connect(mapStateToProps)(OutputResult) ;