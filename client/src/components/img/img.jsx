const Imagen = () => {
    const [file, setFile] = useState(null)
    const [imageList, setImageList] = useState([])
    const [listUpdated, setListUpdated] = useState(false)

    useEffect(() => {
        fetch('http://localhost:3000/get')
            .then(res => res.json())
            .then(res => setImageList(res))
            .catch(err => {
                console.error(err)
            })
        setListUpdated(false)
    }, [listUpdated])
}

export default Imagen