import React, { useState, useEffect } from "react";
import { Pagination } from "./pagination";
import "./carrousel.css"

const Carrousel = () => {


    const [customersData, setCustomersData] = useState([]);

    /* Start Pagination */
    const totalCondominios = customersData.length;
    const [condominiosPerPage, setCodominiosPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCondominio = currentPage * condominiosPerPage;
    const indexOfFirstCondominio = indexOfLastCondominio - condominiosPerPage;

    /* End Pagination */
    useEffect(() => {
        fetch('http://localhost:3000/getCondominio')
            .then(response => response.json())
            .then(data => {
                setCustomersData(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (

        <section className="popular" id="condominios">
            <div className="heading">
                <span>Nuestros</span>
                <h3>Condominios</h3>
            </div>
            <div className="box-container">
                <div className="wrapper">
                    <div className="cols">
                        {customersData && customersData.map((customer) => (
                            <div className="col" key={customer.id}/*  onTouchStart="this.classList.toggle('hover');" */>
                                <div className="container">
                                    <div className="front" style={{ backgroundImage: `url(http://localhost:3000/${customer.imageName})` }}>
                                        <div className="inner">
                                            <p>{customer.name}</p>
                                            <span>{customer.address}</span>
                                        </div>
                                    </div>
                                    <div className="back">
                                        <div className="inner">
                                            <p>{customer.description}</p>
                                        </div>
                                    </div>
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

export default Carrousel