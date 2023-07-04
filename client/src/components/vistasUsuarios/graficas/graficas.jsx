/* yarn add chart.js react-chartjs-2 */
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const Graficas = ({ datas, label }) => {
    
    const data = {
        labels: label,
        datasets: [
            {
                label: "# of Votes",
                data: datas,
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
            <Pie data={data} options={options} />
        </div>
    )
}

export default Graficas