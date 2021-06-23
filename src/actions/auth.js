import Swal from "sweetalert2";
import { fetchSinToken, fetchToken } from "../helpers/fetch";
import { types } from "../types/types";


export const authStartLogin = (user, password) => {
    return async (dispatch) => {
        const response = await fetchSinToken('user/login', { user, password }, 'POST');
        const body = await response.json();

        console.log(body)
        
        if(body.ok) {
            localStorage.setItem('token', body.token);
     
            dispatch(login(body.user))

        } else {
            Swal.fire('Error', body.msg, 'error')
        }
    }
}

export const authStartChecking = () => {
    return async (dispatch) => {
        const response = await fetchToken('user/renew');
        const body = await response.json();
        
        if(body.ok) {
            localStorage.setItem('token', body.token);

            console.log(body.user)
     
            dispatch(login(body.user))

        } else {
            dispatch(authCheckingFinish());
        }
    }
}

const authCheckingFinish = () => ({
    type: types.authCheckingFinish
})

const login = user => ({
    type: types.authLogin,
    payload: user
})

export const authStartLogout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch(logout());
    }
}

const logout = () => ({
    type: types.authLogout
})