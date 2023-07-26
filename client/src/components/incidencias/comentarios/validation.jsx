function Validation(values){
    let error ={};
    if(values.comentario === ""){
        error.comentario = "El comentario es requerido";
    }
    return error;
}

export default Validation;