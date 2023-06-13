import React from "react";
import "./login.css"
import Validation from "./RegisterValidation";

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
    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: event.target.value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

    }
    return (
        < div className="login-form-container active" >
            <form action="" onSubmit={handleInput}>
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
                    ¿Ya tienes una cuenta? <a href="http://localhost:5173/">Inicia sesión</a>{" "}
                </p>
            </form>
        </div >
    )
}

export default Register