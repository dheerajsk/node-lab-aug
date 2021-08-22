const express = require("express");

const router = express.Router();
const productController = require("../controllers/product");

router.post('/add', productController.add);
router.post('/update', productController.update);
router.get('/add', productController.getAddForm);
router.get('/update', productController.getUpdateForm);
router.get('/', productController.getProducts);

module.exports = router;