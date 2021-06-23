import { types } from "../types/types";
import { fetchToken } from "../helpers/fetch";
import Swal from "sweetalert2";

export const listadoUsuarios = () => {
    return async dispatch => {
        try {
            const resp = await fetchToken('user/getUsers');
            const body = await resp.json();

            if(body.ok) {
                dispatch({
                    type: types.userListado,
                    payload: body
                })
            }

        } catch(err) {
            console.log(err)
        }
    }
}

export const obtenerUsuarios = () => {
    return async dispatch => {
        try {
            dispatch({
                type: types.userObtenerUsuarios
            })
        } catch(err) {
            console.log(err)
        }
    }
}

export const registrarUsuario = usuario => {
    return async dispatch => {
        try {
            const resp = await fetchToken('user/new', usuario, 'POST');
            const body = await resp.json();
    
            if (body.ok) {
                dispatch({
                    type: types.userRegister,
                    payload: body.usuario
                })

                Swal.fire('Bien', body.msg, 'success')
            } else {
                const errors = body.errors;
                if (body.errors) {
                    await Swal.fire('Error', 
                    Object.values(errors)[0].msg, 
                    'error');
                } else {
                    Swal.fire('Error', body.msg, 'error');
                }
            }
        } catch(err) {
            console.log(err)
        }
    }
}

export const actualizarUsuario = usuario => {
    return async dispatch => {
        try {
            const resp = await fetchToken(`user/updateUser/${ usuario.id }`, usuario, 'PUT');
            const body = await resp.json();

            console.log(body)
    
            if (body.ok) {
                dispatch({
                    type: types.userUpdate,
                    payload: usuario
                })

                Swal.fire('Bien', body.msg, 'success')
            } else {
                const errors = body.errors;
                if (body.errors) {
                    await Swal.fire('Error', 
                    Object.values(errors)[0].msg, 
                    'error');
                } else {
                    Swal.fire('Error', body.msg, 'error');
                }
            }
        } catch(err) {
            console.log(err)
        }
    }
}

export const eliminarUsuario = usuario => {
    return async dispatch => {
        try {
            const resp = await fetchToken(`user/deleteUser/${ usuario }`, {}, 'DELETE');
            const body = await resp.json();
    
            if (body.ok) {
                dispatch({
                    type: types.userDelete,
                    payload: usuario
                })

                Swal.fire('Bien', body.msg, 'success')
            } else {
                const errors = body.errors;
                if (body.errors) {
                    await Swal.fire('Error', 
                    Object.values(errors)[0].msg, 
                    'error');
                } else {
                    Swal.fire('Error', body.msg, 'error');
                }
            }
        } catch(err) {
            console.log(err)
        }
    }
}