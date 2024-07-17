DROP DATABASE IF EXISTS bikes_dev;
CREATE DATABASE bikes_dev;

\c bikes_dev;

CREATE TABLE bikes (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL,
    year INTEGER,
    price FLOAT NOT NULL,
    bike_type TEXT NOT NULL,
    frame TEXT,
    bike_weight FLOAT,
    is_new: BOOLEAN NOT NULL
);