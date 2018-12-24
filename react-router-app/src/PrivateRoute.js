import React from "react";
import {Route, Redirect} from "react-router-dom";
import Auth from "./auth";

const PrivateRouter = ({component: Component, ...rest}) => {
    console.log("in private route: ", rest);
    return(
        <Route
            {...rest}
            render={ (props) =>(
                Auth.isLoggedIn ? <Component {...props} /> : <Redirect to={{
                    pathname: "/login",
                    state: {
                        from: props.location
                    }
                }} />
            )}
        />
    );
};

export default PrivateRouter;
