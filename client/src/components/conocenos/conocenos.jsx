import React from "react";
import "./conocenos.css"
import "./conocenos.css"



const Conocenos = () => {
    var empresario = ""
    var iconos = "11-reporte.png"
    var iconos2 = "16-reporte.png"
    var iconos3 = "13-reporte.png"

    return (

        <section className="about" id="servicios">
            <div className="image">
                <div>
                    <img src={'http://localhost:3000/15-reporte.png'} alt="..." />
                </div>
            </div>
            <div className="content">
                <span>¿Qué hacemos?</span>
                <h3 className="title">Nuestros servicios</h3>
                <p>Proporcionamos ideas prácticas y objetivas, a través de un equipo de profesionales
                    cuya experiencia y dedicación nos permite garantizar un excelente servicio. </p>
                <div className="icons-container">
                    {/* Modal asesoria*/}
                    <a href="#asesoria">
                        <div className="icons">
                            <div>
                                <img src={'http://localhost:3000/11-reporte.png'} alt="..." style={{ width: "6rem" }} />
                            </div>
                            <h3>Asesoría</h3>
                        </div>
                    </a>

                    <div id="asesoria" className="modal">
                        <div className="modal__content">
                            <h2>Asesoría</h2>

                            <p>
                                Cuenta con el área de asesoría para que pueda consultar cuestiones legales y artículos relacionados con los condominios.
                            </p>

                            <div className="modal__footer">
                                <p>Área dirigida por</p>
                            </div>

                            <a href="#servicios" className="modal__close">&times;</a>
                        </div>
                    </div>
                    {/* Fin modal */}

                    {/* Modal Real estate*/}
                    <a href="#real_estate">
                        <div className="icons">
                            <div>
                                <img src={'http://localhost:3000/14-reporte.png'} alt="..." style={{ width: "6rem" }} />
                            </div>
                            <h3>Real Estate</h3>
                        </div>
                    </a>

                    <div id="real_estate" className="modal">
                        <div className="modal__content">
                            <h2>Real Estate</h2>
                            <p>Cuenta con el área de Real Estate; donde se ofrece una amplia gama de productos inmobiliarios disponibles para todo aquel que desee invertir en el Caribe mexicano.</p>
                            <div className="modal__footer">
                                <p>Área dirigida por</p>
                            </div>

                            <a href="#servicios" className="modal__close">&times;</a>
                        </div>
                    </div>
                    {/* Fin modal */}

                    {/* Modal administradores*/}
                    <a href="#administradores">
                        <div className="icons">
                            <div>
                                <img src={'http://localhost:3000/17-reporte.png'} alt="..." style={{ width: "6rem" }} />
                            </div>
                            <h3>Administradores</h3>
                        </div>
                    </a>

                    <div id="administradores" className="modal">
                        <div className="modal__content">
                            <h2>Administradores</h2>

                            <p>
                                Supervisión diaria del personal de vigilancia, mantenimiento, limpieza y jardinería; elaboración de planes de trabajo para cada área con visto bueno del comité de vigilancia.
                            </p>

                            <div className="modal__footer">
                                <p>Área dirigida por</p>
                            </div>

                            <a href="#servicios" className="modal__close">&times;</a>
                        </div>
                    </div>
                    {/* Fin modal */}
                </div>
            </div>
        </section>

    )
}

export default Conocenos