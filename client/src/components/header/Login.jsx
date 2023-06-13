import React, {useState} from "react";
import "./login.css"
import Validation from "./LoginValidation";
/* hay algo el login que no me deja ver cosas en el navegador */
const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

    }
    
    return (
        < div className="login-form-container" >
            <form onSubmit={handleSubmit}>
                <h3>Inicio de sesión</h3>
                <input type="email" placeholder="example@mwold.net" className="box" onChange={handleInput} name="email"/>
                {errors.email && <span className="error">{errors.email}</span>}
                <input type="password" placeholder="contraseña" className="box" onChange={handleInput} name="password"/>
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
        </div >
    )
}

export default Login