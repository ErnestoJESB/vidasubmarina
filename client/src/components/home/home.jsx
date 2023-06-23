import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [auth, setAuth] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');


    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3000/auth")
        .then(res => {
            if(res.data.valid){
                setName(res.data.username);
                setAuth(true);
            }else{
                navigate("/login");
                setAuth(false);
                setMessage(res.data.Error);
            }
            })
            .catch(error => console.log(error))
    }, []) 
    return (
        auth ?
        <div>
            <h1 style={{color: 'white', fontSize: '5rem'}}>Bienvenido a la página principal--- {name}</h1>
            <button>logout</button>
        </div>
        :
        <div>
            <h3>{message}</h3>
            <h3>Login now</h3>
            <a href="http://localhost:5173/login">Login now</a>
        </div>


    )
}

export default Home