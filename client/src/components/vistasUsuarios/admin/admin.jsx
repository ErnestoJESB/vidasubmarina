import React from "react";
import Graficas from "../graficas/graficas";

const Admin = ({userName}) => {
    const data = {
        labels: ["Midtown", "Grand Arrecife", "Torre Península"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3],
                backgroundColor: ["red", "blue", "yellow"],
                borderColor: ["red", "blue", "yellow"],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                position: "right",
            },
        },
    };
    return (
        <div>
            <h3>Admin</h3>
            <h3>Bienvenido {userName}</h3>
            <Graficas data={data} options={options}/>
        </div>
    );
}

export default Admin;