import React from "react";
import "./styles.css"

var edificio = "14-reporte.png"


const SerEmpresa = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <span>¿Quieres ser</span>
                <h3>una empresa?</h3>
                <a href="http://localhost:5173/registrarempresa" className="btn">Regístrala aquí</a>
            </div>
            <div className="image">
                <div key={edificio}>
                    <img src={'http://localhost:3000/' + edificio} alt="..." />
                </div>
            </div>
        </section>
    )
}

export default SerEmpresa