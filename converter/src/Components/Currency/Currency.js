import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Currency extends React.Component{
    render() {
        return (
            <div className="row">
                <h3 className="col">Converter Type</h3>
                <button className="btn btn-secondary" onClick={this.props.onClick}>{this.props.stts}</button>
            </div>
        );
    }
}

export default Currency;