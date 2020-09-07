import React from 'react'
import Cookies from "js-cookie";
const { Route, Redirect } = require("react-router-dom");

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest}
        render={
            props => Cookies.get('userInfo')
                ? <Component {...props} />
                : <Redirect to="/signin" />
        }
    />
)

export default ProtectedRoute;