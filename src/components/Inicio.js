import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';

import { Registros } from './Registros'


export const Inicio = () => {

    const [search, setSearch] = useState('');

    const inputChange = (e) => {
        setSearch(e.target.value);
    }

    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}?buscar=${search}`);
    const registros = !!data && data.data;
    // console.log(data)

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <input
                        type="search"
                        value={search}
                        onChange={inputChange}
                        className="form-control"
                        placeholder="&#128269;"
                    />
                </div>
            </div>
            <div className="row mt-4">

                {
                    !!data ?
                        registros.map(item => (
                            <div className="col-md-4 mb-4" key={item.id}>
                                <Registros name={item.name} email={item.email} area={item.area_id} />
                            </div>
                        ))
                        :
                        <Loading />
                }
            </div>
        </div>
    )
}
