const express = require('express');
const router = express.Router();
const { createProvider, getProviderByProduct } = require('../controllers/providerController');

router.get('/:product_name', getProviderByProduct);

router.post('/', createProvider);


module.exports = router;