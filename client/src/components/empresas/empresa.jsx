import React from 'react';


const Empresa = ({data}) => {
    return (
        <div>
            {data.map((datas, index) => (
                <section className="blogs" id="blogs" key={index}>
                    <div className="heading">
                        {/* <span></span> */}
                        <h3>{datas.empresa}</h3>
                    </div>
                    <div className="box-container">
                        <div className="box" >
                            <div className="image">
                                <h3> <i className="fas fa-calendar"></i> {datas.empresa} </h3>
                                <img src={`../img/${datas.image}`} alt="" />
                            </div>
                            <div className="content">
                                <div className="tags">
                                    <a href="#"> <i className="fas fa-tag"></i> Número de teléfono / </a>
                                    <a href={`https://api.whatsapp.com/send/?phone=${datas.phone}`}> <i className="fas fa-tag"></i> {datas.phone}</a>
                                </div>
                                <h3>Dirección</h3>
                                <p>{datas.address}</p>
                                <h3>Correo electrónico</h3>
                                <p>{datas.email}</p>
                            </div>
                        </div>

                    </div>
                </section>
            ))}
        </div>
    );
}

export default Empresa;