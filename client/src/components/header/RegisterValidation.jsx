function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (values.email === "") {
        error.email = "Debe ingresar un email";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "El email es invalido";
    } else {
        error.email = "";
    }

    if (values.name === "") {
        error.name = "Debe ingresar un nombre";
    }
    else if (values.name.length < 3) {
        error.name = "El nombre debe tener al menos 3 caracteres";
    } else {
        error.name = "";
    }

    if (values.lastname === "") {
        error.lastname = "Debe ingresar un apellido";
    }
    else if (values.lastname.length < 3) {
        error.lastname = "El apellido debe tener al menos 3 caracteres";
    } else {
        error.lastname = "";
    }

    if (values.number === "") {
        error.number = "Debe ingresar un número de teléfono";
        }
    else if (values.number.length < 10) {
        error.number = "El número de teléfono debe tener al menos 10 caracteres";
    } else {
        error.number = "";
    }

    if (values.address === "") {
        error.address = "Debe ingresar una dirección";
    }
    else if (values.address.length < 3) {
        error.address = "La dirección debe tener al menos 3 caracteres";
    } else {
        error.address = "";
    }

    if (values.password === "") {
        error.password = "Debe ingresar una contraseña";
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número";
    }
    else {
        error.password = "";
    }

    if (values.password2 === "") {
        error.password2 = "Debe confirmar la contraseña";
    }
    else if (values.password2 !== values.password) {
        error.password2 = "Las contraseñas no coinciden";
    }
    else {
        error.password2 = "";
    }
    return error;
    

}
export default Validation;