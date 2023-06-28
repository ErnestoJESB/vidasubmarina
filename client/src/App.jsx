import Header from "./components/header/Header";
import Cards from "./components/cards/cards";
import Conocenos from "./components/conocenos/conocenos";
import Carrousel from "./components/carrousel/carrousel"
import Login from "./components/header/Login";
import Register from "./components/header/register";
import Home from "./components/home/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrarIncidencia from "./components/incidencias/crear/registrarincidencia";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>
          <Cards />
          <Conocenos />
          <Carrousel />
        </div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/crearincidencia" element={<RegistrarIncidencia/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
