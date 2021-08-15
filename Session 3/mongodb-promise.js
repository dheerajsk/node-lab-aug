
const mongodb = require("mongodb");

const uri = "mongodb+srv://test:test@cluster0.cbdyt.mongodb.net/EmployeeDB?retryWrites=true&w=majority";

const mongoclient = mongodb.MongoClient;

// const client = new mongoclient(uri, {useNewUrlParser: true});

const result = mongoclient.connect(uri);

    result.then(
        (client)=>{
            console.log("MongoDb is connceted");
            const collection = client.db('EmployeeDB').collection('Employee');
            collection.insertOne({name:'Dheeraj', role: 'Trainer'})
            .then(
            ()=>{
                console.log("Document inserted");
            }
        ).catch((err)=> console.log(err))
    }
);

function add(a, b){

}

add(1, 2)
add(10)
add();
