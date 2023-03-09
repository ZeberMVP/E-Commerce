const { Product, Provider } = require('../config/db');

const createProduct = async (req, res) => {
    const { product_name, description, image, price, provider_name } = req.body;

    try {
        // Check if a product already has the same name
        const product = await Product.findOne({ where: { product_name } });
        if (product) {
            return res.status(409).send({ message: 'This name is already taken' });
        }

        // Create product
        const newProduct = await Product.create({ product_name, description, image, price, provider_name });
        res.status(201).send(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'There was an error' });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        res.status(200).json(products);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error, GET Method');
    }
}

module.exports = {
    createProduct,
    getAllProducts
};