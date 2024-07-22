const db = require('../db/dbConfig')

const getAllShopCart = async () => {
    try{
        const allShopCart = await db.any('SELECT * FROM shopCart')
        return allShopCart

        } catch(error){
            return error
        }
}

const addElementToShopCart = async (element) => {
    try{
        const newElement = await db.one(
            'INSERT INTO shopCart (id, make, model, price, quantity) VALUES ($1,$2,$3,$4,$5) RETURNING *', 
            [element.id, element.make, element.model, element.price, element.quantity]
        )
        return newElement

        } catch (error){
            return error
        }
}

const updateShopCartItem = async (txn_id, quantity) => {
    try{
        const updatedShopCart = await db.one(
            'UPDATE shopCart SET quantity = $1 WHERE txn_id = $2 RETURNING *', 
            [quantity, txn_id]
        )
        return updatedShopCart
 
        } catch (error){
            return error
        }

}

const deleteShopCartItem = async (txn_id) => {
    try{
        const deleteShopCartItem = await db.one(
            'DELETE FROM shopCart WHERE txn_id = $1 RETURNING *', 
            txn_id
        )
        return deleteShopCartItem

        } catch (error){
            return error
        }
}

const emptyShopCart = async () => {
    try{
        const ShopCart = await db.any(
            'TRUNCATE TABLE shopCart',       
        )
        return ShopCart

        } catch (error){
            return error
        }
}



module.exports = { getAllShopCart, updateShopCartItem, deleteShopCartItem, emptyShopCart, addElementToShopCart}