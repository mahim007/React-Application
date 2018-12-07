import React from "react";

class Tick extends React.Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date(),
        };
    }

    componentDidMount() {
        this.timerID=setInterval(()=>{
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return(
            <div>
                <h1 className="text text-danger">welcome</h1>
                <h2>it is: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }
}

export default Tick;