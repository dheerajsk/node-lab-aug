const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/ProductDB";

var collection;

exports.connect = () => {
    MongoClient.connect(uri)
        .then(
            (client) => {
                collection = client.db('ProductDB').collection('Products');
                console.log("Mongodb connected");
            }
        ).catch(
            err => { console.log(err); }
        )
}

exports.getCollection = () => { return collection; }
