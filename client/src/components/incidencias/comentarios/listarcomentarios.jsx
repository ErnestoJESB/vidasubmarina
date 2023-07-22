import React, { useState, useEffect } from 'react';
import Comentario from './comentario';
import { useParams } from 'react-router-dom';

const ListarComentario = ({ usuarioId, condominioId, rolUser }) => {
    const idCondominio = condominioId;
    const userRol = rolUser;

    if (userRol === "admin") {
        const params = useParams();
        const idUsuario = params.idCondomino;
        return (
            <div>
                <Comentario usuarioId={idUsuario} condominioId={idCondominio} />
            </div>
        )
    } else {
        const idUsuario = usuarioId;
        return (
            <div>
                <Comentario usuarioId={idUsuario} condominioId={idCondominio} />
            </div>
        )
    }
}

export default ListarComentario;