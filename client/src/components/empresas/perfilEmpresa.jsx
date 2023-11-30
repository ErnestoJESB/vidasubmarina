import React, { useState, useEffect } from 'react';
import Perfil from './perfil';

const Perfilempresa = ({ idUser }) => {
    const userId = idUser;

    console.log(userId);
    const [empresaData, setEmpresa] = useState([]);
    const [productos, setProductos] = useState([]);
    const [idEmp, setIdEmp] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/empresa/${userId}`)
            .then(response => response.json())
            .then(data => {
                setEmpresa(data);
                setIdEmp(data[0].idempresa);
                console.log(data[0].idempresa);
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div>
            <Perfil idEmp={idEmp} empresaData={empresaData} />
        </div>
    );
}

export default Perfilempresa;
