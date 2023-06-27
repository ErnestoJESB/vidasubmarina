import React from "react";

const Condomino = ({ userName }) => {
    return (
        <div>
            <h3>Bienvenido {userName}</h3>
            <section className="category">
                <a href="#" className="box">
                    <img src="img/manos.png" alt=""/>
                        <h3>Crear incidencia</h3>
                </a>
                <a href="#" className="box">
                    <img src="img/alberca.png" alt=""/>
                        <h3>Editar incidencia</h3>
                </a>
            </section>
        </div>
    );
}

export default Condomino;