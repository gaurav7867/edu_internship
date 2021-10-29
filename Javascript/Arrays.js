// An array is an object that can store multiple values at once.

const myList = [];
const words = ['hello', 'world', 'welcome'];
const numberArray = [2,4,6,8,10];
const stringArray = ['eat', 'work', 'sleep', 'exercise'];
const newData = [ 'work', 'exercise', 1, 'tree'];

// Access elements of an array
const myArray = [ 'h','e','l','l','o'];
console.log(myArray[0]); // h
console.log(myArray[1]); // e

// push() => add a element at the end of an array.

let dailyActivities = ['eat', 'sleep'];
dailyActivities.push('exercise');
console.log(dailyActivities);  // ['eat', 'sleep', 'exercise']

// Unshift() => add the element at the beginning of an array.
let dailyActivities = ['eat', 'sleep'];
dailyActivities.unshift('work');
console.log(dailyActivities); // ['work', 'eat', 'sleep']


// Change the element of an array
let dailyActivities = ['eat', 'sleep'];
dailyActivities[2]= 'exercise';
console.log(dailyActivities);  // ['eat', 'sleep', 'exercise']

dailyActivities[3] ='exercise';
console.log(dailyActivities);  //['eat', 'sleep', undefined, 'exercise']

// pop() => delete element from end of the array.
let dailyActivities = ['work', 'eat', 'sleep','exercise'];
dailyActivities.pop();
console.log(dailyActivities);     // ['work', 'eat', 'sleep']

// shift() => remove first element from the array.
let dailyActivities = ['work', 'eat', 'sleep'];
dailyActivities.shift();
console.log(dailyActivities);  // ['eat', 'sleep']


//length() => Find number of elements in an array.
let dailyActivities = ['work', 'eat', 'sleep'];
console.log(dailyActivities.length);  // 3

// concat()
var a = ['a','b','c',1];
var b = [2,3,4];
a.concat(b);                // ["a", "b", "c", 1, 2, 3, 4]
b.concat(a);               // [2, 3, 4, "a", "b", "c", 1]

//indexOf()
var city = ["Delhi", "Lucknow", "Tokyo", "Nice", "Pune", "Amsterdam", "London" ,"Berlin"]
city.indexOf('Lucknow'); // 1
city.indexOf('Tokyo');   // 2
city.indexOf('Nice');    // 3
city.indexOf('London');  // 6 
city.indexOf('Berlin');  // 7


// sort() => sort the array in alphabetical order
var city = ["Delhi", "Lucknow", "Tokyo", "Nice", "Pune", "Amsterdam", "London" ,"Berlin"];
city.sort();      ///  ['Amsterdam', 'Berlin', 'Delhi', 'London', 'Lucknow', 'Nice', 'Pune', 'Tokyo']

var city = [1,5,"Delhi",4, "Mumbai", "Nice",3, "Pune",true, "amsterdam",false,"London"];
city.sort();   // [1, 3, 4, 5, 'Delhi', 'London', 'Mumbai', 'Nice', 'Pune', 'amsterdam', false, true]

var city = [1,5,"delhi",4, "Mumbai", "nice",3, "Pune",true, "amsterdam",false,"London"]
city.sort();  // [1, 3, 4, 5, 'London', 'Mumbai', 'Pune', 'amsterdam', 'delhi', false, 'nice', true]


// reverse()
city.reverse();   /// ['Tokyo', 'Pune', 'Nice', 'Lucknow', 'London', 'Delhi', 'Berlin', 'Amsterdam']


var city = ["London", "Mumbai",['Red',['Bmw','Audi','Merc'],'Yellow','Green'],"Nice", "Pune", "amsterdam", "delhi",]
city[2];      // ['Red', Array(3), 'Yellow', 'Green']

city[2][0];    // 'Red'
city[2][2];    // 'Yellow'

city[2][1][0];  // 'Bmw'


/// isArray()
var b = ["a","b"]
var a= 10
Array.isArray(a);      // false
Array.isArray(b);     // true


/// slice()
var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]
city.slice(1)      // ['Mumbai', 'Pune', 'Amsterdam', 'London']


/// splice()
//city.splice(start,deletecount, array)

var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]
city.splice(2,0,'Nice','Helsinki')


var city = ["Delhi", "Mumbai", "Pune", "Amsterdam", "London"]
city.splice(2,0,'Nice','Helsinki')
city                     // ["Delhi", "Mumbai", "Nice", "Helsinki", "Pune", "Amsterdam", "London"]

city.splice(3,1);     
city                   // ["Delhi", "Mumbai", "Nice", "Pune", "Amsterdam", "London"]






/*
push > add the value in the end of array
unshift > add the value in the beginning of the array
pop > always remove the last value of array
shift > always remove the first value of array
*/



