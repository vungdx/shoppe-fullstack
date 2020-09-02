import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function AuthRoute(props) {
    return (
        props.authen
            ?
            <Route exact path={props.path} component={props.component} />
            :
            <Redirect to="/signin" />
    );
}

export default AuthRoute;