import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "../../carrousel/pagination";

const Condomino = ({ userName, userId }) => {
    const [incidencias, setIncidencias] = useState([]);

    /* Start Pagination */
    const totalCondominios = incidencias.length;
    const [condominiosPerPage, setCodominiosPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCondominio = currentPage * condominiosPerPage;
    const indexOfFirstCondominio = indexOfLastCondominio - condominiosPerPage;



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
            <div className="box-container">
                <div className="wrapper">
                    <div className="cols">
                        {incidencias.map((incidencia, index) => (
                            <div className="card" key={index}>
                                <div className="card-image">
                                    <img src="img/condominio-1.jpg" alt="" />
                                </div>
                                <p className="card-title">Incidencia {index + 1}</p>
                                <p className="card-subtitle">{incidencia.tipo}</p>
                                <p className="card-subtitle">{incidencia.lugar}</p>
                                <p className="card-body">
                                    {incidencia.descripcion}
                                </p>
                                <p className="foote">Written by <span className="by-name">John Doe</span> el <span className="date">{incidencia.fecha}</span></p>
                                <div className="centrar">
                                    <a href="/deleteCondominio/${condominio._id}"
                                        className="btn btn-danger">Delete</a>
                                    <a href="/updateCondominio/{}" className="btn btn-info">Edit</a>
                                </div>
                            </div>
                        )).slice(indexOfFirstCondominio, indexOfLastCondominio)}
                    </div>
                </div>
            </div>
            <Pagination
                condominiosPerPage={condominiosPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalCondominios={totalCondominios}
            />
        </section>
    );
}

export default Condomino;