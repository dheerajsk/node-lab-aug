
const express = require("express");
const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();
const productRoutes = require("./routes/product");
const apiProductRoutes = require("./routes/api_product");
const sqliteConfig = require('./config/sqlite');
const mongoConfig = require('./config/mongodb');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
// sqliteConfig.connect();
mongoConfig.connect();
app.use(jsonBodyParser);
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', (req, res) => {
    // Get username from request
    // Get traits of user-> role-> traits(Product/Post)
    // Get request path (api/Product/POST)
    // check if user's traits includes(Product/POST) then let request continue, else return 401
});
app.use('/api/Product', apiProductRoutes)
app.use('/product', productRoutes);


app.listen("8030");
console.log("Express is listening on 8030");