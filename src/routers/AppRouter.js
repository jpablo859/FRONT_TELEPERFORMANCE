import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { authStartChecking } from '../actions/auth'
import { FormUserScreen } from '../components/admin/FormUserScreen'
import { ListUsersScreen } from '../components/admin/ListUsersScreen'
import { LoginScreen } from '../components/auth/LoginScreen'
import { ListScreen } from '../components/user/ListScreen'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid, role } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(authStartChecking());
    }, [dispatch]);

    if(checking) {
        return (<h4>Loading...</h4>)
    }

    return (
        <Router>
            <Switch>
                <PublicRoutes
                    exact
                    path="/login"
                    component={LoginScreen}
                    isAuth={!!uid}
                    role={role}
                />
                <PrivateRoutes
                    exact
                    path="/list-users"
                    component={ListUsersScreen}
                    isAuth={!!uid && role === 'admin'}
                    role={role}
                />
                <PrivateRoutes
                    exact
                    path="/form-user"
                    component={FormUserScreen}
                    isAuth={!!uid && role === 'admin'}
                    role={role}
                />
                <PrivateRoutes
                    exact
                    path="/form-user/:id"
                    component={FormUserScreen}
                    isAuth={!!uid && role === 'admin'}
                    role={role}
                />
                <PrivateRoutes
                    exact
                    path="/list"
                    component={ListScreen}
                    isAuth={!!uid && role === 'user'}
                    role={role}
                />
                <Redirect to="/login"/> 
            </Switch>
        </Router>
    )
}
