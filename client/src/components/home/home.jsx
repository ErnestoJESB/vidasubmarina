import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
    

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setRole(res.data.userRole);
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
 

    return (

        <div>
            {
                auth ?
                    <div>
                        <div>
                            {role === "super-admin" && <SuperAdmin userName={name} userId={id} />}
                            {role === "admin" && <Admin userName={name} userId={id} />}
                            {role === "cliente" && <Condomino userName={name} userId={id} />}
                        </div>
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
