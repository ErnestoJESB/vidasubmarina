import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from '../producto/producto';
import Empresa from './empresa';

const Proveedor = () => {
    const params = useParams();
    const idproveedor = params.idproveedor;
    const [proveedor, setproveedor] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/proveedor/${idproveedor}`)
            .then(response => response.json())
            .then(data => {
                setproveedor(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div>
            <Empresa data={proveedor} />
            <Producto proveedorId={idproveedor}/>
        </div>
    )
}
export default Proveedor;