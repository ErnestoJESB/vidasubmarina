const Condominios_Data = () => {
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
    
}

export default Condominios_Data