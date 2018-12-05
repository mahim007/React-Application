import React from "react";
import "./Square.css";

class Square extends React.Component{

    constructor(props){
        super(props);

        this.state={
            value: null
        };
    }

    // clickHandler(){
    //     this.setState({
    //         value: "X"
    //     });
    //     alert("button clicked!");
    // }

    render() {
        return(
            <div
                className="btnName col-sm-4"
                onClick={()=>{this.props.onClick()}}
            >
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}

export default Square;