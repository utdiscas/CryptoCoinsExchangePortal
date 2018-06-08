BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS `crypto_coin` (
	`id`	BIGINT NOT NULL,
	`contact`	BOOLEAN NOT NULL,
	`email`	VARCHAR,
	`coin_type`	VARCHAR,
	`name`	VARCHAR,
	`phone`	VARCHAR,
	`purchase_date`	DATETIME,
	`purchase_price`	NUMERIC,
	`amount_of_coins`	NUMERIC,
	PRIMARY KEY(`id`)
);
INSERT INTO `crypto_coin` VALUES (1,1,'jeff@crypto_coins.com','Bitcoin','Jeff Miller','328-443-5555',4419619200000,1100,13);
INSERT INTO `crypto_coin` VALUES (2,0,'samantha@crypto_coins.com','Ripple','Samantha Davis','448-397-5555',4419619200000,1999,1);
INSERT INTO `crypto_coin` VALUES (3,1,'dave@crypto_coins.com','Bitcoin','Dave Warren','563-891-5555',4419619200000,2100,12);
COMMIT;
