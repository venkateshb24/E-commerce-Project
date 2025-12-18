const express = require("express");
const cors = require("cors");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");




const connectDB = require("./db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(cors({
    origin:"http://13.61.194.214:4000",
    credentials: true
}));
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// DB
connectDB();

// routes
app.use("/api/auth", authRoutes);

module.exports = app;