import React, { useState, useEffect } from "react";
import axios from "axios";


const Condomino = ({ userName, userId }) => {
    const [incidencias, setIncidencias] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3000/incidencias/${userId}`)
            .then(res => {
                setIncidencias(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId])

    console.log(incidencias);

    return (

        <section className="order" id="order">
            <div className="heading">
                <span>Bienvenido</span>
                <h3>{userName}</h3>
                <h3>{userId}</h3>
            </div>
            <div>
                <section className="category">
                    <a href="http://localhost:5173/crearincidencia" className="box">
                        <img src="img/condominio-1.jpg" alt="" />
                        <h3>Crear incidencia</h3>
                    </a>
                    <a href="#" className="box">
                        <img src="img/alberca.png" alt="" />
                        <h3>Editar incidencia</h3>
                    </a>
                </section>
            </div>
            <div>
                <section>
                    <div className="order">
                        <div className="listar">
                            {
                                incidencias.map((incidencia, index) => (
                                    <div class="card" key={index}>
                                        <div class="card-image">
                                            <img src="img/condominio-1.jpg" alt="" />
                                        </div>
                                        <p class="card-title">Incidencia {index + 1}</p>
                                        <p class="card-subtitle">{incidencia.tipo}</p>
                                        <p class="card-subtitle">{incidencia.imagen}</p>
                                        <p class="card-body">
                                            {incidencia.descripcion}
                                        </p>
                                        <p class="foote">Written by <span class="by-name">John Doe</span> el <span class="date">{incidencia.fecha}</span></p>
                                        <div class="centrar">
                                            <a href="/deleteCondominio/${condominio._id}"
                                                class="btn btn-danger">Delete</a>
                                            <a href="/updateCondominio/{}" class="btn btn-info">Edit</a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </section>
            </div>

        </section>


    );
}

export default Condomino;