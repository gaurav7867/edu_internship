// Write the file
// append the file 
// Read / Rename / Delete the file
// Can make a directory


var fs = require('fs');

// If File is already exist, it'll update the content otherwise it'll create new file and override the content.
fs.writeFile('Mycode.txt', "Hello Coder This is my file", function(err){
    if (err) throw err;
    console.log("Your File is created.");
});

/// Append File
// It'll create the file as well as append the content into the file.

fs.appendFile("MyText.txt", "This is new line \n",(err) =>{
    if(err) throw err;
    console.log("content appended.");
})

// OR

fs.appendFile("MyText.txt" , `${Math.floor(Math.random()*1000)} This is new line \n`, (err) =>{
    if(err) throw err;
    console.log("content appended.");
})


// Read File

fs.read('MyText.txt', 'utf-8', (err, data) =>{ 
    if(err) throw err;
    console.log(data);
});


// Rename File

fs.rename('Mycode.txt', 'MyCode1.txt' ,(err)=>{ 
    if(err) throw err;
    console.log("File is renamed.");
});

// Delete File

fs.unlink('MyCode1.txt', (err)=>{ 
    if(err) throw err;
    console.log("File is deleted.");
});
