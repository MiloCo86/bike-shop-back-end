const db = require('../db/dbConfig')

const getAllShopCart = async () => {
    try{
        const allShopCart = await db.any('SELECT * FROM shopCart')
        return allShopCart

        } catch(error){
            return error
        }
}

module.exports = { getAllShopCart}