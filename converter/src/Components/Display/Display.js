import React from "react";

class Display extends React.Component{
    render() {
        console.log(this.props);
        let input=this.props.amount;
        let inputType=null;
        let outputType=null;
        let output=input;

        if (this.props.bdtToUsd){
            output=input/80;
            inputType="BDT";
            outputType="USD";
        }
        else{
            output=input*80;
            inputType="USD";
            outputType="BDT";
        }

        if (!this.props.display){
            return(
                <div className="jumbotron">
                    <h1 className="display-4">
                        Enter amount and press submit button!
                    </h1>
                </div>
            );
        }
        return (
            <div className="jumbotron">
                <h4 className="display-4">
                    {input}{" "}{inputType}{" = "}{output}{" "}{outputType}
                </h4>
            </div>
        );
    }
}

export default Display;