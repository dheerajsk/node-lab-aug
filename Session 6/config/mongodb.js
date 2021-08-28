const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb://127.0.0.1:27017/ProductDB";

exports.connect = () => {
    MongoClient.connect(uri)
        .then(
            (client) => {
                console.log("Mongodb connected");
            }
        ).catch(
            err => { console.log(err); }
        )
}