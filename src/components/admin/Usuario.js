import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { dateYMD } from '../../helpers/dateFormat';
import Swal from 'sweetalert2';
import { eliminarUsuario, estadoUsuario } from '../../actions/user';

export const Usuario = ({values: {_id, user, nombre, apellido, cargo, salario, fechaIngreso, estado}}) => {

    let btnEstado;

    if (estado === 'Activo') {
        btnEstado = 'Inactivar'
    } else {
        btnEstado = 'Activar';
    }

    const dispatch = useDispatch();

    const fnEliminarUsuario = () => {
        Swal.fire({
            title: 'Desea eliminar el usuario?',
            text: "No habrá marcha atrás una vez ejecutada esta acción!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result) {   
                dispatch(eliminarUsuario(_id))
            }
        })
    }

    const fnEstadoUsuario = () => {
        dispatch(estadoUsuario(_id, estado));
    }

    return (
        <tr>
            <td>{ user }</td>
            <td>{ nombre }</td>
            <td>{ apellido }</td>
            <td>{ cargo }</td>
            <td>{ salario }</td>
            <td>{ dateYMD(fechaIngreso) }</td>
            <td>{ estado }</td>
            <td>
                <Link
                    className="btn btn-warning btn-sm me-1"
                    to={`/form-user/${_id}`}
                >
                    Editar
                </Link>
                <button 
                    className="btn btn-danger btn-sm me-1"
                    onClick={fnEliminarUsuario}
                >
                    Eliminar
                </button>
                <button 
                    className="btn btn-info btn-sm"
                    onClick={fnEstadoUsuario}
                >
                    { btnEstado }
                </button>
            </td>
        </tr>
    )
}
