import React from 'react'
import { useFetch } from '../../hooks/useFetch'


export const Servicios = () => {

    const baseURL = process.env.REACT_APP_API_URL;
    const { data } = useFetch(`${baseURL}/listar`);
    // console.log(!!data && data);

    return (
        <div className="container">
            <h1 className="text-muted text-center p-2">Servicios</h1>
            {
                !!data &&
                data.map((item, index )=> (
                    <div className="row justify-content-center mt-1" key={item.id}>
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body text-center">
                                   {data[index].servicio}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
