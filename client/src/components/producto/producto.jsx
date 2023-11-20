import React, {useEffect, useState} from 'react';
import Productos from '../cards_principal/carrousel';

const Producto = () => {
    const [producto, setproducto] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3000/producto')
            .then(response => response.json())
            .then(data => {
                setproducto(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);


    return (
        <Productos data={producto} />
    )
}

export default Producto;
