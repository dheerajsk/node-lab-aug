
const express = require("express");
const productRoutes = require("./routes/product")
const app = express();

app.use('/product', productRoutes);
app.use('/', (req, res) => {
    res.status(200).send("<h1>Hello world from Express</h1>");
});

app.listen("8030");
console.log("Express is listening on 8030");