DROP DATABASE IF EXISTS bikes_dev;
CREATE DATABASE bikes_dev;

\c bikes_dev;

CREATE TABLE bikes (
    id SERIAL PRIMARY KEY,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER,
    price FLOAT NOT NULL,
    bike_type TEXT NOT NULL,
    frame TEXT,
    bike_weight FLOAT,
    is_new BOOLEAN NOT NULL,
    in_stock INTEGER NOT NULL,
    img_url TEXT
);

CREATE TABLE shopCart (
    txn_id SERIAL PRIMARY KEY,
    id INTEGER NOT NULL,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    price FLOAT NOT NULL,
    quantity INTEGER NOT NULL
);