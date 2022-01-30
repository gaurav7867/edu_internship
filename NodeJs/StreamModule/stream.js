const fs = require('fs');
const http = require('http');
const port = process.env.PORT || 8900;

const server = http.createServer();

// 1st way
// server.on("request", (req, res) => {
//     fs.readFile('text.txt', (err, data) => {
//         if (err) throw err;
//         res.end(data.toString());
//     })
// })

// // 2nd way 
// Reading from a Stream
// Create a readable stream
// Handle stream events --> data, end and error

// server.on("request", (req, res) => {
// const readStream = fs.createReadStream('text.txt');
// readStream.on('data', (chunkdata) => {
//     res.write(chunkdata);
// });
// readStream.on('end', () =>{
//     res.end();
// });
// readStream.on('error', (err) =>{
//     console.log(err);
//     res.end("File in not found");
// });
// });

// 3rd way of streaming by using pipe() method
server.on("request", (req, res) => {
    const readStream = fs.createReadStream('text.txt');
    readStream.pipe(res);
    });
    
server.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});