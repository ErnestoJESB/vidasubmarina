import React, { useState, useEffect } from 'react';
import Incidencias from './incidencias';
import { useParams } from 'react-router-dom';

const ListarIncidencia = () => {
    const params = useParams();
    const idCondomino = params.idUsuario;
    return (
        <div>
            <div className="heading">
                <span>Condómino</span>
            </div>
            <Incidencias condominoId={idCondomino} />
        </div>
    )
}

export default ListarIncidencia;