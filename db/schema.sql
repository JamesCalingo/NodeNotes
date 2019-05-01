DROP DATABASE IF EXISTS notetaker_db;
CREATE DATABASE notetaker_db;

USE notetaker_db;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);