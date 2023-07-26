import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';


const Comentario = ({ usuarioId, condominioId }) => {
    const params = useParams();
    const idIncidencia = params.idIncidencia;

    const [comentario, setComentario] = useState([]);
    const [incidencias, setIncidencias] = useState([]);
    const [estatus, setEstatus] = useState({
        estatus: 1
    });

    function Fecha(res) {
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
    }
    useEffect(() => {
        axios.get(`http://localhost:3000/comentarios/${idIncidencia}`)
            .then(res => {
                setComentario(res.data);
                Fecha(res);
            })
    }, [idIncidencia]);

    useEffect(() => {
        axios.get(`http://localhost:3000/incidencias/${usuarioId}/${idIncidencia}`)
            .then(res => {
                setIncidencias(res.data);
                Fecha(res);
            })
            .catch(error => {
                console.log(error);
            })
    }, [usuarioId, idIncidencia]);


    const eliminarComentario = (id) => {
        axios.delete(`http://localhost:3000/comentarios/${id}`)
        window.location.reload();
    }

    const estatusComentario = (id) => {
        axios.put(`http://localhost:3000/incidencias/${id}`, estatus)
        window.location.reload();
    }


    return (
        <div>
            <section className="blogs" id="blogs">
                <div className="heading">
                    <span>Reporte</span>
                    <h3>de incidencia</h3>
                </div>

                <div className="box-container">
                    {incidencias.map((incidencia, index) => (
                        <div className="box" key={index}>
                            <div className="image">
                                <h3> <i className="fas fa-calendar"></i> {incidencia.fecha} </h3>
                                <img src={`http://localhost:3000/${incidencia.image}`} alt="" />
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <a href="#"> <i className="fas fa-tag"></i> Tipo de incidencia / </a>
                                    <a href="#"> <i className="fas fa-tag"></i> {incidencia.tipo}</a>
                                </div>
                                <h3>Descripción</h3>
                                <p>{incidencia.descripcion}</p>
                                <a href={`http://localhost:5173/incidencias/${usuarioId}`} className="btn" onClick={() => estatusComentario(incidencia.id)}>Estatus</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="order" id="order">
                <div className="heading">
                    <h3>Registrar Nuevo Comentario</h3>
                    <button className="btn" style={{ background: "#fffff" }}><a href={`http://localhost:5173/crearcomentarios/${idIncidencia}/${usuarioId}/${condominioId}`}>Crear comentario</a></button>
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