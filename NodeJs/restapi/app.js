var express = require('express');
const app = express();
const port = 8210;


var employee =[
    {
        "id":1,
        "name":"Amar"
    },
    {
        "id":2,
        "name":"Akbar"
    },
    {
        "id":3,
        "name":"Anthony"
    },
    {
        "id":4,
        "name":"John"
    },
    {
        "id":5,
        "name":"Ankit"
    }
]
    
//get

app.get('/', (req,res)=>{
    res.send("Welcome to Node Api.");
});

// Employee
app.get('/employee', (req,res)=>{
    res.send(employee);
});

app.listen(port, () =>{
    console.log(`Listening on port number ${port}`);
});



const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
// const MongoUrl =  "mongodb://localhost:27017";
const MongoUrl = "mongodb+srv://gaurav:grkml786786@cluster0.gpu6p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

let db ;

    
//get

app.get('/', (req,res)=>{
    res.send("Welcome to Node Api.");
});


// Employee
app.get('/location', (req,res)=>{
    db.collection('location').find().toArray((err, result )=>{
        if(err) throw err;
        res.send(result);
    });
});


MongoClient.connect(MongoUrl , (err, client)=>{
    if (err)
    console.log('Error while connecting.');
    db = client.db('Zomato');
    app.listen(port, ()=>{
        console.log(`listening on port number ${port}`);
    });
});
