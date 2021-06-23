import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { authStartChecking } from '../actions/auth'
import { ListUsersScreen } from '../components/admin/ListUsersScreen'
import { LoginScreen } from '../components/auth/LoginScreen'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const {checking, uid} = useSelector(state => state.auth);

    return (
        <Router>
            <Switch>
                <PublicRoutes
                    exact
                    path="/login"
                    component={LoginScreen}
                    isAuth={!!uid}
                />
                <PrivateRoutes
                    exact
                    path="/calendar"
                    component={ListUsersScreen}
                    isAuth={!!uid}
                />
                <Redirect to="/login"/> 
            </Switch>
        </Router>
    )
}
