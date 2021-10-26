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
