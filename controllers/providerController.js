const { Provider } = require('../config/db');

const createProvider = async (req, res) => {
    const { provider_name, CIF, address } = req.body;

    try {
        // Check if a provider already has the same name
        const provider = await Provider.findOne({ where: { provider_name } });
        if (provider) {
            return res.status(409).send({ message: 'This name is already taken' });
        }

        // Create provider
        const newProvider = await Provider.create({ provider_name, CIF, address });
        res.status(201).send(newProvider);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'There was an error' });
    }
};

const getProviderByProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ where: { product_name: req.params.product_name } })
        const provider = await Provider.findOne({ where: { provider_name: product.provider_name } })

        res.status(200).json(provider);
    } catch {
        console.log(err);
        res.status(500).send('Server Error, GET Method');
    }
}

module.exports = {
    createProvider,
    getProviderByProduct
}