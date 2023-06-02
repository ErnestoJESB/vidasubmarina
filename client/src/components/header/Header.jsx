import React from "react";
import "./Header.css"
import Imagen from "../img/img"
<Imagen />
var logo = "13-reporte.png"


const Header = () => {
    return (
        <header className="header">
            <a href="index.html" className="logo"><div key={logo}>
                <img src={'http://localhost:3000/' + logo} alt="..." /></div>
            </a>

            <nav className="navbar">
                <a href="http://localhost:5173/index.html">Inicio</a>
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