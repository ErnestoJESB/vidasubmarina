import Header from './components/header/Header';
import Cards from './components/cards/cards';
import Conocenos from './components/conocenos/conocenos';
import Carrousel from './components/carrousel/carrousel';
import Login from './components/header/Login';
import Register from './components/header/register';
import Home from './components/home/home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrarIncidencia from './components/incidencias/registrarincidencia';
import Comentario from './components/incidencias/comentarios/comentario';
import ListarIncidencia from './components/incidencias/listarincidencia';
import ListarComentario from './components/incidencias/comentarios/listarcomentarios';
import CrearComentario from './components/incidencias/comentarios/crearcomentario';
import Usuarios from './components/vistasUsuarios/superadmin/usuarios';
import Conocenosweb from './components/website/conócenos';
import Footer from './components/footer/footer';
import Productos from './components/cards_principal/carrousel';
import Producto from './components/producto/producto';
import Empresas1 from './components/empresas/empresas';
import Proveedor from './components/empresas/proveedor';
import ProductoRec from './components/producto/productosrecientes';
import ProductoId from './components/producto/idproducto';
import Perfilempresa from './components/empresas/perfilEmpresa';

function App({ auth, role, id, name }) {
  const autenticacion = auth;
  const rol = role;
  const idUsuario = id;


  return (
    <BrowserRouter>
      <Header auth={autenticacion} role={rol} nombre={name}/>
      <Routes>
        <Route path="/main" element={<Productos />} />
        <Route path="producto" element={<Producto />} />
        <Route path="/proveedor" element={<Proveedor />} />
        <Route
          path="/"
          element={
            <div>
              <Cards />
              {/*<Productos />*/}
              <Conocenos />
              <ProductoRec />
            </div>
          }
        />
        <Route path="/conocenos" element={<Conocenosweb />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />

        {auth ? (
          <Route
            path="/cliente"
            element={
              <Empresas1 />
            }
          />
        ) : (
          <Route path="/cliente" element={<Login />} />
        )}

        {auth ? (
          <Route
            path="/proveedor/:idproveedor"
            element={
              <div>
                <Proveedor />
              </div>
            }
          />
        ) : (
          <Route path="/proveedor/:idproveedor" element={<Login />} />
        )}

        {auth ? (
          <Route
            path="/producto/:producto"
            element={
              <div>
                <ProductoId />
              </div>
            }
          />
        ) : (
          <Route path="/producto/:producto" element={<Login />} />
        )}


        {auth ? (
          <Route
            path="/miempresa"
            element={
              <div>
                <Perfilempresa idUser={idUsuario}/>
              </div>
            }
          />
        ) : (
          <Route path="/miempresa" element={<Login />} />
        )}

      </Routes>
      {<Footer />}
    </BrowserRouter>
  );
}

export default App;


{/* {auth ? (
          <Route
            path="/crearincidencia"
            element={
              <RegistrarIncidencia id={idUsuario} condominioUs={idCondominio} />
            }
          />
        ) : (
          <Route path="/crearincidencia" element={<Login />} />
        )} 
        
        {auth ? (
          <Route
            path="/comentarios/:idIncidencia/:idCondomino"
            element={
              <ListarComentario
                usuarioId={idUsuario}
                condominioId={idCondominio}
                rolUser={rol}
              />
            }
          />
        ) : (
          <Route
            path="/comentarios/:idIncidencia/:idCondomino"
            element={<Login />}
          />
        )}

        {auth ? (
          <Route
            path="/crearcomentarios/:idIncidencia/:idCondomino/:idCondominio"
            element={
              <CrearComentario
                usuarioId={idUsuario}
                condominioId={idCondominio}
                rolUser={rol}
              />
            }
          />
        ) : (
          <Route
            path="/crearcomentarios/:idIncidencia/:idCondomino/:idCondominio"
            element={<Login />}
          />
        )}

        {auth ? (
          <Route
            path="/incidencias/:idUsuario"
            element={
              <ListarIncidencia id={idUsuario} condominioUs={idCondominio} />
            }
          />
        ) : (
          <Route path="/incidencias/:idUsuario" element={<Login />} />
        )}

        {auth ? (
          <Route path="/usuarios" element={<Usuarios />} />
        ) : (
          <Route path="/usuarios" element={<Login />} />
        )} */}
