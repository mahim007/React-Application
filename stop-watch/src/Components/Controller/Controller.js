import React from "react";


class Controller extends React.Component {

    constructor(props){
        super(props);

        this.state={
            start: true,
            pause: false,
            lap: false,
            reset: false
        };
    }

    startHandler(event){
        this.setState({
            ...this.state,
            start: false,
            pause: true,
            lap: true
        });

        this.props.start();
    }

    pauseHandler(){
        this.setState({
            ...this.state,
            start: true,
            pause: false,
            lap: false,
            reset: true
        });

        this.props.pause();
    }

    lapHandler(){
        this.props.lap();
    }

    resetHandler(){
        this.setState({
            start: true,
            pause: false,
            lap: false,
            reset: false
        });

        this.props.reset();
    }

    getController(){
        let output=null;
        
        if (this.state.start && !this.state.reset){
            output=(
                <div className="my-5">
                    <button
                        className="btn btn-success btn-large px-5 ml-5"
                        onClick={(event)=>this.startHandler()}
                    >
                        Start
                    </button>
                </div>
            );

            return output;
        }
        else if (this.state.pause && this.state.lap){
            output=(
                <div className="my-5">
                    <button
                        className="btn btn-primary btn-large px-5 ml-5"
                        onClick={(event)=>this.pauseHandler()}
                    >
                        Pause
                    </button>
                    <button
                        className="btn btn-warning btn-large px-5 ml-5"
                        onClick={(event)=>this.lapHandler()}
                    >
                        Lap
                    </button>
                </div>
            );

            return output;
        }
        else if (this.state.start && this.state.reset){
            output=(
                <div className="my-5">
                    <button
                        className="btn btn-success btn-large px-5 ml-5"
                        onClick={(event)=>this.startHandler()}
                    >
                        Start
                    </button>
                    <button
                        className="btn btn-danger btn-large px-5 ml-5"
                        onClick={(event)=>this.resetHandler()}
                    >
                        Reset
                    </button>
                </div>
            );

            return output;
        }
    }

    render() {
        return(
            this.getController()
        );
    }

}

export default Controller;