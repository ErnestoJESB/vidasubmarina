import React, {useState} from "react";
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
        <div className="login-form-container active" >
            <form action="" onSubmit={handleInput}>
                <h3>Registro de usuario</h3>
                <input type="email" placeholder="example@mwold.net" className="box" onChange={handleInput}/>
                {errors.email && <span className="error">{errors.email}</span>}
                <input type="text" placeholder="nombre" className="box" onChange={handleInput}/>
                {errors.name && <span className="error">{errors.name}</span>}     
                <input type="text" placeholder="apellido" className="box" onChange={handleInput} />
                {errors.lastname && <span className="error">{errors.lastname}</span>}
                <input type="number" placeholder="número de teléfono" className="box" onChange={handleInput} />
                {errors.phone && <span className="error">{errors.phone}</span>}
                <input type="text" placeholder="dirección" className="box" onChange={handleInput} />
                {errors.address && <span className="error">{errors.address}</span>}
                <input type="password" placeholder="contraseña" className="box" onChange={handleInput} />
                {errors.password && <span className="error">{errors.password}</span>}
                <input type="password" placeholder="confirmar contraseña" className="box" onChange={handleInput} />
                {errors.password2 && <span className="error">{errors.password2}</span>}
                <input type="submit" defaultValue="Iniciar sesión" className="btn" />
                <p>
                    ¿Ya tienes una cuenta? <a href="http://localhost:5173/">Inicia sesión</a>{" "}
                </p>
            </form>
        </div >
    )
}

export default Register