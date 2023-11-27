import React, { useState, useEffect } from "react";
import { Pagination } from "./pagination";


const Productos = ({ data }) => {
    /* Start Pagination */
    const totalCondominios = data.length;
    const [condominiosPerPage, setCodominiosPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCondominio = currentPage * condominiosPerPage;
    const indexOfFirstCondominio = indexOfLastCondominio - condominiosPerPage;

    /* End Pagination */
    

    return (
        <section className="popular" id="condominios">
            <div className="heading">
                <h3>---------------------------------------------------------------------------</h3>
                {/* <span>Nuestros</span> */}
                <h3>Productos</h3>
            </div>
            <div className="box-container">
                <div className="wrapper">
                    <div className="cols">
                        {data && 
                        data.map((producto) => (
                            <div className="card" key={producto.id}>
                                <div className="card__corner" />
                                <div className="card__img">
                                    <img src={`http://localhost:3000/${producto.image}`} alt="" />
                                    <span className="card__span">{producto.nombre}</span>
                                </div>
                                <div className="card-int">
                                    <p className="card-int__title">{producto.unidad_medida}</p>
                                    <p className="excerpt">
                                        {producto.descripcion}
                                    </p>
                                    <a href={`http://localhost:5173/producto/${producto.idproductos}`}>
                                        <button className="card-int__button">Mostrar</button>
                                    </a>
                                </div>
                            </div>
                        )).slice(indexOfFirstCondominio, indexOfLastCondominio)}
                    </div>
                </div>
            </div>
            <Pagination
                condominiosPerPage={condominiosPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalCondominios={totalCondominios}
            />
        </section>
    )
}

export default Productos