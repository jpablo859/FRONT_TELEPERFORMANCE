import { types } from "../types/types";

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case types.userListado:
            return {
                ...state,
                ...action.payload
            }
        case types.userRegister:
            return {
                ...state,
                ...action.payload
            }
        case types.userUpdate:
            return {
                ...state,
                response: state.response.map(user => user._id === action.payload.id ? action.payload : user)
            }
        case types.userDelete:
            return {
                ...state,
                response: state.response.filter(user => user._id !== action.payload)
            }
        case types.userEstado:
            return {
                ...state,
                response: state.response.map(user => user._id === action.payload.usuario ? { ...user, estado: action.payload.estado} : user)
            }
        case types.userObtenerUsuarios:
            return state
        default:
            return state;
    }
}