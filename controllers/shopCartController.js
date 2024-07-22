const express = require('express')
const shopCart = express.Router()

//import queries

const { getAllShopCart, updateShopCartItem, deleteShopCartItem, emptyShopCart, addElementToShopCart } =  require('../db-queries/shopCart');


//import validations



// Index Routes: gets all elements in shopCart
// localhost:PORT/shopCart/

shopCart.get('/', async(req,res)=>{
    const shopCart = await getAllShopCart()
    if (shopCart) {
        res.status(200).json(shopCart);
      } else {
        res.status(500).json({ error: "server error" });
      }
});

// add item to shopCart

shopCart.post("/", async (req, res) => {
  const element = await addElementToShopCart(req.body);
  res.json(element);
});

// Update quantity of an item

shopCart.put("/:txn_id", async (req, res) => {
  const { txn_id } = req.params;
  const { quantity } = req.body;
  const updatedShopCart = await updateShopCartItem(txn_id, quantity);
  res.status(200).json(updatedShopCart);
});

// Delete an element from the shop cart

shopCart.delete("/:txn_id", async (req, res) => {
  const { txn_id } = req.params;
  const deletedShopCartItem = await deleteShopCartItem(txn_id);
  if (deletedShopCartItem.txn_id) {
    res.status(200).json(deletedShopCartItem);
  } else {
    res.status(404).json("ShopCart element not found");
  }
});

// Empty the shop cart

shopCart.delete("/", async (req, res) => {
  const emptyCart = await emptyShopCart();
  if (emptyCart) {
    res.status(200).json(emptyCart);
  } else {
    res.status(404).json("Cart is not empty");
  }
});


module.exports = shopCart