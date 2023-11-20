CREATE DATABASE  IF NOT EXISTS `vidasub` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vidasub`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: vidasub
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `idcomentarios` int NOT NULL AUTO_INCREMENT,
  `comentario` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `pedidos_id` int NOT NULL,
  `idproductos` int NOT NULL,
  `idempresa` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`idcomentarios`,`pedidos_id`,`idproductos`,`idempresa`,`user_id`),
  KEY `fk_comentarios_pedidos_has_user1` (`pedidos_id`,`idproductos`,`idempresa`,`user_id`),
  CONSTRAINT `fk_comentarios_pedidos_has_user1` FOREIGN KEY (`pedidos_id`, `idproductos`, `idempresa`, `user_id`) REFERENCES `pedidos_user` (`pedidos_id`, `idproductos`, `idempresa`, `user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Está muy caro','2023-11-19',1,1,1,1);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `idempresa` int NOT NULL AUTO_INCREMENT,
  `empresa` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `image` varchar(85) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`idempresa`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  CONSTRAINT `fk_empresa_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
INSERT INTO `empresa` VALUES (1,'Netosoft','99999','neto@neto.com','MX','neto.png',1),(5,'ABC Solutions','123-456-7890','info@abcsolutions.com','123 Main Street, Anytown, USA','abc_logo.jpg',4),(6,'XYZ Innovations','7443539880','info@xyzinnovations.com','456 Oak Avenue, Another City, USA','xyz_logo.jpg',2),(7,'Global Services Corp','555-123-4567','info@globalservices.com','789 Elm Street, Metropolitan City, USA','global_logo.jpg',3);
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!50001 DROP VIEW IF EXISTS `empresas`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `empresas` AS SELECT 
 1 AS `idempresa`,
 1 AS `empresa`,
 1 AS `phone`,
 1 AS `email`,
 1 AS `address`,
 1 AS `image`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha` date DEFAULT NULL,
  `precio_unitario` varchar(45) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `total` varchar(45) DEFAULT NULL,
  `nota` varchar(45) DEFAULT NULL,
  `idproductos` int NOT NULL,
  `idempresa` int NOT NULL,
  PRIMARY KEY (`id`,`idproductos`,`idempresa`),
  KEY `fk_pedidos_productos1` (`idproductos`,`idempresa`),
  CONSTRAINT `fk_pedidos_productos1` FOREIGN KEY (`idproductos`, `idempresa`) REFERENCES `productos` (`idproductos`, `idempresa`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,'2023-11-19','25.00','5','125.00','Pedido de prueba',1,1);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidos_user`
--

DROP TABLE IF EXISTS `pedidos_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos_user` (
  `pedidos_id` int NOT NULL AUTO_INCREMENT,
  `idproductos` int NOT NULL,
  `idempresa` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`pedidos_id`,`idproductos`,`idempresa`,`user_id`),
  KEY `fk_pedidos_has_user_user1` (`user_id`),
  CONSTRAINT `fk_pedidos_has_user_pedidos1` FOREIGN KEY (`pedidos_id`, `idproductos`, `idempresa`) REFERENCES `pedidos` (`id`, `idproductos`, `idempresa`),
  CONSTRAINT `fk_pedidos_has_user_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos_user`
--

LOCK TABLES `pedidos_user` WRITE;
/*!40000 ALTER TABLE `pedidos_user` DISABLE KEYS */;
INSERT INTO `pedidos_user` VALUES (1,1,1,1);
/*!40000 ALTER TABLE `pedidos_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idproductos` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `cantidad` varchar(45) DEFAULT NULL,
  `unidad_medida` varchar(45) DEFAULT NULL,
  `image` varchar(60) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  `idempresa` int NOT NULL,
  PRIMARY KEY (`idproductos`,`idempresa`),
  KEY `fk_productos_empresa1` (`idempresa`),
  CONSTRAINT `fk_productos_empresa1` FOREIGN KEY (`idempresa`) REFERENCES `empresa` (`idempresa`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Topén','15','KG','topen.png','Este producto se encuentra',1),(8,'Filete de Salmón','100','Kilogramo','salmont_filet_image.jpg','Filete fresco de salmón',1),(9,'Atún enlatado','200','Lata','canned_tuna_image.jpg','Atún enlatado de alta calidad',1),(10,'Pulpo Congelado','50','Kilogramo','frozen_octopus_image.jpg','Pulpo listo para cocinar',5),(11,'Sardinas en Conserva','150','Lata','canned_sardines_image.jpg','Sardinas en aceite de oliva',1),(12,'Camarones Frescos','80','Kilogramo','fresh_shrimp_image.jpg','Camarones frescos y listos para cocinar',1),(13,'Calamares Limpios','30','Kilogramo','cleaned_squid_image.jpg','Calamares limpios y listos para preparar',1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!50001 DROP VIEW IF EXISTS `ticket`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `ticket` AS SELECT 
 1 AS `name`,
 1 AS `email`,
 1 AS `phone`,
 1 AS `fecha`,
 1 AS `precio_unitario`,
 1 AS `cantidad`,
 1 AS `total`,
 1 AS `nota`,
 1 AS `nombre`,
 1 AS `image`,
 1 AS `descripcion`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `tipo_user` enum('proveedor','cliente') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Jose','Soberano','jose.jesb25@gmail.com','123','MX','999999','cliente'),(2,'John','Doe','john@example.com','password123','123 Oak Street, Cityville, USA','555-123-4567','cliente'),(3,'Alice','Smith','alice@example.com','securepass','456 Maple Avenue, Townsville, USA','987-654-3210','proveedor'),(4,'Bob','Johnson','bob@example.com','pass123','789 Pine Street, Villagetown, USA','123-456-7890','cliente'),(5,'Jose Ernesto','Soberano','jesobri15@hotmail.com','$2b$10$mw9BK6KsOCel1p5Le25.JOh.cJkMgQetd5pBS9YJROxuO6NboSS9m','Cancún','9932085583','cliente');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vidasub'
--

--
-- Dumping routines for database 'vidasub'
--
/*!50003 DROP PROCEDURE IF EXISTS `productosEmpresa` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `productosEmpresa`(IN empresaID INT)
BEGIN
SELECT nombre, cantidad, unidad_medida, image, descripcion
FROM vidasub.productos
WHERE idempresa = empresaID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `empresas`
--

/*!50001 DROP VIEW IF EXISTS `empresas`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `empresas` AS select `empresa`.`idempresa` AS `idempresa`,`empresa`.`empresa` AS `empresa`,`empresa`.`phone` AS `phone`,`empresa`.`email` AS `email`,`empresa`.`address` AS `address`,`empresa`.`image` AS `image` from `empresa` order by `empresa`.`idempresa` desc */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `ticket`
--

/*!50001 DROP VIEW IF EXISTS `ticket`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ticket` AS select `user`.`name` AS `name`,`user`.`email` AS `email`,`user`.`phone` AS `phone`,`pedidos`.`fecha` AS `fecha`,`pedidos`.`precio_unitario` AS `precio_unitario`,`pedidos`.`cantidad` AS `cantidad`,`pedidos`.`total` AS `total`,`pedidos`.`nota` AS `nota`,`productos`.`nombre` AS `nombre`,`productos`.`image` AS `image`,`productos`.`descripcion` AS `descripcion` from (((`user` join `pedidos_user` on((`user`.`id` = `pedidos_user`.`user_id`))) join `pedidos` on((`pedidos_user`.`pedidos_id` = `pedidos`.`id`))) join `productos` on((`pedidos`.`idproductos` = `productos`.`idproductos`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-19 19:46:18
