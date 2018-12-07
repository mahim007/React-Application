import React from "react";

class Input extends React.Component{
    render() {
        return (
            <div className="row">
                <div className="input-group col-sm-9">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Amount</span>
                    </div>
                    <input
                        className="form-control"
                        onChange={this.props.onChange}
                        value={this.props.amount}
                    ></input>
                </div>
                <button
                    className="col-sm-3 btn btn-primary btn-sm"
                    onClick={this.props.onClick}
                >Submit</button>
            </div>
        );
    }
}

export default Input;