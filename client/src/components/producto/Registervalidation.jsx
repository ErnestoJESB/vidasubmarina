function Validation(values) {
    let error = {};
    const nombre_pattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
    const cantidad_pattern = /^[0-9]+$/;
    const precio_pattern = /^[0-9]+$/;
    const descripcion_pattern = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

    if (values.nombre === "") {
        error.nombre = "Debe ingresar un nombre";
    }
    else if (!nombre_pattern.test(values.nombre)) {
        error.nombre = "El nombre es invalido";
    } else {
        error.nombre = "";
    }

    if (values.cantidad === "") {
        error.cantidad = "Debe ingresar una cantidad";
    }
    else if (!cantidad_pattern.test(values.cantidad)) {
        error.cantidad = "La cantidad es invalida";
    } else {
        error.cantidad = "";
    }

    if (values.precio === "") {
        error.precio = "Debe ingresar un precio";
    }
    else if (!precio_pattern.test(values.precio)) {
        error.precio = "El precio es invalido";
    } else {
        error.precio = "";
    }

    if (values.unidad === "") {
        error.unidad = "Debe ingresar una unidad de medida";
    }
    else if (values.unidad === "Selecciona una opción") {
        error.unidad = "Debe seleccionar una opción";
    } else {
        error.unidad = "";
    }

    if (values.descripcion === "") {
        error.descripcion = "Debe ingresar una descripción";
    }
    else if (!descripcion_pattern.test(values.descripcion)) {
        error.descripcion = "La descripción es invalida";
    } else {
        error.descripcion = "";
    }
    return error;
}
export default Validation;