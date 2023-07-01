import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const RegistrarIncidencia = ({ id, condominioUs }) => {
    const [values, setValues] = useState({
        tipo: '',
        descripcion: '',
        lugar: '',
        fecha: '',
        image: '',
        idcondominio: condominioUs,
        idusuario: id
    });
    console.log(values);
    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/incidencias', values)
            .then(res => {
                navigate('/home'); 
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>incidencia</h3>
            </div>
            <form action="" method="post" encType="multipart/form-data">
                <div className="flex">
                    <div className="inputBox">
                        <span>Tipo de incidencia</span>
                        <input onChange={handleInput} type="text" placeholder="Luz, agua, derrame de líquido..." className="form-control" name="tipo" autoComplete="disabled" />

                    </div>
                    <div className="inputBox">
                        <span>Descripción</span>
                        <input onChange={handleInput} type="text" placeholder="Explique a detalle..." className="form-control" name="descripcion" autoComplete="disable" />

                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Lugar</span>
                        <input onChange={handleInput} type="text" placeholder="Ubicación" className="form-control" name="lugar" autoComplete="disable" />

                    </div>
                    <div className="inputBox">
                        <span>Fecha y hora</span>
                        <input onChange={handleInput} type="datetime-local" placeholder="número de teléfono" className="form-control" name="fecha" autoComplete="disable" />

                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Insertar evidencia</span>
                        <input onChange={handleInput} type="file" placeholder="Inserte evidencia" className="form-control" name="image" autoComplete="disable" />
                    </div>
                </div>
                <input onClick={handleSubmit} type="submit" value="Registrar" className="btn btn2" />
            </form>
        </section>
    );
}

export default RegistrarIncidencia;