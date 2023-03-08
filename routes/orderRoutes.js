const express = require('express');
const router = express.Router();
const { proccessOrder } = require('../controllers/orderController');

router.post('/', proccessOrder);

module.exports = router;