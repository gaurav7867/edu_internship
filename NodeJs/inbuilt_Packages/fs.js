// // Write the file
// // append the file 
// // Read / Rename / Delete the file
// // Can make a directory

 var fs = require('fs');

// // If File is already exist, it'll update the content otherwise it'll create new file and override the content.
fs.writeFile('Mycode.txt', "Hello Coder This is my file", function(err){
    if (err) throw err;
    console.log("Your File is created.");
});

 // Append File
// It'll create the file as well as append the content into the file.
fs.appendFile("MyText.txt", "This is new line \n",(err) =>{
    if(err) throw err;
    console.log("content appended.");
})

// // OR
fs.appendFile("MyText.txt" , `${Math.floor(Math.random()*1000)} This is new line \n`, (err) =>{
    if(err) throw err;
    console.log("content appended.");
})

// Synchronous
const data = fs.readFileSync("db.json", "utf8");
console.log(data);
console.log("After the data")

// // Asynchronous
fs.readFile('MyText.txt', 'utf-8', (err, data) =>{ 
    if(err) throw err;
    console.log(data);
});
console.log("content read file");

// // Rename File
fs.rename('Mycode.txt', 'MyCode1.txt' ,(err)=>{ 
    if(err) throw err;
    console.log("File is renamed.");
});

// // // Delete File
fs.unlink('MyCode1.txt', (err)=>{ 
    if(err) throw err;
    console.log("File is deleted.");
});

fs.rename('Snode fs.jserver.js', 'server.js', (err)=>{
    if (err) throw err;
    console.log("File is renamed")
});

fs.mkdir('node', (err)=>{
    if (err) throw err;
    console.log("Folder is created")
});


fs.writeFile('./node/index.js', 'I created a new file inside the node folder.', (err)=>{
    if (err) throw err;
    console.log("File is created");
})

fs.appendFile('./node/index.js', 'I am appending the content inside the index.js file.', (err)=>{
    if (err) throw err;
    console.log("Content is appended.");
})

fs.readFile('./node/index.js','utf-8',(err,data)=>{
    if (err) throw err;
    console.log(data)
    console.log("File is read.");
})

// Delete the file
fs.unlink('myapi.js', (err)=>{
    console.log("File is deleted")
})

// Delete the Folder 
fs.rmdir('./node/node2', (err)=>{
    console.log("Folder is deleted");
})














