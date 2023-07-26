import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrarIncidencia = ({ id, condominioUs }) => {
    const [values, setValues] = useState({
        tipo: '',
        descripcion: '',
        lugar: '',
        fecha: '',
        image: [],
        idcondominio: condominioUs,
        idusuario: id
    });
    const [error, setError] = useState(null);

    const options = [
        "Selecciona una opción",
        "Goteras",
        "Ruidos",
        "Focos",
        "Alberca",
        "Elevador",
        "Plomería",
        "Seguridad",
        "Basura",
        "Estacionamiento",
        "Jardín",
        "Humedad",
        "Ascensor",
        "Pestes",
        "Vigilancia",
        "Piscina",
        "Desperdicios",
        "Portón",
        "Pintura",
        "Juegos",
        "Iluminación",
        "Otros"
    ];

    /* ENUM('Goteras', 'Ruidos', 'Focos', 'Alberca', 'Elevador', 'Plomería', 'Seguridad', 'Basura', 'Estacionamiento', 'Jardín', 'Humedad', 'Ascensor', 'Pestes', 'Vigilancia', 'Piscina', 'Desperdicios', 'Portón', 'Pintura', 'Juegos', 'Iluminación') */

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setValues(prev => ({ ...prev, image: selectedImage }));
    };

    const navigate = useNavigate();
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('tipo', values.tipo);
        formData.append('descripcion', values.descripcion);
        formData.append('lugar', values.lugar);
        formData.append('fecha', values.fecha);
        formData.append('idcondominio', values.idcondominio);
        formData.append('idusuario', values.idusuario);
        formData.append('image', values.image);

        event.preventDefault();
        axios.post('http://localhost:3000/upload', formData)
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    navigate('/home');
                }
            })
            .catch(err => {
                // Capturamos el error y mostramos un mensaje al usuario
                console.log(err);
                setError('Ha ocurrido un error al registrar la incidencia. Por favor, inténtalo nuevamente.');
              });
    }

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>incidencia</h3>
            </div>
            <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="flex">
                    <div className="inputBox">
                        <span>Tipo de incidencia</span>
                        <select  onChange={handleInput} placeholder="Luz, agua, derrame de líquido..." className="form-control" name="tipo">
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
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
                        <span>Fecha</span>
                        <input onChange={handleInput} type="date" placeholder="Escribe la fecha" className="form-control" name="fecha" autoComplete="disable" />

                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Insertar evidencia</span>
                        <input onChange={handleImageChange} type="file" accept="image/*" placeholder="Inserte evidencia" className="form-control" name="image" autoComplete="disable" />
                    </div>
                </div>
                <input type="submit" value="Registrar" className="btn btn2" onClick={handleSubmit} />
                {error && <p className="error-message">{error}</p>}
            </form>
        </section>
    );
}

export default RegistrarIncidencia;