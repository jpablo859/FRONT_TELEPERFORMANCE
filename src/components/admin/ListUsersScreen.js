import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../ui/admin/Navbar';
import { listadoUsuarios } from '../../actions/user';
import { Usuario } from './Usuario';
// import { authStartLogin, authStartRegister } from '../../actions/auth';
export const ListUsersScreen = () => {

    const dispatch = useDispatch();

    const { ok, response } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(listadoUsuarios());
    }, [])

    return (
        <Fragment>
        
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Listado de usuarios</h1>
                    <div className="col-12">
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Usuario</th>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Cargo</th>
                                    <th>Salario</th>
                                    <th>Fecha ingreso</th>
                                    <th>Estado</th>
                                    <th>Opción</th>
                                </tr>
                            </thead>
                            <tbody>
                                { ok && response.map(usuario => <Usuario key={ usuario._id } values={usuario} />) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}