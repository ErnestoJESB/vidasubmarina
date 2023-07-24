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
                <a href="https://n.mwold.net/crearincidencia" className="box">
                    <img src="img/condominio-1.jpg" alt="" />
                    <h3>Incidencias</h3>
                </a>
                <a href="#" className="box">
                    <img src="img/alberca.png" alt="" />
                    <h3>Avisos</h3>
                </a>
            </section>
        </section>
    )
}

export default SuperAdmin;