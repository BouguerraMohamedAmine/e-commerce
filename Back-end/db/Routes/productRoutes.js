const express = require('express');
const productController = require('../Controllers/productControllers'); // Corrected path

const router = express.Router();

router.post('/products', productController.createProduct); // Corrected function name
router.get('/products', productController.getProducts); // Corrected function name
router.get('/products/:id', productController.getProductById); // Corrected function name
router.put('/products/:id', productController.updateProduct); // Corrected function name
router.delete('/products/:id', productController.deleteProduct); // Corrected function name
router.get('/products/reviews', productController.getProductsByReviews); // Corrected function name
router.get('/products/name/:name', productController.getProductByName); // Corrected function name
router.get('/products/category/:category' , productController.getProductsByCategory)
module.exports = router;
