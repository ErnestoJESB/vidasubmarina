import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CrearComentario = () => {
    const params = useParams();
    const idIncidencia = params.idIncidencia;
    const idCondomino = params.idCondomino;
    const idCondominio = params.idCondominio;

    /* pon en una varible la fecha de hoy en modo date */
    const fechaHoy = new Date();
    const dia = fechaHoy.getDate();
    const mes = fechaHoy.getMonth() + 1;
    const año = fechaHoy.getFullYear();
    const fechaFinal = `${año}-${mes}-${dia}`;
    const navigate = useNavigate();

    const [values, setValues] = useState({
        comentario: '',
        fecha: fechaFinal,
        idUsuario: idCondomino,
        idCondominio: idCondominio,
        idIncidencia: idIncidencia
    });

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/comentarios', values)
        navigate(`/comentarios/${idIncidencia}/${idCondomino}`);
        window.location.reload();
    }

    return (
        <section className="order" id="order">
            <div className="heading">
                <h3>Registrar Nuevo Comentario</h3>
            </div>
            <form action="">
                <div className="flex">
                    <span>Comentario</span>
                    <input onChange={handleInput} type="text" placeholder="Ingrese comentario..." className="form-control" name="comentario" autoComplete="disabled" />
                </div>
                <input type="submit" value="Registrar" className="btn btn2" onClick={handleSubmit} />
            </form>
        </section>
    )
}

export default CrearComentario;