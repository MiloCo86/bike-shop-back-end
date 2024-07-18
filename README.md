# bike-shop-back-end
## Description 🪧

A back-end application for a bike shop inventory management system. It provides a RESTful API for managing bike records, including functionalities to view, add, update, and delete bikes from the inventory.

## Authors 🧑‍💻

Brendan O'Brien
Camilo Paez
Vianel De La Cruz

## Technologies Used 🛠️

- Node.js
- Express.js
- PostgreSQL


## Scripts ⌨️

`npm start`: Start the server
`db:init`: Initialize the database
`db:seed`: Add initial values for testing

## How It Works? 📦

1. Clone the repository
2. Run `npm install` to install dependencies
3. Set up your PostgreSQL database
4. Run `npm run db:init` to initialize the database
5. Run `npm run db:seed` to add sample data 

## Data Endpoints 🚀

- `GET /bikes`: Get all of the bikes
- `GET /bikes/:id`: Get a specific bike
- `POST /bikes`: Add a new bike
- `PUT /bikes/:id`: Update a bike
- `DELETE /bikes/:id`: Delete a bike

## Input ⬇️

To add a new bike or update an existing one, send a JSON object in the request body, including both required and optional properties as detailed below:

- `make`: Brand of the bike **(required, non-empty string)**
- `model`: The model of the bike **(required, non-empty string)**
- `year`: Year the bike was made **(YYYY format)**
- `price`: Price of the bike **(required, number)**
- `bike_type`: Type of bike **(required, string)**
- `frame`: Frame material **(string)**
- `bike_weight`: Weight of the bike in kg **(number)**
- `is_new`: Whether the bike is new or used **(required, boolean)**
- `in_stock`: Whether the bike is currently in stock **(required, number)**
- `img_url`: The url of the bike image **(string)**

## Example JSON 📄

```json
{
    "make": "Trek",
    "model": "Fx-1",
    "year": "2011",
    "price": 399.99,
    "bike_type": "Mountain",
    "frame": "Aluminum",
    "bike_weight": 13.5,
    "is_new": true,
    "in_stock": true,
    "img_url": "http:/samplestring/test-img.png"
}
```

