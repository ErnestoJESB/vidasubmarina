import React, {useState} from "react";
import "./login.css"
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:3000/login", { email, password})
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        < div className="login-form-container" >
            <form onSubmit={handleSubmit}>
                <h3>Inicio de sesión</h3>
                <input type="email" placeholder="example@mwold.net" className="box" onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="contraseña" className="box" onChange={e => setPassword(e.target.value)} />
                <div className="remember">
                    <input type="checkbox" name="" id="remember-me" />
                    <label htmlFor="remember-me">recuérdame</label>
                </div>
                <input type="submit" defaultValue="Iniciar sesión" className="btn" />
                <p>
                    ¿Olvidaste tu contraseña? <a href="#">Presiona aquí</a>{" "}
                </p>
                <p>
                    ¿No tienes una cuenta? <a href="#">Crea uno</a>{" "}
                </p>
            </form>
        </div >
    )
}

export default Login