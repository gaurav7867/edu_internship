const fs = require('fs');
const User = {
    name:"Gaurav",
    age:"22",
    channels:"CodeWithFun!"
};

console.log(`Name:${User.name},${User.age},${User.channels}`);

const json = JSON.stringify(User); // convert object to JSON
console.log(json);

const objData = JSON.parse(json)  // convert JSON to object
console.log(objData);

// 1:Convert into JSON
// 2:Add into another file
// 3:Read the file 
// 4:Again convert back to js obj  original
// 5:console.log

const jsonData = JSON.stringify(User);
fs.writeFile('user.json',jsonData, (err)=>{
    console.log('File created');
})

fs.readFile('user.json', "utf-8", (err, data)=>{
    const orgdata = JSON.parse(data)
    console.log(orgdata.name)
});












