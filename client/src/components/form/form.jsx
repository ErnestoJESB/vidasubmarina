import React, { useState, useEffect } from "react";
import "./form.css"

const Form = () => {
    const [customersData, setCustomersData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/mostrar')
            .then(response => response.json())
            .then(data => {
                setCustomersData(data.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <section className="centrar">
            <table className="form-table">
                <tbody>
                    {customersData && customersData.map((customer, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone}</td>
                            <td>
                                <a href={`/delete/${customer.id}`} className="btn btn-danger">Delete</a>
                                <a href={`/update/${customer.id}`} className="btn btn-info">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* {customersData && customersData.map((customer, i) => (
                <tr key={i}>
                    <h1>{customer.name}</h1>
                    <h1>{customer.address}</h1>
                </tr>
            ))} */}
        </section>
    );

};

export default Form;
