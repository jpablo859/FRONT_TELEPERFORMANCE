import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authStartLogin } from '../../actions/auth';
import './login.css'

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [ state, setState ] = useState({
        user: '',
        password: ''
    }); 

    const { user, password } = state;

    const handleInputChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        dispatch(authStartLogin(user, password));
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="user"
                                value={user}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btn btn-primary w-100 mt-3"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>
              </div>
        </div>
    )
}