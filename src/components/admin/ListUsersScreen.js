import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
// import { authStartLogin, authStartRegister } from '../../actions/auth';
export const ListUsersScreen = () => {

    const dispatch = useDispatch();


    return (
        <div className="container login-container">
            <div className="row">
                <h1>Bienvenido</h1>
            </div>
        </div>
    )
}