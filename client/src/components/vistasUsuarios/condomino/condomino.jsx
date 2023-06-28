import React from "react";

const Condomino = ({ userName, userId}) => {
    return (

        <section className="order" id="order">
            <div className="heading">
                <span>Bienvenido</span>
                <h3>{userName}</h3>
                <h3>{userId}</h3>
            </div>
            <div>
                <section className="category">
                    <a href="#" className="box">
                        <img src="img/condominio-1.jpg" alt="" />
                        <h3>Crear incidencia</h3>
                    </a>
                    <a href="#" className="box">
                        <img src="img/alberca.png" alt="" />
                        <h3>Editar incidencia</h3>
                    </a>
                </section>
            </div>
        </section>


    );
}

export default Condomino;