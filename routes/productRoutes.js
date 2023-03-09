const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../controllers/productController');

router.get('/', getAllProducts);

router.post('/', createProduct);

module.exports = router;