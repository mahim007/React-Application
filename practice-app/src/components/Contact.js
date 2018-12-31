import React from "react";
import Admin from "./Admin";
import User from "./User";

import {Route, Switch, Link} from "react-router-dom";


const Contact = () => {
    return(
        <div>
            <h1>This is Contact</h1>
            <div>
                <Link to="/contact/admin">Admin</Link>{" "}
                <Link to="/user/:id">User</Link>{" "}
            </div>
            <Switch>
            <Route path="/contact/admin" component={Admin} />
            <Route path="/user/:id" component={User} />
            </Switch>
        </div>
    );
};

export default Contact;