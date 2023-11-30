import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "./RegisterValidation";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Pedido = ({ stock, unidad }) => {
    console.log(stock);
    const [values, setValues] = useState({
        name: '',
        cantidad: '',
        fecha: '',
        password: '',
        phone: '',
        address: '',
        password2: ''
    });
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
            axios.post('http://localhost:3000/register', values)
                .then(res => {
                    navigate('/home');
                })
                .catch(err => {
                    console.log(err);
                });
    }

    const [cantidad, setCantidad] = useState('');

    const handleInput2 = (event) => {
        const inputValue = event.target.value;

        // Realizar validación para asegurarse de que el valor sea menor o igual al máximo
        if (inputValue <= stock) {
            setCantidad(inputValue);
        } else {
            // Mostrar un alert si el valor excede el máximo
            alert(`¡Error! La cantidad no puede ser mayor a ${stock} ${unidad}`);
        }
    };

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>Pedido</h3>
            </div>
            <form action="" onSubmit={handleInput} >
                <div className="flex">
                    <div className="inputBox">
                        <span>Cantidad</span>
                        <input
                            type="number"
                            placeholder={`Cantidad máxima ${stock} ${unidad}s`}
                            className="form-control"
                            name="cantidad"
                            value={cantidad}
                            onChange={handleInput2}
                        />
                    </div>
                    <div className="inputBox">
                        <span>Descripción</span>
                        <input type="text" placeholder="No necesario" className="form-control" name="nota" onChange={handleInput} autoComplete="disable" />
                    </div>
                </div>
                <input type="submit" value="Registrar" className="btn btn2" onClick={handleSubmit} />
            </form>
        </section >
    )
}

export default Pedido