var array = [10, 11, 12, 13, 14, 15];
var b  = array.map(test);
console.log(b);

function test(X){
    return X *10;
}

// [100, 110, 120, 130, 140, 150]


var ary = [
    {fname:"Gaurav", lastname:"Gupta"},
    {fname:"Saurabh", lastname:"Saxena"},
    {fname:"Rakesh", lastname:"Sharma"},
];

var b = ary.map(test);
console.log(b);
function test(X){
    return X.fname + " " + X.lastname;
}
// ['Gaurav Gupta', 'Saurabh Saxena', 'Rakesh Sharma']

var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"];
city.map((dta)=>{
    return data;
})

var a = [1,2,3,4,5];
a.map((data) =>{
    return data*2;
})

//map helps to iterate over the data.
// map return an array.