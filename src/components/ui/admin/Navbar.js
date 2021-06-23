import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { authStartLogout } from '../../../actions/auth';
import { Link } from "react-router-dom";

export const Navbar = () => {

    const { user } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authStartLogout());
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Hola { user }</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/list-users">Listado de usuarios</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/form-user">Nuevo usuario</Link>
                </li>
                
                </ul>
                <button 
                    className="btn btn-outline-danger me-5"
                    onClick={handleLogout}
                >
                    <span> Salir</span>
                </button>
            </div>
        </div>
      </nav>
    )
}
