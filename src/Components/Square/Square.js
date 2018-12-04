import React from "react";
import "./Square.css";

class Square extends React.Component{

    constructor(props){
        super(props);
    }

    clickHandler(event){
        console.log(this.props.value);
    }

    render() {
        return(
            <div className="btnName col-sm-4"
                 onClick={(event)=>{this.clickHandler(event)}}
            >
                {this.props.value}
            </div>
        );
    }
}

export default Square;