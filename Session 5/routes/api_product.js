
const express = require("express");
const apiController = require("../controllers/api_product");

const router = express.Router();

router.get('/', apiController.get);
router.post('/', apiController.add);

module.exports = router;