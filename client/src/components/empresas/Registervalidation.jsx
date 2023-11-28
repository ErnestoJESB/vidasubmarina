function Validation(values) {
    let error = {};
    if (!values.empresa) {
        error.empresa = "El nombre de la empresa es requerido";
    }
    if (!values.phone) {
        error.phone = "El teléfono de la empresa es requerido";
    } else if (values.phone.length < 10) {
        error.phone = "El teléfono debe tener al menos 10 dígitos";
    }
    if (!values.email) {
        error.email = "El correo electrónico de la empresa es requerido";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        error.email = "El correo electrónico es inválido";
    }
    if (!values.address) {
        error.address = "La dirección de la empresa es requerida";
    }
    if (!values.image) {
        error.image = "La imagen de la empresa es requerida";
    }
    if (!values.userid) {
        error.userid = "El id del usuario es requerido";
    }
    return error;
}
export default Validation;