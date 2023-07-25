import React from "react";
import App from "../../App";
import axios from "axios";
import { useState, useEffect } from "react";


const Auth = () => {
        const [auth, setAuth] = useState(false);
        const [role, setRole] = useState('');
        const [id, setId] = useState('');
        const [condominio, setCondominio] = useState('');
      
        axios.defaults.withCredentials = true;
        useEffect(() => {
          axios.get("http://localhost:3000/user")
            .then(res => {
              if (res.data.Status === "Success") {
                setAuth(true);
                setRole(res.data.tipo_usuario);
                setId(res.data.userId);
                setCondominio(res.data.idcondominio);
              } else {
                setAuth(false);
              }
            })
            .catch(error => {
              console.log(error);
            })
        }, [])

        return (
            <div>
                <App auth={auth} role={role} id={id} condominioUser={condominio}/>
            </div>
            )
}

export default Auth;
