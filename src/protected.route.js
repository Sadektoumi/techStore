import React from 'react'
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem("token")
    console.log("isAuth",isAuthenticated)
    return (
        <Route
            {...rest}
            render={props => {
                if (!isAuthenticated) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    )
}