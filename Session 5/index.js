
const express = require("express");
const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const productRoutes = require("./routes/product");
const apiProductRoutes = require("./routes/api_product");

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}));
app.use(jsonBodyParser);
app.use('/api/Product', apiProductRoutes)
app.use('/product', productRoutes);
app.use('/', (req, res) => {
    res.status(200).send("<h1>Hello world from Express</h1>");
});

app.listen("8030");
console.log("Express is listening on 8030");