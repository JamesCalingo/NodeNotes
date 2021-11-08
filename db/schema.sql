DROP DATABASE IF EXISTS sticky-nodes;
CREATE DATABASE sticky-nodes;

USE sticky-nodes;

CREATE TABLE notes (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  created_at DATETIME default NOW(),
  PRIMARY KEY (id)
);
