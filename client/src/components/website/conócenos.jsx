import React from "react";


const Conocenosweb = () => {
    return (
        <div>
            <section className="home" id="home">
                <div className="content" style={{textAlign:"center"}}>
                    <h3>Bienvenido a M WOLD administradores</h3>
                </div>
            </section>
            <section className="home" id="home">
                <div className="content">
                    <h3>¿Quiénes somos?</h3>
                    <span>M WOLD ADMINISTRADORES S.C. es una empresa sólida con amplia experiencia en el ramo de administación de condominios, que dentro de sus principales objetivos esta el contribuir a la sociedad en el aprendizaje de vivir en condominio, ya que de esta manera se alcanza una plusvalía en las propiedades.</span>
                </div>
                <div className="image">
                    <img src="/img/asesoría.png" alt="..." style={{paddingTop:"10rem", width:"40rem", paddingLeft:"10rem"}} />
                </div>
            </section>
            <section className="home" id="home">
                <div className="image">
                    <img src="/img/mision.jpg" alt="..." style={{paddingTop:"5rem", width:"50rem", paddingRight:"7rem"}} />
                </div>
                <div className="content">
                    <h3>Misión</h3>
                    <span>Ser una empresa vanguardista y convencida del trabajo en equipo, por ello que su misión la aterriza en tres conceptos básicos y efectivos: HONESTIDAD, TRABAJO Y CALIDEZ HUMANA. Consolidando así un grupo que rompe esquemas y paradigmas para la administración inmobiliaria.</span>
                </div>
            </section>
            <section className="home" id="home">
                <div className="content">
                    <h3>Visión</h3>
                    <span>Ser la empresa líder en administración inmobiliaria del Sureste Mexicano con alta capacidad de innovación y eficiencia en sus procedimientos a través del trabajo en equipo, lo que se traduce en respuesta inmediata de servicio y profesionalismo a sus clientes, mediante el apoyo de la tecnología actual.</span>
                </div>
                <div className="image">
                    <img src="/img/building.jpg" alt="..." style={{paddingTop:"10rem", width:"40rem", paddingLeft:"10rem"}} />
                </div>
            </section>
        </div>

    )
}

export default Conocenosweb