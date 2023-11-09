import React from 'react';

const Producto = () => {
    let producto = [
        {
            "id": 1,
            "name": "Tilapia",
            "address": "Calzada Morelos, 1, 54740 Cuautitlán Izcalli, Méx.",
            "description": "Este pescado se genera",
            "imageName": "tilapia.jpg",
            "fecha": "2021-09-01",
            "tipo": "Pescado"
        }
    ]

    let comentario = [
        {
            "id": 1,
            "comentario": "Este pescado está fresco",
            "fecha": "2021-09-01",
            "estatus": 1,
            "incidenciaId": 1,
            "usuarioId": 1
        },
        {
            "id": 2,
            "comentario": "Este pescado está fresco",
            "fecha": "2021-09-01",
            "estatus": 1,
            "incidenciaId": 1,
            "usuarioId": 1
        }
    ]


    return (
        <div>
            {producto.map((productos, index) => (
                <section className="blogs" id="blogs" key={index}>
                    <div className="heading">
                        <span>Reporte</span>
                        <h3>{productos.name}</h3>
                    </div>

                    <div className="box-container">

                        <div className="box" >
                            <div className="image">
                                <h3> <i className="fas fa-calendar"></i> {productos.fecha} </h3>
                                <img src={`img/${productos.imageName}`} alt="" />
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <a href="#"> <i className="fas fa-tag"></i> Tipo de productos / </a>
                                    <a href="#"> <i className="fas fa-tag"></i> {productos.tipo}</a>
                                </div>
                                <h3>Dirección</h3>
                                <p>{productos.address}</p>
                                <h3>Descripción</h3>
                                <p>{productos.description}</p>
                                <a href={`#`} className="btn">Estatus</a>
                            </div>
                        </div>

                    </div>
                </section>
            ))}

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
                                            <td><button className="btn btn-danger" >Eliminar</button></td>
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
