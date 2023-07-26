import React from "react";


const Footer = () => {
    return (
        <div>
            <section className="footer">

                <div className="newsletter">
                    <h3>M Wold Administradores S.C.</h3>
                </div>

                <div className="box-container">
                    <div className="box">
                        <h3>Horarios de atención</h3>
                        <p>Lunes a Viernes : 9:00am a 3:00pm</p>
                        <p>Sábado : 9:00am a 12:00pm</p>
                        <p>Domingo : Cerrado</p>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8373820592547!2d-86.82873322890221!3d21.158868940275344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b9da28e4af1%3A0xd53a3c016a84b637!2sM%20WOLD%20Administradores!5e0!3m2!1sen!2sin!4v1690392264358!5m2!1sen!2sin" style={{width:"600", height:"450", border:"0"}}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <div className="bottom">
                    <div className="share">
                        <a href="https://www.facebook.com/people/M-Wold-Administradores/100055314671843/" className="fab fa-facebook-f"></a>
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-instagram"></a>
                        <a href="#" className="fab fa-linkedin"></a>
                        <a href="#" className="fab fa-pinterest"></a>
                    </div>

                    <div className="credit"> M Wold Administradores S.C. | Todos los derechos reservados</div>
                </div>
            </section>
        </div>
    )
}

export default Footer