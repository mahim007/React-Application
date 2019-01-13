import React from "react";
import Admin from "./Admin";
import User from "./User";

import { Route, Switch, Link } from "react-router-dom";


class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        this.myRef = React.createRef();
    }

    changeHandler(e) {
        let title = e.target.value;
        this.setState({
            title
        });
    }

    clickHandler() {
        let title = this.state.title;
    
        this.myRef.current.value = "";
        this.myRef.current.style.backgroundColor = "blue";
        this.myRef.current.autoFocus = true;


        this.setState({
            title: ""
        });

    }

    render() {
        return (
            <div>
                <h1>This is Contact</h1>
                <div>
                <Admin
                    ref={this.myRef}
                    clickHandler={this.clickHandler}
                />
                    <div>
                        {/* <form>
                            <input type="text" value={this.state.title} onChange={this.changeHandler} />
                        </form> */}
                        <button
                            onClick={this.clickHandler}
                        >Click</button>
                    </div>
                </div>
                {/* <div>
                    <Link to="/contact/admin">Admin</Link>{" "}
                    <Link to="/user/:id">User</Link>{" "}
                </div>
                <Switch>
                    <Route path="/contact/admin" component={Admin} />
                    <Route path="/user/:id" component={User} />
                </Switch> */}

            </div>
        );
    }
};

export default Contact;