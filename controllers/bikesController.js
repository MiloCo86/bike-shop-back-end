const express = require('express')
const bikes = express.Router()

//import queries

const { getAllBikes ,getBike, addBike, deleteBike, updateBike, getNewBikes, getUsedBikes } = require('../db-queries/bikes')

//import validations

const { checkMake, checkYear, checkPrice, checkWeight, checkStock } = require('../validations/checkBikes')

// Index Routes: gets all bikes
// localhost:4001/bikes/

bikes.get('/', async(req,res)=>{
    const bikes = await getAllBikes()
    if (bikes[0]) {
        res.status(200).json(bikes);
      } else {
        res.status(500).json({ error: "server error" });
      }
});

bikes.get('/new', async(req,res)=>{
  const bikes = await getNewBikes()
  if (bikes[0]) {
      res.status(200).json(bikes);
    } else {
      res.status(500).json({ error: "There are no new bikes." });
    }
});

bikes.get('/used', async(req,res)=>{
  const bikes = await getUsedBikes()
  if (bikes[0]) {
      res.status(200).json(bikes);
    } else {
      res.status(500).json({ error: "There are no used bikes." });
    }
});

bikes.get('/:id', async (req,res)=>{
  const { id } = req.params
  const bike = await getBike(id)
  if (bike.id) {
    res.json(bike);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

bikes.post("/", checkMake, checkYear, checkPrice, checkWeight, checkStock, async (req, res) => {
  const bike = await addBike(req.body);
  res.json(bike);
});

bikes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedBike = await deleteBike(id);
  if (deletedBike.id) {
    res.status(200).json(deletedBike);
  } else {
    res.status(404).json("Bike not found");
  }
});

bikes.put("/:id", checkMake, checkYear, checkPrice, checkWeight, checkStock, async (req, res) => {
  const { id } = req.params;
  const updatedBike = await updateBike(id, req.body);
  res.status(200).json(updatedBike);
});






module.exports = bikes;