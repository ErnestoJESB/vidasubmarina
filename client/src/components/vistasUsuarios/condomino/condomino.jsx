import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "../../carrousel/pagination";

const Condomino = ({ userName, userId }) => {
    const [incidencias, setIncidencias] = useState([]);

    /* Start Pagination */
    const totalCondominios = incidencias.length;
    const [condominiosPerPage, setCodominiosPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    const [comentarios, setComentarios] = useState(0);

    const indexOfLastCondominio = currentPage * condominiosPerPage;
    const indexOfFirstCondominio = indexOfLastCondominio - condominiosPerPage;

    const setcomentarios = incidencias.slice(indexOfFirstCondominio, indexOfLastCondominio);

    useEffect(() => {
        axios.get(`http://localhost:3000/incidencias/${userId}`)
            .then(res => {
                setIncidencias(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId]);

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Bienvenido</span>
                <h3>{userName}</h3>
                <h3>{userId}</h3>
            </div>
            <section className="category">
                <a href="http://localhost:5173/crearincidencia" className="box">
                    <img src="img/condominio-1.jpg" alt="" />
                    <h3>Crear incidencia</h3>
                </a>
                <a href="#" className="box">
                    <img src="img/alberca.png" alt="" />
                    <h3>Avisos</h3>
                </a>
            </section>
            <div className="wrapper">
                <div className="cols">
                    {incidencias.map((incidencia, index) => (
                        <div className="card" key={index}>
                            <div className="card-inner">
                                <div className="card-front" style={{ backgroundImage: 'url(img/condominio-1.jpg)' }}>
                                    <p>Incidencia {index + 1}</p>
                                </div>
                                <div className="card-back">
                                    <div className="card1">
                                        <div className="m-10">
                                            <p>Incidencia</p>
                                            <p>{incidencia.tipo}</p>
                                            <p>{incidencia.lugar}</p>
                                            <p>{incidencia.descripcion}</p>
                                            <p>Comentarios<span className="by-name"></span> {comentarios} <span className="date">{incidencia.fecha}</span></p>
                                        </div>
                                        <div className="centrar">
                                            <a href="/deleteCondominio/${condominio._id}"
                                                className="btn">Delete</a>
                                            <a href="/updateCondominio/{}" className="btn">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )).slice(indexOfFirstCondominio, indexOfLastCondominio)}
                </div>
                <Pagination
                    condominiosPerPage={condominiosPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalCondominios={totalCondominios}
                />
            </div>





        </section>
    );
}

export default Condomino;