import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination } from "../../carrousel/pagination";

const Condomino = ({ userName, userId }) => {
    const [incidencias, setIncidencias] = useState([]);

    const [idIncidencia, setIdIncidencia] = useState([[]]);
    /* Start Pagination */
    const totalCondominios = incidencias.length;
    const [condominiosPerPage, setCodominiosPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCondominio = currentPage * condominiosPerPage;
    const indexOfFirstCondominio = indexOfLastCondominio - condominiosPerPage;

    const setcomentarios = incidencias.slice(indexOfFirstCondominio, indexOfLastCondominio);

    useEffect(() => {
        axios.get(`http://localhost:3000/incidencias/${userId}`)
            .then(res => {
                setIncidencias(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    let fecha1 = res.data[i].fecha;
                    let fecha = new Date(res.data[i].fecha);
                    if (fecha1 === null) {
                        res.data[i].fecha = "";
                    } else {

                        let dia = fecha.getDate();
                        let mes = fecha.getMonth() + 1;
                        let año = fecha.getFullYear();
                        let fechaFinal = `${dia}/${mes}/${año}`;
                        res.data[i].fecha = fechaFinal;
                    }
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [userId]);

    for(let i = 0; i < incidencias.length; i++){
        idIncidencia[i] = incidencias[i].id;
    }

    console.log(idIncidencia);
    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Bienvenido</span>
                <h3>{userName}</h3>
            </div>
            <section className="category">
                <a href="http://localhost:5173/crearincidencia" className="box">
                    <img src="img/condominio-1.jpg" alt="" />
                    <h3>Crear incidencia</h3>
                </a>
                <a href="#" className="box">
                    <img src="img/condominio-1.jpg" alt="" />
                    <h3>Avisos</h3>
                </a>
            </section>
            <div className="wrapper">
                <div className="cols">
                    {incidencias.map((incidencia, index) => (
                        <div className="col" key={index}>
                            <div className="container">
                                <div className="front" style={{backgroundImage: `url(http://localhost:3000/${incidencia.image})`}}>
                                    <div className="inner">
                                        <p>Incidencia {index + 1}</p>
                                        <span>{incidencia.fecha}</span>
                                    </div>

                                </div>
                                <div className="back">
                                    <div className="inner">
                                        <h4>Tipo de incidencia</h4>
                                        <p>{incidencia.tipo}</p>
                                        <h4>Lugar</h4>
                                        <p>{incidencia.lugar}</p>
                                        <h4>Descripción del problema</h4>
                                        <p>{incidencia.descripcion}</p>

                                        <a href={`/comentarios/${idIncidencia[index]}`} className="btn">Comentarios</a>
                                        <a href="/updateCondominio/{}" className="btn">Edit</a>
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