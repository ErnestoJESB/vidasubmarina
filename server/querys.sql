/* vista para ticket de pedido */
SELECT user.name, user.email, user.phone, pedidos.fecha, pedidos.precio_unitario, pedidos.cantidad, pedidos.total, pedidos.nota, productos.nombre, productos.image, productos.descripcion
FROM user
INNER JOIN pedidos_user ON user.id = pedidos_user.user_id
INNER JOIN pedidos ON pedidos_user.pedidos_id = pedidos.id
INNER JOIN productos ON pedidos.idproductos = productos.idproductos;

/* esta es su view */
SELECT * FROM vidasub.ticket;

/* llama a todos los productos por medio del id de la empresa */
CALL productosEmpresa(id);
/* ---------------------------- */
SELECT nombre, cantidad, unidad_medida, image, descripcion
FROM vidasub.productos
WHERE idempresa = empresaID;
/* ---------------------------- */

/* Llama a todas las empresas */
SELECT * FROM vidasub.empresas;
