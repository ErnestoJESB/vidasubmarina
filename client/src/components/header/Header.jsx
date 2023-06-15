import React, {useEffect}from "react";
import "./Header.css"
const Header = () => {

  useEffect(() => {;
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


     

    return (
        <header className="header">
            <a href="http://localhost:5173/" className="logo"><div>
                <img src={'http://localhost:3000/13-reporte.png'} alt="..." /></div>
            </a>

            <nav className="navbar">
                <a href="http://localhost:5173/">Inicio</a>
                <a href="http://localhost:3000/customer">Clientes</a>
                <a href="http://localhost:3000/condominio">Condominios</a>
                <a href="#menu">Contacto</a>
            </nav>

            <div className="icons">
                <div id="menu-btn" className="ri-menu-line"></div>
                <a href="http://localhost:5173/login"><div className="ri-user-line"></div></a>
                
            </div>
        </header>
    )
}

export default Header