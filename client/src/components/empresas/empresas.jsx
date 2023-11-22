import React, {useState, useEffect } from 'react';
import Empresas from './cards_principal/carrousel';

const Empresas1 = () => {

    const [empresas, setempresas] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/empresas')
            .then(response => response.json())
            .then(data => {
                setempresas(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <div>
            <Empresas data={empresas} />
        </div>
    )
}   

export default Empresas1;