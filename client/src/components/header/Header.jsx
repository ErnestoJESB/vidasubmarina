import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Header.css"
const Header = ({ auth, role }) => {

  useEffect(() => {

    const navbar = document.querySelector('.header .navbar');
    const menuBtn = document.querySelector('#menu-btn');


    const handleMenuBtnClick = () => {
      navbar.classList.toggle('active');
    };

    const handleScroll = () => {
      navbar.classList.remove('active');
    };

    menuBtn.addEventListener('click', handleMenuBtnClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Limpiar los eventos al desmontar el componente
      menuBtn.removeEventListener('click', handleMenuBtnClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  /* A partir de aquí todo estaba bien xd */



  const handleDelete = () => {
    axios.get("http://localhost:3000/logout")
      .then(res => {
        location.reload(true);
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div>
      {
        auth ?
          <header className="header">
            <a href="http://localhost:5173/" className="logo"><div>
              <img src="/img/logoMWOLD.png" alt="..." />
            </div>
            </a>
            <nav className="navbar">
              <a href="http://localhost:5173/">Inicio</a>
              <a href="http://localhost:3000/customer">Clientes</a>
              <a href="http://localhost:3000/condominio">Condominios</a>
              <a href="http://localhost:5173/home">{role}</a>
            </nav>
            
            
          </header>
          :
          <header className="header">
            <a href="http://localhost:5173/" className="logo"><div>
              <img src="/img/vidaLogo1.png" alt="..." /></div>
            </a>
            <nav className="navbar">
              <a href="http://localhost:5173/">Inicio</a>
              <a href="http://localhost:5173/conocenos">Conócenos</a>
              <a href="http://localhost:3000/condominio">Condominios</a>
            </nav>
            <div className="icons">
              <div id="menu-btn" className="ri-menu-line"></div>
            </div>
          </header>
      }
    </div>
  )
}

export default Header