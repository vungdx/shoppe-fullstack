import React from 'react'
import Cookies from "js-cookie";
const { Route, Redirect } = require("react-router-dom");

const AdminRoute = ({ component: Component, isAdmin, ...rest }) => (
    <Route {...rest}
        render={
            props => Cookies.get('userInfo') && isAdmin
                ? <Component {...props} />
                : <Redirect to="/" />
        }
    />
)

export default AdminRoute;