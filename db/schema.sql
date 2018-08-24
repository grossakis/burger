DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (

  -- TABLE CODE TO GO HERE
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(55) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)

);

SELECT * FROM burgers;