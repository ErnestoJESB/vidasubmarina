import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Productos from '../cards_principal/carrousel';
const Productosempresas = () => {
    const params = useParams();
    const idEmp = params.empId;
    console.log(idEmp);
    const [producto, setProductos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/empresaprod/${idEmp}`)
            .then(response => response.json())
            .then(data1 => {
                setProductos(data1);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <Productos data={producto} />
    )
}
export default Productosempresas;