import React from "react";


const Footer = () => {
    return (
        <div>
            <section className="footer">

                <div className="newsletter">
                    <h3>PescaWeb</h3>
                </div>

                <div className="box-container">
                    <div className="box">
                        <h3>Reconocimiento</h3>
                        <p>"Agradecemos a la Fundación <a href="https://www.gob.mx/bienestar/acciones-y-programas/programa-sembrando-vida">Sembrando Vida</a> por su 
                            apoyo en nuestro proyecto para Holbox. 
                            Juntos, sembramos 
                            un futuro sostenible. 
                            ¡Gracias por ser parte de este viaje!"</p>
                        {/* <p>Sábado : 9:00am a 12:00pm</p>
                        <p>Domingo : Cerrado</p> */}
                    </div>
                    <div className="box">
                        <h3>Navegación</h3>
                        <a href="http://localhost:5173/#home"> <i className="fas fa-arrow-right"></i> Inicio </a>
                        <a href="http://localhost:5173/#servicios"> <i className="fas fa-arrow-right"></i> Servicios </a>
                        <a href="http://localhost:5173/#condominios"> <i className="fas fa-arrow-right"></i> Condominios </a>
                        <a href="http://localhost:5173/login"> <i className="fas fa-arrow-right"></i> Iniciar sesión </a>
                        <a href="http://localhost:5173/conocenos"> <i className="fas fa-arrow-right"></i> Conócenos </a>
                    </div>
                    <div className="box">
                        <h3>Ubicación</h3>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8373820592547!2d-86.82873322890221!3d21.158868940275344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b9da28e4af1%3A0xd53a3c016a84b637!2sM%20WOLD%20Administradores!5e0!3m2!1sen!2sin!4v1690392264358!5m2!1sen!2sin" style={{width:"600", height:"450", border:"0"}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14846.50863580548!2d-87.38990375653077!3d21.522319145724403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4d9275a57191a5%3A0x27f852e722aa141!2s77310%20Holbox%2C%20Quintana%20Roo%2C%20Mexico!5e0!3m2!1sen!2sin!4v1701050514894!5m2!1sen!2sin" style={{width:"1100", height:"450", border:"0"}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="bottom">
                    {/* <div className="share">
                        <a href="https://www.facebook.com/people/M-Wold-Administradores/100055314671843/" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                        <a href="#" className="fab fa-pinterest"></a>
                    </div> */}

                    <div className="credit"> PescaWeb | Todos los derechos reservados</div>
                </div>
            </section>
        </div>
    )
}

export default Footer