import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3000/home")
        .then(res => {
            if(res.data.valid){
                setName(res.data.username);
                console.log(res.data.username);
                console.log(res.data.valid);
            }else{
                navigate("/login");
            }
            })
            .catch(error => console.log(error))
    }, [])
    return (
        /* haz un título en color blanco y grande */
        <div>
            <h1 style={{color: 'white', fontSize: '5rem'}}>Bienvenido a la página principal {name}</h1>
        </div>

    )
}

export default Home