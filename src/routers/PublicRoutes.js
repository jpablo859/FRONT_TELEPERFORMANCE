import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoutes = ({isAuth, role, component: Component, ...rest}) => {
    console.log(role)
    return (
        <Route
            {...rest}
            component={props => 
                !isAuth
                    ? <Component {...props} />
                    : role === 'admin' ? <Redirect to="/list-users"/> : <Redirect to='/list' />
            }
        />
    )
}

PublicRoutes.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}