import React from "react";
import "./login.css"


const Login = () => {
    return (
        < div className="login-form-container" >
            <form action="">
                <h3>Inicio de sesión</h3>
                <input type="email" placeholder="example@mwold.net" className="box" />
                <input type="password" placeholder="contraseña" className="box" />
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