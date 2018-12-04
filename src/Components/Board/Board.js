import React from "react";
import Square from "../Square/Square";

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container col-md-3">
                <div className="row ">
                    <Square value="" /><Square value="M" /><Square value="M" />
                </div>
                <div className="row">
                    <Square value="Mahim" /><Square value="M" /><Square value="M" />
                </div>
                <div className="row">
                    <Square value="Mahim" /><Square value="M" /><Square value="M" />
                </div>
            </div>
        );
    }
}

export default Board;