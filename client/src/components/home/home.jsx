import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Admin from "../vistasUsuarios/admin/admin";
import SuperAdmin from "../vistasUsuarios/superadmin/superadmin";
import Condomino from "../vistasUsuarios/condomino/condomino";

const Home = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [role, setRole] = useState('');


    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3000/user")
            .then(res => {
                if (res.data.Status === "Success") {
                    setAuth(true);
                    setRole(res.data.userRole);
                } else {
                    navigate("/login");
                    setAuth(false);
                    setMessage("No estas logeado");
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleDelete = () => {
        axios.get("http://localhost:3000/logout")
            .then(res => {
                location.reload(true);
            })
            .then(error => console.log(error))
    }

    return (

        <div>
            {
                auth ?
                <div>
                    <div> 
                        { role === "super-admin" && <SuperAdmin/>} 
                        { role === "admin" && <Admin/> }
                        { role === "cliente" && <Condomino/> }
                    </div>
                    <button className="btn" onClick={handleDelete}>logout</button>
                </div>
                :
                <div>
                
                </div>

            }
        </div>

    )
}

export default Home
