import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


const Comentario = ({ id, condominioUs }) => {
    const params = useParams();
    const { idIncidencia } = params;
    const [comentario, setComentario] = useState([]);
    const [incidencias, setIncidencias] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/comentarios/${idIncidencia}`)
            .then(res => {
                setComentario(res.data);
            })
    }, [idIncidencia]);

    useEffect(() => {
        axios.get(`http://localhost:3000/incidencias/${id}/${idIncidencia}`)
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
    }, [id, idIncidencia]);
    return (
        <div>
            <section className="order" id="order">
                <div className="heading">
                    
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
                                            <td><button className="btn btn-danger" onClick={() => eliminarComentario(comentario.id)}>Eliminar</button></td>
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

export default Comentario;