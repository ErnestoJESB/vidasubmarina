CREATE DATABASE Ejemplo;
USE Ejemplo;

CREATE TABLE `Cliente` (
    `cliente_id` bigint PRIMARY KEY  NOT NULL,
    `nombre` VARCHAR(255) NOT NULL,
    `apellido` VARCHAR(255) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `correo_electronico` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(15) NOT NULL,
	`created_at` timestamp NULL DEFAULT NULL,
    `updated_at` timestamp NULL DEFAULT NULL
    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;




CREATE TABLE `Proveedor` (
    `proveedor_id` bigint PRIMARY KEY NOT NULL,
    `nombre_empresa` VARCHAR(255) NOT NULL,
    `contacto_nombre` VARCHAR(255) NOT NULL,
    `correo_electronico` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(15) NOT NULL
);

CREATE TABLE `Establecimiento` (
    `establecimiento_id` bigint PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(15) NOT NULL
);

CREATE TABLE `Productos` (
    `producto_id` bigint PRIMARY KEY,
    `nombre` VARCHAR(255)NOT NULL,
    `descripcion` TEXT NOT NULL,
    `precio` decimal(8,2) NOT NULL,
    `proveedor_id` bigint -- Clave foránea que hace referencia al proveedor
);

ALTER TABLE `Productos`
  ADD CONSTRAINT `Productos_proveedor_id_foreign` FOREIGN KEY (`proveedor_id`) REFERENCES `Proveedor` (`proveedor_id`);


CREATE TABLE `Historial_de_Pedidos` (
    `pedido_id` bigint PRIMARY KEY,
    `cliente_id` bigint, -- Clave foránea que hace referencia al cliente
    `producto_id` bigint, -- Clave foránea que hace referencia al producto
    `cantidad` bigint,
    `fecha_pedido`  timestamp NULL DEFAULT NULL,
    `establecimiento_id` bigint -- Clave foránea que hace referencia al establecimiento
);
ALTER TABLE `Historial_de_Pedidos`
  ADD CONSTRAINT `Historial_de_Pedidos_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente` (`cliente_id`),
  ADD CONSTRAINT `Historial_de_Pedidos_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `Proveedor` (`proveedor_id`),
  ADD CONSTRAINT `Historial_de_Pedidos_establecimiento_id_foreign` FOREIGN KEY (`establecimiento_id`) REFERENCES `Establecimiento` (`establecimiento_id`);



CREATE TABLE `Notificaciones` (
    `notificacion_id` bigint PRIMARY KEY,
    `cliente_id` bigint, -- Clave foránea que hace referencia al cliente o proveedor destinatario
    `mensaje` VARCHAR(255)NOT NULL,
    `fecha_envio` timestamp NULL DEFAULT NULL,
    `leido`  tinyint(1) NOT NULL
);

ALTER TABLE `Notificaciones`
  ADD CONSTRAINT `Notificaciones_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente` (`cliente_id`);


CREATE TABLE `Comentarios` (
    `comentario_id` bigint PRIMARY KEY,
    `cliente_id` bigint, -- Clave foránea que hace referencia al cliente que dejó el comentario
    `producto_id` bigint, -- Clave foránea que hace referencia al producto comentado
    `establecimiento_id` bigint, -- Clave foránea que hace referencia al establecimiento comentado
    `comentario` VARCHAR(255)NOT NULL,
    `fecha_comentario` timestamp NULL DEFAULT NULL
);

ALTER TABLE `Comentarios`
  ADD CONSTRAINT `Comentarios_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente` (`cliente_id`),
  ADD CONSTRAINT `Comentarios_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `Productos` (`producto_id`),
  ADD CONSTRAINT `Comentarios_establecimiento_id_foreign` FOREIGN KEY (`establecimiento_id`) REFERENCES `Establecimiento` (`establecimiento_id`);


