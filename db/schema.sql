CREATE DATABASE burgers_db;

USE burgers_db;

DROP TABLE burgers;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    eaten_status boolean NOT NULL,
	PRIMARY KEY (id)
);