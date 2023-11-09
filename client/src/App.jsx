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
import Comentario from "./components/incidencias/comentarios/comentario";
import ListarIncidencia from "./components/incidencias/listarincidencia";
import ListarComentario from "./components/incidencias/comentarios/listarcomentarios";
import CrearComentario from "./components/incidencias/comentarios/crearcomentario";
import Usuarios from "./components/vistasUsuarios/superadmin/usuarios";
import Conocenosweb from "./components/website/conócenos";
import Footer from "./components/footer/footer";
import Card1 from "./components/cards_principal/carrousel";
import Producto from "./components/producto/producto";
import Proveedor from "./components/proveedor/proveedor";

function App({ auth, role, id, condominioUser }) {
  const autenticacion = auth;
  const rol = role;
  const idUsuario = id;
  const idCondominio = condominioUser;
  return (
    <BrowserRouter>
      <Header auth={autenticacion} role={rol} />
      <Routes>

        <Route path="/main" element={<Card1 />} />
        <Route path="producto" element={<Producto />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route path="/" element={<div>
          <Cards />
          <Card1/>
          <Conocenos />
          {/* <Carrousel /> */}
        </div>} />
        <Route path="/conocenos" element={<Conocenosweb />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        {
          auth ?
            <Route path="/crearincidencia" element={<RegistrarIncidencia id={idUsuario} condominioUs={idCondominio} />} />
            :
            <Route path="/crearincidencia" element={<Login />} />
        }
        

        {
          auth ?
            <Route path="/comentarios/:idIncidencia/:idCondomino" element={<ListarComentario usuarioId={idUsuario} condominioId={idCondominio} rolUser={rol} />} />
            :
            <Route path="/comentarios/:idIncidencia/:idCondomino" element={<Login />} />
        }

        {
          auth ?
            <Route path="/crearcomentarios/:idIncidencia/:idCondomino/:idCondominio" element={<CrearComentario usuarioId={idUsuario} condominioId={idCondominio} rolUser={rol} />} />
            :
            <Route path="/crearcomentarios/:idIncidencia/:idCondomino/:idCondominio" element={<Login />} />
        }

        {
          auth ?
            <Route path="/incidencias/:idUsuario" element={<ListarIncidencia id={idUsuario} condominioUs={idCondominio} />} />
            :
            <Route path="/incidencias/:idUsuario" element={<Login />} />
        }

        {
          auth ?
            <Route path="/usuarios" element={<Usuarios/>} />
            :
            <Route path="/usuarios" element={<Login />} />
        }



      </Routes>
      {<Footer />}
    </BrowserRouter>

  );
}

export default App;
