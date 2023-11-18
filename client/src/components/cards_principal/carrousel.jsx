import React, { useState, useEffect } from 'react';
import { Pagination } from './pagination';

const Card1 = () => {
  let producto = [
    {
      id: 1,
      name: 'Tilapia',
      description: 'Tilapia fresca y recién pescada.',
      imageName: 'tilapia.jpg',
    },
    {
      id: 2,
      name: 'Rubia',
      description: 'Rubia fresca y recién pescada.',
      imageName: 'rubia_pez.jpg',
    },
    {
      id: 3,
      name: 'Pargo',
      description: 'Pargo fresco y recién pescado.',
      imageName: 'pargo_pez.jpg',
    },
    {
      id: 4,
      name: 'Coronado',
      description: 'Coronado fresco y recién pescado.',
      imageName: 'coronado_pez.JPG',
    },
    {
      id: 5,
      name: 'Camarón',
      description: 'Camarón fresco y recién pescado.',
      imageName: 'camaron_crustaceo.jpg',
    },
    {
      id: 6,
      name: 'Sábalo',
      description: 'Sábalo fresco y recién pescado.',
      imageName: 'sabalo_pez.png',
    },
    {
      id: 7,
      name: 'Condominio 7',
      address: 'Calle 7',
      description: 'Descripcion 7',
      imageName: 'condominio7.jpg',
    },
    {
      id: 8,
      name: 'Condominio 8',
      address: 'Calle 8',
      description: 'Descripcion 8',
      imageName: 'condominio8.jpg',
    },
    {
      id: 9,
      name: 'Condominio 9',
      address: 'Calle 9',
      description: 'Descripcion 9',
      imageName: 'condominio-1.jpg',
    },
    {
      id: 10,
      name: 'Condominio 10',
      address: 'Calle 10',
      description: 'Descripcion 10',
      imageName: 'condominio-2.jpg',
    },
    {
      id: 11,
      name: 'Condominio 11',
      address: 'Calle 11',
      description: 'Descripcion 11',
      imageName: 'condominio-3.jpg',
    },
    {
      id: 12,
      name: 'Condominio 12',
      address: 'Calle 12',
      description: 'Descripcion 12',
      imageName: 'condominio-4.jpg',
    },
    {
      id: 13,
      name: 'Condominio 13',
      address: 'Calle 13',
      description: 'Descripcion 13',
      imageName: 'condominio-5.jpg',
    },
    {
      id: 14,
      name: 'Condominio 14',
      address: 'Calle 14',
      description: 'Descripcion 14',
      imageName: 'condominio-6.jpg',
    },
    {
      id: 15,
      name: 'Condominio 15',
      address: 'Calle 15',
      description: 'Descripcion 15',
      imageName: 'condominio-7.jpg',
    },
    {
      id: 16,
      name: 'Condominio 16',
      address: 'Calle 16',
      description: 'Descripcion 16',
      imageName: 'condominio-8.jpg',
    },
    {
      id: 17,
      name: 'Condominio 17',
      address: 'Calle 17',
      description: 'Descripcion 17',
      imageName: 'condominio-9.jpg',
    },
    {
      id: 18,
      name: 'Condominio 18',
      address: 'Calle 18',
      description: 'Descripcion 18',
      imageName: 'condominio-10.jpg',
    },
  ];

  /* Start Pagination */
  const totalCondominios = producto.length;
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
        <h3>Productos</h3>
      </div>
      <div className="box-container">
        <div className="wrapper">
          <div className="cols">
            {producto &&
              producto
                .map((customer) => (
                  <div className="card" key={customer.id}>
                    <div className="card__corner" />
                    <div className="card__img">
                      <img src={`img/${customer.imageName}`} alt="" />
                      <span className="card__span">{customer.name}</span>
                    </div>
                    <div className="card-int">
                      <p className="card-int__title">{customer.address}</p>
                      <p className="excerpt">{customer.description}</p>
                      <button className="card-int__button">Mostrar</button>
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

export default Card1;
