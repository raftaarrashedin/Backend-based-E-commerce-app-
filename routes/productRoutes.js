const express = require('express')
const router = express.Router();

const {productValidation} = require('../validation/productValidation')
const productController = require('../controllers/productController')

router.post('/product',productValidation,productController.product)