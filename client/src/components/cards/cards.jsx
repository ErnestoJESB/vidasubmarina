import React from 'react';
import './styles.css';

const Cards = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <span>Bienvenido(a) a Prolocal</span>
        <h3>Impulso al consumo de productos locales</h3>
        <p>
          Buscamos que los establecimientos que venden productos locales puedan
          promocionarse a través de esta plataforma.
        </p>
        <a
          href="https://www.facebook.com/people/M-Wold-Administradores/100055314671843/"
          className="btn">
          Conócenos
        </a>
      </div>
      <div className="image">
        <div>
          <img src="/img/isla_holbox.jpeg" alt="..." />
        </div>
      </div>
    </section>
  );
};

export default Cards;
