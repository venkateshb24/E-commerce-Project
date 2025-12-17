const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { getProducts } = require("../controller/productController");

// PROTECTED ROUTE
router.get("/", auth, getProducts);

module.exports = router;