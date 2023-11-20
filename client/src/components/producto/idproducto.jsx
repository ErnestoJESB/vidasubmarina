import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pedido from '../pedido/pedido';

const ProductoId = () => {
    const params = useParams();
    const productos = params.producto;
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/productos/${productos}`)
            .then(response => response.json())
            .then(data => {
                setProducto(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);
    return (
        <div>
            {producto.map((datas, index) => (
                <section className="blogs" id="blogs" key={index}>
                    <div className="heading">
                        {/* <span></span> */}
                        <h3>{datas.nombre}</h3>
                    </div>
                    <div className="box-container">
                        <div className="box" >
                            <div className="image">
                                <h3> <i className="fas fa-calendar"></i> {datas.nombre} </h3>
                                <img src={`../img/${datas.image}`} alt="" />
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <a href="#"> <i className="fas fa-tag"></i> Unidad / </a>
                                    <a href={'#'}> <i className="fas fa-tag"></i> {datas.unidad_medida}</a>
                                </div>
                                <h3>Descripción</h3>
                                <p>{datas.descripcion}</p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            <Pedido />  
        </div>
    )
}
export default ProductoId;