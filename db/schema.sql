DROP DATABASE IF EXISTS bikes_dev;
CREATE DATABASE bides_dev;

\c bikes_dev;

CREATE TABLE bikes (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL,
    year INTEGER,
    price INTEGER,
    bikeType TEXT,
    frame TEXT,
    bikeWeight FLOAT,
    newBike: boolean
);