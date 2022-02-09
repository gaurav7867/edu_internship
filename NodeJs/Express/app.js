const express = require('express');
const app = express();
const path =require('path')
const port = 5700;

// console.log(__dirname)
// console.log(path.join(__dirname, './public'));

const staticPath = path.join(__dirname, './public');
app.use(express.static(staticPath));

// TO set view engine
app.set('view engine', 'hbs');

// Template engine route
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/', (req, res) => {
   res.send("<h1>Welcome on Home Page</h1> ") 
}) 


app.listen(port,(req, res) => {
    console.log(`listening on port ${port}`)
}) 