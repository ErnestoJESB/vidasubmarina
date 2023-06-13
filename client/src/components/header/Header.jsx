import React, {useEffect}from "react";
import "./Header.css"
const Header = () => {

  useEffect(() => {
    const loginForm = document.querySelector('.login-form-container');
    const loginBtn = document.querySelector('#login-btn');
    const navbar = document.querySelector('.header .navbar');
    const menuBtn = document.querySelector('#menu-btn');

    const handleLoginBtnClick = () => {
      loginForm.classList.toggle('active');
      navbar.classList.remove('active');
    };

    const handleMenuBtnClick = () => {
      navbar.classList.toggle('active');
      loginForm.classList.remove('active');
    };

    const handleScroll = () => {
      navbar.classList.remove('active');
    };

    loginBtn.addEventListener('click', handleLoginBtnClick);
    menuBtn.addEventListener('click', handleMenuBtnClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Limpiar los eventos al desmontar el componente
      loginBtn.removeEventListener('click', handleLoginBtnClick);
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
                <div id="login-btn" className="ri-user-line"></div>
            </div>
        </header>
    )
}

export default Header