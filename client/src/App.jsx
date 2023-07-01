import Header from "./components/header/Header";
import Cards from "./components/cards/cards";
import Conocenos from "./components/conocenos/conocenos";
import Carrousel from "./components/carrousel/carrousel"
import Login from "./components/header/Login";
import Register from "./components/header/register";
import Home from "./components/home/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrarIncidencia from "./components/incidencias/registrarincidencia";


function App({ auth, role, id, condominioUser}) {
  const autenticacion = auth;
  const rol = role;
  const idUsuario = id;
  const condominio = condominioUser;
  return (
    <BrowserRouter>
      <Header auth={autenticacion} role={rol}/>
      <Routes>
        <Route path="/" element={<div>
          <Cards />
          <Conocenos />
          <Carrousel />
        </div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        {
          auth ?
          <Route path="/crearincidencia" element={<RegistrarIncidencia id={idUsuario} condominioUs={condominio}/>}/>
          :
          <Route path="/crearincidencia" element={<Login/>}/>
        }
      </Routes>
    </BrowserRouter>

  );
}

export default App;
