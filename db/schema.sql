DROP DATABASE IF EXISTS nodenotes;
CREATE DATABASE nodenotes;

USE nodenotes;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);
