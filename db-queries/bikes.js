const db = require('../db/dbConfig')



const getAllBikes = async () => {
    try{
        const allBikes = await db.any('SELECT * FROM bikes')
        return allBikes

        } catch(error){
            return error
        }
}

const getBike = async (id) => {
    try{ 
         const bike = await db.one(
            'SELECT * FROM bikes WHERE id = $1', 
            id
        )
         return bike
        } catch (error){
            return error
        }
}

const getNewBikes = async (id) => {
    try {
        const newBikes = await db.any(
            'SELECT * FROM bikes WHERE is_new = TRUE;'
        );
        return newBikes;
        } catch(error){
            return error;
        }
}

const getUsedBikes = async (id) => {
    try {
        const favoriteBikes = await db.any(
            'SELECT * FROM bikes WHERE is_new = FALSE;'
        );
        return favoriteBikes;
        } catch(error){
            return error;
        }
}

const addBike = async (bike) => {
    try{
        const newBike = await db.one(
            'INSERT INTO bikes (make, model, year, price, bike_type, frame, bike_weight, is_new, in_stock, img_url) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *', 
            [bike.make, bike.model, bike.year, bike.price, bike.bike_type, bike.frame, bike.bike_weight, bike.is_new, bike.in_stock, bike.img_url]
        )
        return newBike

        } catch (error){
            return error
        }
}

const updateBike = async (id, bike) => {
    try{
        const updatedBike = await db.one(
            'UPDATE bikes SET make = $1, model = $2, year = $3, price = $4, bike_type = $5, frame = $6, bike_weight = $7, is_new = $8, in_stock = $9, img_url = $10 WHERE id = $11 RETURNING *', 
            [bike.make, bike.model, bike.year, bike.price, bike.bike_type, bike.frame, bike.bike_weight, bike.is_new, bike.in_stock, bike.img_url, id]
        )
        return updatedBike

        } catch (error){
            return error
        }

}

const deleteBike = async (id) => {
    try{
        const deletedBike = await db.one(
            'DELETE FROM bikes WHERE id = $1 RETURNING *', 
            id
        )
        return deletedBike

        } catch (error){
            return error
        }
}



module.exports = {getAllBikes, getBike, addBike, updateBike, deleteBike, getNewBikes, getUsedBikes }