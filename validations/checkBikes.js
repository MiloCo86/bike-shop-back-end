const checkMake = (req, res, next) => {
    const { make } = req.body;
        if (make) {
            next();
        } else {
            res.status(400).json({ error: "Name of bike manufacturer is required."})
        }
};

const checkYear = (req, res, next) => {
    const { year } = req.body;

    let today = new Date();
        if (typeof year === "number" && year > 0 && year <= Number(today.getFullYear()) ) {
            next();
        } else {
            res.status(400).json({error: `Year must be a four digit integer greater than zero and less than or including this year`})
        }
}

const checkPrice = (req, res, next) => {
    const { price } = req.body;
    if (price > 0) {
        next();
    } else {
        res.status(400).json({ error: "Price must be greater than 0"})
    }
}

    const checkWeight = (req, res, next) => {
        const { bike_weight } = req.body;
        if (bike_weight > 0) {
            next();
        } else {
            res.status(400).json({ error: "Weight must be greater than 0"})
        }
}

const checkStock = (req, res, next) => {
    const { in_stock } = req.body;
    if (in_stock > 0) {
        next();
    } else {
        res.status(400).json({ error: "Stock must be greater than 0"})
    }
}

module.exports = { checkMake, checkYear, checkPrice, checkWeight, checkStock }