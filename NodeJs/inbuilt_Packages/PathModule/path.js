const path =require("path");

console.log(path.dirname("C:/Users/ASUS/Desktop/Edu_July_internship/NodeJs/inbuilt_Packages/PathModule/path.js"));
console.log(path.extname("C:/Users/ASUS/Desktop/Edu_July_internship/NodeJs/inbuilt_Packages/PathModule/path.js"));
console.log(path.basename("C:/Users/ASUS/Desktop/Edu_July_internship/NodeJs/inbuilt_Packages/PathModule/path.js"));

const myPath = path.parse("C:/Users/ASUS/Desktop/Edu_July_internship/NodeJs/inbuilt_Packages/PathModule/path.js");

console.log(myPath.name);
console.log(myPath.root);
