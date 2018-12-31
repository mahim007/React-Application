import React from "react";
import {Redirect} from "react-router-dom";
import Auth from "../auth";

class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state={
            redirect: false
        };

        this.logIn=this.logIn.bind(this);
    }

    logIn(){

        console.log("login function: ", this.props.location.state);

        Auth.login(

            this.setState({
                redirect: true
            })
        );
    }

    render() {
        //if (Auth.isLoggedIn) return <Redirect to="/" />;
        console.log("props in login page: ", this.props);

        let pathname;
        if(this.props.location.state===undefined){
            pathname="/";
        }
        else{
            pathname=this.props.location.state.from.pathname;
        }

         if (this.state.redirect) return <Redirect to={pathname} />;



        return(
            <div>
                <h3>You are not logged in!</h3>
               Please Login
                <button onClick={this.logIn}>Login</button>
            </div>
        );
    }
}

export default LoginPage;
