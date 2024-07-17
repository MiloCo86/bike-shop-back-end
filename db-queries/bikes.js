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
         const bike = await db.one('SELECT * FROM bikes WHERE id = $1', id)
         return bike
        } catch (error){
            return error
        }
}

const addBike = async (bike) => {
    try{
        const newBike = await db.one('INSERT INTO bikes (brand, year, price, bike_type, frame, bike_weight, is_new) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [bike.brand, bike.year, bike.price, bike.bike_type, bike.frame, bike.bike_weight, bike.is_new])
        return newBike

        } catch (error){
            return error
        }
}

const updateBike = async (id, bike) => {
    try{
        const updatedBike = await db.one('UPDATE bikes SET brand = $1, year = $2, price = $3, bike_type = $4, frame = $5, bike_weight = $6, is_new = $7 WHERE id = $8 RETURNING *', [bike.brand, bike.year, bike.price, bike.bike_type, bike.frame, bike.bike_weight, bike.is_new, id])
        return updatedBike

        } catch (error){
            return error
        }

}

const deleteBike = async (id) => {
    try{
        const deletedBike = await db.one('DELETE FROM bikes WHERE id = $1 RETURNING *', id)
        return deletedBike

        } catch (error){
            return error
        }
}



module.exports = {getAllBikes, getBike, addBike, updateBike, deleteBike}