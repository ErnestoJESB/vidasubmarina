import React from 'react';

const Producto = () => {
    let producto = [
        {
            "id": 1,
            "name": "Condominio 1",
            "address": "Calle 1",
            "description": "Descripcion 1",
            "imageName": "condominio-1.jpg"
        }
    ]
    return (
        <div>
            <section className="blogs" id="blogs">
                <div className="heading">
                    <span>Reporte</span>
                    <h3>de producto</h3>
                </div>

                <div className="box-container">
                    {productos.map((producto, index) => (
                        <div className="box" key={index}>
                            <div className="image">
                                <h3> <i className="fas fa-calendar"></i> {producto.fecha} </h3>
                                <img src={`img/${producto.image}`} alt="" />
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <a href="#"> <i className="fas fa-tag"></i> Tipo de producto / </a>
                                    <a href="#"> <i className="fas fa-tag"></i> {producto.tipo}</a>
                                </div>
                                <h3>Descripción</h3>
                                <p>{producto.descripcion}</p>
                                <a href={`#`} className="btn">Estatus</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="order" id="order">
                <div className="heading">
                    <h3>Registrar Nuevo Comentario</h3>
                    <button className="btn" style={{ background: "#fffff" }}><a href={`#`}>Crear comentario</a></button>
                </div>
            </section>
            <section>
                <div className="order">
                    <div className="col-md-7">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>n°</th>
                                    <th>Comentario</th>
                                    <th>Fecha</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comentario.map((comentario, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{comentario.comentario}</td>
                                            <td>{comentario.fecha}</td>
                                            <td><button className="btn btn-danger">Eliminar</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Producto;
