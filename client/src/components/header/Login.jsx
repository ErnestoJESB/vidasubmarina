import React, { useState, useEffect } from "react";
import "./login.css"
import Validation from "./LoginValidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    let reloadEjecutado = false;

    function recargarPaginaUnaVez() {
        if (!reloadEjecutado) {
          reloadEjecutado = true;
          navigate("/cliente");
          location.reload();
        }
      }

    axios.defaults.withCredentials = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
            axios.post("http://localhost:3000/login", values)
                .then(res => {
                    if (res.data.Login) {
                        recargarPaginaUnaVez();
                    } else {
                        alert(values);
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    return (
        < div className="login-form-container active" >
            <div className="login-form-content">
                <form onSubmit={handleSubmit}>
                    <h3>Inicio de sesión</h3>
                    <input type="email" placeholder="example@mwold.net" className="box" onChange={handleInput} name="email" />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <input type="password" placeholder="contraseña" className="box" onChange={handleInput} name="password" />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <div className="remember">
                        <input type="checkbox" name="" id="remember-me" />
                        <label htmlFor="remember-me">recuérdame</label>
                    </div>
                    <input type="submit" defaultValue="Iniciar sesión" className="btn" />
                    <p>
                        ¿Olvidaste tu contraseña? <a href="#">Presiona aquí</a>{" "}
                    </p>
                    <p>
                        ¿No tienes una cuenta? <a href="http://localhost:5173/register">Crea uno</a>{" "}
                    </p>
                </form>
            </div>
        </div >
    )
}

export default Login