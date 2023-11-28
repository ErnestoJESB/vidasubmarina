import React, { useState, useEffect } from 'react';
import Empresa from './empresa';
import Producto from '../producto/producto';
import Productos from '../cards_principal/carrousel';

const Perfilempresa = ({ idUser }) => {
    const [empresaData, setEmpresa] = useState([]);
    const [productos, setProductos] = useState([]);
    const [idEmp, setIdEmp] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/empresa/${idUser}`)
            .then(response => response.json())
            .then(data => {
                setEmpresa(data);
                setIdEmp(data[0].idempresa);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <Empresa data={empresaData} />
            <section className="category">
                <a href={`http://localhost:5173/registrarproducto/${idEmp}`} className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-plus" width="56" height="56" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
                    <h3>Registrar producto</h3>
                </a>
                <a href={`http://localhost:5173/productosemp/${idEmp}`} className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-alert-circle" width="56" height="56" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                        <path d="M12 8v4" />
                        <path d="M12 16h.01" />
                    </svg>
                    <h3>Ver productos</h3>
                </a>
            </section>
        </div>
    );
}

export default Perfilempresa;
