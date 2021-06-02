CREATE DATABASE todo;

CREATE TABLE todo_list (
  id SERIAL NOT NULL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);


CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT NOT NULL check(rating >=1 and rating <=5)
);