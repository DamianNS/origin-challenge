CREATE TABLE `origindb`.`operaciones` (
  `terjeta` VARCHAR(16) NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `operacion` VARCHAR(7) NOT NULL,
  `monto` DECIMAL(12,2) NOT NULL,
  PRIMARY KEY (`terjeta`, `fecha`),
  CONSTRAINT `FK_TARJETA`
    FOREIGN KEY (`terjeta`)
    REFERENCES `origindb`.`tarjetas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
