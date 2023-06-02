import React from "react";
import "./styles.css"

var edificio = "14-reporte.png"


const Cards = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <span>Bienvenidos a M WOLD administradores</span>
                <h3>administradores de condominos</h3>
                <p>
                    Ofrecemos soluciones a la medida de su presupuesto, por lo que nos convierte en la mejor opción dentro del sector de administración de condominios del sureste Mexicano.</p>
                <a href="#popular" className="btn">Conócenos</a>
            </div>
            <div className="image">
                <div key={edificio}>
                    <img src={'http://localhost:3000/' + edificio} alt="..." />
                </div>
            </div>
        </section>
    )
}

export default Cards