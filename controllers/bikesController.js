const express = require('express')
const bikes = express.Router()

//import queries

const { getAllBikes ,getBike, addBike, deleteBike, updateBike } = require('../db-queries/bikes')

//import validations


// Index Routes: gets all bikes
// localhost:4001/bikes/

bikes.get('/', async(req,res)=>{
    const allbikes = await getAllBikes()
    if (allbikes[0]) {
        res.status(200).json(allbikes);
      } else {
        res.status(500).json({ error: "server error" });
      }
})

bikes.get('/:id', async (req,res)=>{
  const { id } = req.params
  const bike = await getBike(id)
  if (bike.id) {
    res.json(bike);
  } else {
    res.status(404).json({ error: "not found" });
  }
})

bikes.post("/", async (req, res) => {
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

bikes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBike = await updateBike(id, req.body);
  res.status(200).json(updatedBike);
});






module.exports = bikes;