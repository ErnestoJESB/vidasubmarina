import React from "react";



const RegistrarIncidencia = ({id}) => {
    
    return (
        <section className="order" id="order">
            <div className="heading">
                <span>Registrar</span>
                <h3>incidencia</h3>
            </div>
            <form action="" >
                <div className="flex">
                    <div className="inputBox">
                        <span>Correo electrónico</span>
                        <input type="text" placeholder="example@mwold.net" className="form-control" name="email" autoComplete="disabled" />
                        
                    </div>
                    <div className="inputBox">
                        <span>Nombre</span>
                        <input type="text" placeholder="nombre" className="form-control" name="name" autoComplete="disable" />
                        
                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Apellido</span>
                        <input type="text" placeholder="apellido" className="form-control" name="lastname" autoComplete="disable" />
                        
                    </div>
                    <div className="inputBox">
                        <span>Número de teléfono</span>
                        <input type="number" placeholder="número de teléfono" className="form-control" name="phone" autoComplete="disable" />
                       
                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Dirección</span>
                        <input type="text" placeholder="dirección" className="form-control" name="address" autoComplete="disable" />
                        
                    </div>
                    <div className="inputBox">
                        <span>Contraseña</span>
                        <input type="password" placeholder="contraseña" className="form-control" name="password" autoComplete="disable" />
                        
                    </div>
                </div>
                <div className="flex">
                    <div className="inputBox">
                        <span>Confirmar contraseña</span>
                        <input type="password" placeholder="confirmar contraseña" className="form-control" name="password2" autoComplete="disable" />
                        
                    </div>
                </div>
                <input type="submit" value="Registrar" className="btn btn2" />
                <p>
                    ¿Ya tienes una cuenta? <a href="http://localhost:5173/login">Inicia sesión</a>{" "}
                </p>
            </form>
        </section>
    );
}

export default RegistrarIncidencia;