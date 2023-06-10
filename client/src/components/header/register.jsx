import React from "react";
import "./login.css"




const Register = () => {

    return (
        < div className="login-form-container" >
            <form action="">
                <h3>Registro de usuario</h3>
                <input type="email" placeholder="example@mwold.net" className="box" />
                <input type="text" placeholder="nombre" className="box" />
                <input type="text" placeholder="apellido" className="box" />
                <input type="text" placeholder="número de teléfono" className="box" />
                <input type="text" placeholder="dirección" className="box" />
                <input type="password" placeholder="contraseña" className="box" />
                <input type="password" placeholder="confirmar contraseña" className="box" />
                <input type="submit" defaultValue="Iniciar sesión" className="btn" />
                <p>
                    ¿Ya tienes una cuenta? <a href="#">Inicia sesión</a>{" "}
                </p>
            </form>
        </div >
    )
}

export default Register