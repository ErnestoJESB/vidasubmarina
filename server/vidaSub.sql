-- MySQL Script generated by MySQL Workbench
-- Sun Nov 19 10:32:08 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vidaSub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vidaSub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vidaSub` DEFAULT CHARACTER SET utf8 ;
USE `vidaSub` ;

-- -----------------------------------------------------
-- Table `vidaSub`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `proveedor` ENUM('proveedor', 'cliente') NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vidaSub`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`empresa` (
  `idempresa` INT NOT NULL AUTO_INCREMENT,
  `empresa` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `image` VARCHAR(85) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`idempresa`),
  CONSTRAINT `fk_empresa_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `vidaSub`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vidaSub`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`productos` (
  `idproductos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `cantidad` VARCHAR(45) NULL,
  `unidad_medida` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `idempresa` INT NOT NULL,
  PRIMARY KEY (`idproductos`, `idempresa`),
  CONSTRAINT `fk_productos_empresa1`
    FOREIGN KEY (`idempresa`)
    REFERENCES `vidaSub`.`empresa` (`idempresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vidaSub`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATE NULL,
  `precio_unitario` VARCHAR(45) NULL,
  `cantidad` VARCHAR(45) NULL,
  `total` VARCHAR(45) NULL,
  `nota` VARCHAR(45) NULL,
  `idproductos` INT NOT NULL,
  `idempresa` INT NOT NULL,
  PRIMARY KEY (`id`, `idproductos`, `idempresa`),
  CONSTRAINT `fk_pedidos_productos1`
    FOREIGN KEY (`idproductos` , `idempresa`)
    REFERENCES `vidaSub`.`productos` (`idproductos` , `idempresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vidaSub`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`comentarios` (
  `idcomentarios` INT NOT NULL AUTO_INCREMENT,
  `comentario` VARCHAR(45) NULL,
  `fecha` DATE NULL,
  `pedidos_id` INT NOT NULL,
  `idproductos` INT NOT NULL,
  `idempresa` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`idcomentarios`, `pedidos_id`, `idproductos`, `idempresa`, `user_id`),
  CONSTRAINT `fk_comentarios_pedidos_has_user1`
    FOREIGN KEY (`pedidos_id` , `idproductos` , `idempresa` , `user_id`)
    REFERENCES `vidaSub`.`pedidos_has_user` (`pedidos_id` , `idproductos` , `idempresa` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vidaSub`.`pedidos_has_user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`pedidos_has_user` (
  `pedidos_id` INT NOT NULL AUTO_INCREMENT,
  `idproductos` INT NOT NULL,
  `idempresa` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`pedidos_id`, `idproductos`, `idempresa`, `user_id`),
  CONSTRAINT `fk_pedidos_has_user_pedidos1`
    FOREIGN KEY (`pedidos_id` , `idproductos` , `idempresa`)
    REFERENCES `vidaSub`.`pedidos` (`id` , `idproductos` , `idempresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `vidaSub`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vidaSub`.`comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vidaSub`.`comentarios` (
  `idcomentarios` INT NOT NULL AUTO_INCREMENT,
  `comentario` VARCHAR(45) NULL,
  `fecha` DATE NULL,
  `pedidos_id` INT NOT NULL,
  `idproductos` INT NOT NULL,
  `idempresa` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`idcomentarios`, `pedidos_id`, `idproductos`, `idempresa`, `user_id`),
  CONSTRAINT `fk_comentarios_pedidos_has_user1`
    FOREIGN KEY (`pedidos_id` , `idproductos` , `idempresa` , `user_id`)
    REFERENCES `vidaSub`.`pedidos_has_user` (`pedidos_id` , `idproductos` , `idempresa` , `user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
