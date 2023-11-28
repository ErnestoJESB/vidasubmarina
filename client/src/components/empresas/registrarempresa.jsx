import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Validation from "./Registervalidation";

const Registrarempresa = ({ userId }) => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        empresa: '',
        phone: '',
        email: '',
        address: '',
        image: [],
        user_id: userId
    });
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});


    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setValues(prev => ({ ...prev, image: selectedImage }));
    };
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('empresa', values.empresa);
        formData.append('phone', values.phone);
        formData.append('email', values.email);
        formData.append('address', values.address);
        formData.append('image', values.image);
        formData.append('user_id', values.user_id);
        event.preventDefault();
        axios.post('http://localhost:3000/addempresa', formData)
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
            navigate('/');

    }

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>Empresa</h3>
            </div>
            <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="flex">
                    <div className="inputBox">
                        <span>empresa</span>
                        <input onChange={handleInput} type="text" placeholder="Explique a detalle..." className="form-control" name="empresa" autoComplete="disable" />
                        {errors.empresa && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.empresa}</span>}
                    </div>
                    <div className="inputBox">
                        <span>address</span>
                        <input onChange={handleInput} type="text" placeholder="Explique a detalle..." className="form-control" name="address" autoComplete="disable" />
                        {errors.address && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.address}</span>}
                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>phone</span>
                        <input onChange={handleInput} type="text" placeholder="Ubicación" className="form-control" name="phone" autoComplete="disable" />
                        {errors.phone && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.phone}</span>}
                    </div>
                    <div className="inputBox">
                        <span>email</span>
                        <input onChange={handleInput} type="text" placeholder="Ubicación" className="form-control" name="email" autoComplete="disable" />
                        {errors.email && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.email}</span>}
                    </div>
                </div>
                <div className="flex">
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

export default Registrarempresa;