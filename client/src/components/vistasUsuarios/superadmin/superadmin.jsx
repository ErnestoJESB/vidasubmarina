import React from "react";
import Graficas from "../graficas/graficas";
const SuperAdmin = ({ userName, userId }) => {
    let label = ["Ernesto", "Yisus", "Daniel"]
    let data = [12, 19, 3]

    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Bienvenido</span>
                <h3>{userName}</h3>
            </div>
            <section className="category">
                <a href="http://localhost:5173/crearincidencia" className="box">
                    <img src="img/condominio-1.jpg" alt="" />
                    <h3>Incidencias</h3>
                </a>
                <a href="#" className="box">
                    <img src="img/alberca.png" alt="" />
                    <h3>Avisos</h3>
                </a>
                <a href="http://localhost:5173/usuarios" className="box">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="64" height="64" viewBox="0 0 24 24" strokeWidth="2" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    <h3>Usuarios</h3>
                </a>
            </section>
        </section>
    )
}

export default SuperAdmin;