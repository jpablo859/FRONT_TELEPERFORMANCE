import React, { useEffect, Fragment, useState } from 'react';
import { fetchToken } from '../../helpers/fetch';
import { Navbar } from '../ui/user/Navbar';
import { Post } from './Post';
// import { authStartLogin, authStartRegister } from '../../actions/auth';
export const ListScreen = () => {

    const [ state, setState ] = useState({});

    useEffect(() => {
        (async () => {
            const resp = await fetchToken('user/getApi');
            const body = await resp.json();

            setState(body)
        })()
    }, [])

    const { ok, response } = state;

    return (
        <Fragment>
        
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center">Listado de posts</h1>
                    <div className="col-12">
                        <table className="table table-bordered mt-3">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                { ok && response.map(post => <Post key={ post.id } values={post} />) }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}