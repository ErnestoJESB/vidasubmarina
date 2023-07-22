import React from "react";
import "./styles.css"



const Cards = () => {
    return (
        <section className="home" id="home">
            <div className="content">
                <span>Bienvenidos a M WOLD administradores</span>
                <h3>administradores de condominos</h3>
                <p>
                    Ofrecemos soluciones a la medida de su presupuesto, por lo que nos convierte en la mejor opción dentro del sector de administración de condominios del sureste Mexicano.</p>
                <a href="https://www.facebook.com/people/M-Wold-Administradores/100055314671843/" className="btn">Conócenos</a>
            </div>
            <div className="image">
                <div>
                    <img src="/img/edificio.png" alt="..." />
                </div>
            </div>
        </section>
    )
}

export default Cards