CREATE TABLE `origindb`.`tarjetas` (
  `id` VARCHAR(16) NOT NULL,
  `pin` INT NULL,
  `lock` TINYINT NULL,
  `balance` DECIMAL(12,2) NULL,
  PRIMARY KEY (`id`));