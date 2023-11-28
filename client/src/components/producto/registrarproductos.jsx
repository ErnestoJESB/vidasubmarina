import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Validation from "./Registervalidation";

const RegistrarProducto = () => {
    const params = useParams();
    const empresaid = params.idempresa;
    const navigate = useNavigate();
    const [values, setValues] = useState({
        nombre: '',
        cantidad: '',
        precio: '',
        unidad: '',
        descripcion: '',
        image: [],
        empresa: empresaid
    });
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});


    const unidadMedida = [
        "Selecciona una opción",
        "Kg",
        "g",
        "lata",
        "botella",
        "pieza",
        "caja",
        "bolsa",
        "bulto",
        "rollo",
        "metro",
        "litro",
        "galón",
        "tonelada",
        "otro"
    ];

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setValues(prev => ({ ...prev, image: selectedImage }));
    };
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('nombre', values.nombre);
        formData.append('cantidad', values.cantidad);
        formData.append('precio', values.precio);
        formData.append('unidad_medida', values.unidad);
        formData.append('image', values.image);
        formData.append('descripcion', values.descripcion);
        formData.append('idempresa', values.empresa);
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.nombre === "" && errors.cantidad === "" && errors.precio === "" && errors.unidad === "" && errors.descripcion === "") {
            axios.post('http://localhost:3000/addproducto', formData)
                .then(res => {
                    if (res.data) {
                        console.log(res.data);
                    }
                })
                .catch(err => {
                    // Capturamos el error y mostramos un mensaje al usuario
                    console.log(err);
                    setError('Ha ocurrido un error al registrar el producto. Por favor, inténtalo nuevamente.');
                });
            navigate(`/miempresa`);
        }
    }

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>Producto</h3>
            </div>
            <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="flex">
                    <div className="inputBox">
                        <span>Unidad de medida</span>
                        <select onChange={handleInput} placeholder="Kg, g, lata, botella..." className="form-control" name="unidad">
                            {unidadMedida.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {errors.unidad && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.unidad}</span>}
                    </div>
                    <div className="inputBox">
                        <span>Nombre</span>
                        <input onChange={handleInput} type="text" placeholder="Explique a detalle..." className="form-control" name="nombre" autoComplete="disable" />
                        {errors.nombre && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.nombre}</span>}
                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Cantidad</span>
                        <input onChange={handleInput} type="text" placeholder="Ubicación" className="form-control" name="cantidad" autoComplete="disable" />
                        {errors.cantidad && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.cantidad}</span>}
                    </div>
                    <div className="inputBox">
                        <span>Descripción del producto</span>
                        <input onChange={handleInput} type="text" placeholder="Ubicación" className="form-control" name="descripcion" autoComplete="disable" />
                        {errors.descripcion && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.descripcion}</span>}
                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Precio</span>
                        <input onChange={handleInput} type="text" placeholder="Ubicación" className="form-control" name="precio" autoComplete="disable" />
                        {errors.precio && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.precio}</span>}
                    </div>
                    <div className="inputBox">
                        <span>Imagen del producto</span>
                        <input onChange={handleImageChange} type="file" accept="image/*" placeholder="Inserte evidencia" className="form-control" name="image" autoComplete="disable" />
                        {errors.image && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.image}</span>}
                    </div>
                </div>
                <input type="submit" value="Registrar" className="btn btn2" onClick={handleSubmit} />
                {error && <p className="error-message">{error}</p>}
            </form>
        </section>
    );
}

export default RegistrarProducto;