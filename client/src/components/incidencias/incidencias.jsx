import React, { useEffect, useState } from "react";
import { Pagination } from "../carrousel/pagination";
import axios from "axios";

const Incidencias = ({ condominoId }) => {
    /* Este es el id del condominio */
    const idCondomino = condominoId;
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
        axios.get(`http://localhost:3000/incidencias/${idCondomino}`)
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
    }, [idCondomino]);


    for (let i = 0; i < incidencias.length; i++) {
        idIncidencia[i] = incidencias[i].id;
    }

    /* Crea una funcion que si la incidencia está en 0 que el nombre de la clase sea "front pendiente" y si dice 1 signifique que está resuelta y que la clase se ponga como "front resuelta" */
    let front = "";
    function asignarClase(estatus) {
        if (estatus === 0) {
            front = "front pendiente";
        } else if (estatus === 1) {
            front = "front resuelta";
        } else {
            front = "";
        }
    }
    return (
        <div>
            <div className="heading">
                <span>Reportes</span>
                <h3>de incidencias</h3>
                <div className="centrar">
                    <h5 className="resuelta">Resuelta</h5>
                    <h6 className="pediente">Pendiente</h6>
                </div>
            </div>
            <div className="wrapper">
                <div className="cols">
                    {incidencias.map((incidencia, index) => (
                        <div className="col" key={index}>
                            <div className="container">
                            {asignarClase(incidencia.estatus)}
                                <div className={front} style={{ backgroundImage: `url(http://localhost:3000/${incidencia.image})` }}>
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

                                        <a href={`/comentarios/${idIncidencia[index]}/${idCondomino}`} className="btn">Comentarios</a>
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
        </div>

    )
}

export default Incidencias;