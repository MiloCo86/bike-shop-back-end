const express = require('express')
const shopCart = express.Router()

//import queries

const { getAllShopCart } =  require('../db-queries/shopCart');


//import validations



// Index Routes: gets all elements in shopCart
// localhost:4001/shopCart/

shopCart.get('/', async(req,res)=>{
    const shopCart = await getAllShopCart()
    if (shopCart[0]) {
        res.status(200).json(shopCart);
      } else {
        res.status(500).json({ error: "server error" });
      }
});

// Update quantity of an item

// Delete an element from the shop cart

// Empty the shop cart



module.exports = shopCart