import React from "react";
import "./styles.css"

var edificio = "14-reporte.png"


const IniciaSesion = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <span>Bienvenido a M WOLD administradores</span>
                <h3>Debes de iniciar sesión</h3>
                <a href="https:/localhost:5173/login" className="btn">Inicia Aquí</a>
            </div>
            <div className="image">
                <div key={edificio}>
                    <img src={'http://localhost:3000/' + edificio} alt="..." />
                </div>
            </div>
        </section>
    )
}

export default IniciaSesion