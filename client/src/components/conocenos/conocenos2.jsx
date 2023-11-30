import React from 'react';
import './conocenos.css';
import './conocenos.css';

const Conocenos2 = () => {
  var empresario = '';
  var iconos = '11-reporte.png';
  var iconos2 = '16-reporte.png';
  var iconos3 = '13-reporte.png';

  return (
    <section className="about" id="servicios">
      <div className="image">
        <img src="/img/Ut.png" alt="..." />
      </div>
      <div className="content">
        <span>¿Quienes Somos?</span>
        <h3 className="title">Desarrolladores</h3>
        <p>
            Somos un equipo de desarrollo de la <a href="http://">UT cancun </a>
            encargados de implementar la tecnología para facilitar 
            los procesos que se realizan de manera 
            tradicional e interesados en apoyar a las 
            comunidades con el objetivo de ayudarlas a 
            desarrollarse de manera óptima y eficiente.{' '}
        </p>
        <div className="icons-container">
          {/* Modal Thiago*/}
          <a href="#asesoria">
            <div className="icons">
              <div>
                <img src="/img/legal.png" alt="..." style={{ width: '6rem' }} />
              </div>
              <h3>Thiago</h3>
            </div>
          </a>

          <div id="asesoria" className="modal">
            <div className="modal__content">
              <h2>Thiago</h2>

              <p>
                Hola1
              </p>

              <div className="modal__footer">
                <p>Área dirigida por</p>
              </div>

              <a href="#servicios" className="modal__close">
                &times;
              </a>
            </div>
          </div>
          {/* Fin modal */}

          {/* Modal Ernesto*/}
          <a href="#real_estate">
            <div className="icons">
              <img src="/img/real.png" alt="..." style={{ width: '6rem' }} />
              <h3>Ernesto</h3>
            </div>
          </a>

          <div id="real_estate" className="modal">
            <div className="modal__content">
              <h2>Ernesto</h2>
              <p>
                Hola2
              </p>
              <div className="modal__footer">
                <p>Área dirigida por</p>
              </div>

              <a href="#servicios" className="modal__close">
                &times;
              </a>
            </div>
          </div>
          {/* Fin modal */}

          {/* Modal Kevin*/}
          <a href="#administradores">
            <div className="icons">
              <div>
                <img
                  src="/img/admin.png"
                  alt="..."
                  style={{ height: '6rem' }}
                />
              </div>
              <h3>Kevin</h3>
            </div>
          </a>

          <div id="administradores" className="modal">
            <div className="modal__content">
              <h2>Kevin</h2>

              <p>
               Hola3
              </p>

              <div className="modal__footer">
                <p>Área dirigida por</p>
              </div>

              <a href="#servicios" className="modal__close">
                &times;
              </a>
            </div>
          </div>
          {/* Fin modal */}

          {/* Modal Adrian*/}
          <a href="#administradores">
            <div className="icons">
              <div>
                <img
                  src="/img/admin.png"
                  alt="..."
                  style={{ height: '6rem' }}
                />
              </div>
              <h3>Adrian</h3>
            </div>
          </a>

          <div id="administradores" className="modal">
            <div className="modal__content">
              <h2>Adrian</h2>

              <p>
                Hola4
              </p>

              <div className="modal__footer">
                <p>Área dirigida por</p>
              </div>

              <a href="#" className="modal__close">
                &times;
              </a>
            </div>
          </div>
          {/* Fin modal */}
        </div>
      </div>
    </section>
  );
};

export default Conocenos2;
