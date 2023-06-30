import React, { useEffect, useState } from "react";
import axios from "axios";
import Admin from "../vistasUsuarios/admin/admin";
import SuperAdmin from "../vistasUsuarios/superadmin/superadmin";
import Condomino from "../vistasUsuarios/condomino/condomino";
import IniciaSesion from "../cards/inicia_sesion";

const Home = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [incidencias, setIncidencias] = useState('');


    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setRole(res.data.tipo_usuario);
                    setName(res.data.userName);
                    setId(res.data.userId);
                } else {
                    setAuth(false);
                    setMessage("No estas logeado");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:3000/incidencias/${id}`)
            .then(res => {
                if (res.data.Status === "Success") {
                    setIncidencias(res.data.data);
                } else {
                    setIncidencias([]);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])
    
    return (

        <div>
            {
                auth ?
                    <div>
                        {role === "super-admin" && <SuperAdmin userName={name} userId={id} />}
                        {role === "admin" && <Admin userName={name} userId={id} />}
                        {role === "usuario" && <Condomino userName={name} userId={id} />}
                    </div>
                    :
                    <div>
                        {/* haz un div que diga que debes iniciar sesión */}
                        <IniciaSesion />
                    </div>

            }
        </div>

    )
}

export default Home
