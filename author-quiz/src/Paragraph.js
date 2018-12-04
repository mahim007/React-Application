import React from "react";

class Paragraph extends React.Component{
    constructor(props){
        super(props);

        this.state={
            a: 1,
            b: 2,
            c: 3
        };
    }

    buttonHnadler(event){
        this.setState({
            b: 3,
            c: 4,
            d: 5
        });

        console.log(this.state);
    }

    render() {
        return(
            <div>
                <p>Hello World! Yoy are {this.props.name}</p>
                <button onClick={(event)=>{this.buttonHnadler(event)}}>Click me!</button>
            </div>
        );
    }
}

export default Paragraph;