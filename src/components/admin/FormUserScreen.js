import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Navbar } from '../ui/admin/Navbar';
import { Redirect } from 'react-router-dom'
import { registrarUsuario, actualizarUsuario } from '../../actions/user';
import { dateYMD } from '../../helpers/dateFormat';
// import { authStartLogin, authStartRegister } from '../../actions/auth';
export const FormUserScreen = () => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        user: '',
        password: '',
        nombre: '', 
        apellido: '', 
        cargo: '', 
        salario: '', 
        fechaIngreso: dateYMD(new Date()),
    })
    
    const { id } = useParams();
    const { response } = useSelector(state => state.user);

    useEffect(() => {
        console.log(!response)
        if (!response) return <Redirect to="/list-users"/>

        const filter = response.find(usuario => usuario._id === id);
        if (!filter) return <Redirect to="/list-users"/>
        console.log(filter)
        setState({
            ...state,
            ...filter,
            password: '*****',
            fechaIngreso: dateYMD(filter.fechaIngreso),
            id,
        })
    }, [id])

    const {user, nombre, password, apellido, cargo, salario, fechaIngreso} = state;

    const handleInputChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const fnRegistrarUsuario = () => {
        dispatch(registrarUsuario(state));
    }
    
    const fnActualizarUsuario = () => {
        dispatch(actualizarUsuario(state));
    }

    return (
        <Fragment>
            <Navbar/>
            <div className="container">
                <div className="row shadow-lg pt-2 pb-5 px-5 mt-4">
                    { !id ? <h1 className="text-center mb-4">Formulario de registro</h1> : <h1 className="text-center mb-4">Editar usuario</h1>}
                    <div className="col-6">
                        <label>Usuario</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="user"
                            value={user}
                            disabled={!!id}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-6">
                        <label>Contraseña</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="password"
                            value={password}
                            disabled={!!id}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        <label>Nombre</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        <label>Apellido</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="apellido"
                            value={apellido}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        <label>Cargo</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="cargo"
                            value={cargo}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        <label>Salario</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="salario"
                            value={salario}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        <label>Fecha ingreso</label>
                        <input 
                            type="text"
                            className="form-control"
                            name="fechaIngreso"
                            value={fechaIngreso}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-4">
                        { !id ? 
                            <button 
                                className="btn btn-success mt-4 w-100"
                                onClick={ fnRegistrarUsuario }
                            >
                                Registrar Usuario
                            </button> : 
                            <button 
                                className="btn btn-warning mt-4 w-100"
                                onClick={ fnActualizarUsuario }
                            >
                                Actualizar Usuario
                            </button>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
