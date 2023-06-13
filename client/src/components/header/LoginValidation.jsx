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

    if (values.password === "") {  
        error.password = "Debe ingresar una contraseña";
    } else if (!password_pattern.test(values.password)) {
        error.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número";
    }
    else {
        error.password = "";
    }
    return error;

}
export default Validation;