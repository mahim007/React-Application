import React from "react";
import Auth from "../auth";
import {Redirect} from "react-router-dom";

class Logout extends React.Component{
    constructor(props){
        super(props);

        this.state={
            redirect: false
        }
    }

    componentDidMount() {
        Auth.logout(this.setState({
            redirect: true
        }));
    }

    render() {
        if (this.state.redirect) return <Redirect to="/" />
        else{
            return(
                <div>Logging out...</div>
            );
        }
    }
}

export default Logout;
