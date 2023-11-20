import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from './pagination';

const Empresas = ({data}) => {
 
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
        <hr style={{ border: '1px solid #000', margin: '10px 0' }} />
        {/* <span>Nuestros</span> */}
        <h3>Empresas</h3>
      </div>
      <div className="box-container">
        <div className="wrapper">
          <div className="cols">
            {data &&
              data
                .map((datas) => (
                  <div className="card" key={datas.idempresa}>
                    <div className="card__corner" />
                    <div className="card__img">
                      <img src={`img/${datas.image}`} alt="" />
                      <span className="card__span">{datas.empresa}</span>
                    </div>
                    <div className="card-int">
                      <p className="card-int__title">{datas.address}</p>
                      <p className="card-int__title">{datas.email}</p>
                      <p className="excerpt">{datas.phone}</p>
                      <a href={`http://localhost:5173/proveedor/${datas.idempresa}`}>
                      <button className="card-int__button">Mostrar</button>
                      </a>
                      
                    </div>
                  </div>
                ))
                .slice(indexOfFirstCondominio, indexOfLastCondominio)}
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
  );
};

export default Empresas;
