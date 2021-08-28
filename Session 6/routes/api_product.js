
const express = require("express");
const apiController = require("../controllers/api_product");

const router = express.Router();

router.get('/', apiController.get);
router.post('/', apiController.add);
router.put('/', apiController.update);
router.delete('/', apiController.delete)

module.exports = router;