CREATE DATABASE todo;

CREATE TABLE todo_list (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);