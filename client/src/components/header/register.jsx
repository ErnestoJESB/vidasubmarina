import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css"
import Validation from "./RegisterValidation";
import axios from "axios";

const Register = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        name: '',
        lastname: '',
        phone: '',
        address: '',
        password2: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email ==="" && errors.password ==="" && errors.name ==="" && errors.lastname ==="" && errors.phone ==="" && errors.address ==="" && errors.password2 ===""){
            axios.post('http://localhost:3000/register', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>Usuario</h3>
            </div>
            <form action="" onSubmit={handleInput} >
                <div className="flex">
                    <div className="inputBox">
                        <span>Correo electrónico</span>
                        <input type="email" placeholder="example@mwold.net" className="form-control" name="email" onChange={handleInput} autoComplete="disabled" />
                        {errors.email && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.email}</span>}
                </div>
                <div className="inputBox">
                    <span>Nombre</span>
                    <input type="text" placeholder="nombre" className="form-control" name="name" onChange={handleInput} autoComplete="disable" />
                    {errors.name && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.name}</span>}
                </div>
            </div>
            <div className="flex">
                <div className="inputBox">
                    <span>Apellido</span>
                    <input type="text" placeholder="apellido" className="form-control" name="lastname" onChange={handleInput} autoComplete="disable" />
                    {errors.lastname && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.lastname}</span>}
                </div>
                <div className="inputBox">
                    <span>Número de teléfono</span>
                    <input type="number" placeholder="número de teléfono" className="form-control" name="phone" onChange={handleInput} autoComplete="disable" />
                    {errors.phone && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.phone}</span>}
                </div>
            </div>
            <div className="flex">
                <div className="inputBox">
                    <span>Dirección</span>
                    <input type="text" placeholder="dirección" className="form-control" name="address" onChange={handleInput} autoComplete="disable" />
                    {errors.address && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.address}</span>}
                </div>
                <div className="inputBox">
                    <span>Contraseña</span>
                    <input type="password" placeholder="contraseña" className="form-control" name="password" onChange={handleInput} autoComplete="disable" />
                    {errors.password && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.password}</span>}
                </div>
            </div>
            <div className="flex">
                <div className="inputBox">
                    <span>Confirmar contraseña</span>
                    <input type="password" placeholder="confirmar contraseña" className="form-control" name="password2" onChange={handleInput} autoComplete="disable" />
                    {errors.password2 && <span style={{ fontSize: '1.4rem', color: 'red' }}>{errors.password2}</span>}
                </div>
            </div>
            <input type="submit" value="Registrar" className="btn btn2" onClick={handleSubmit} />
            <p>
                ¿Ya tienes una cuenta? <a href="http://localhost:5173/login">Inicia sesión</a>{" "}
            </p>
        </form>

        </section >
    )
}

export default Register