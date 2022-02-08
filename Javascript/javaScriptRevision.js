var tomorrow = 'rain';
if(tomorrow == 'rain'){
    console.log("Take a raincoat.")
}else{
    console.log("No need to take a raincoat.")
}

// // // Write a program that works out of the leap year
var year = 2024
if(year%4 == 0){
    if(year%100 == 0){
        if(year%400 == 0){
            console.log(`${year} is a leap year.`)
        }else{
            console.log(`${year} is not a leap year.`)
        }
    }else{
        console.log(`${year} is a leap year.`)
    }
}else {
    console.log(`${year} is not a leap year.`)
}

// // What is truthy and falsy values in JavaScript
// // we've total 5 falsy values in JavaScript
// // 0, " ", undefined,NaN,false is false and
if(NaN){
    console.log('OMG! we lose the game.')
}else{
    console.log("Yay, we won the game.")
}

// // Conditional (ternary) operator
// // The conditional operator is the only javascript operator that takes three operands
//  >>>  Variablename = (condition) ? value1 : value2  <<<
var age = 17;
if(age>= 18){
    console.log("Welcome!, You can vote.")
}else{
     console.log("Sorry!, You are not eligible to vote.")
}

// // OR
var age = 17;
age >=18?console.log("Welcome!, You can vote."):console.log("Sorry!, You are not eligible to vote.");

// // >>> Switch Statement  >>> 
// // Evaluates an expression, matching the expression's value to a case clause and excutes statements associated with that case.

// //  Ques:- find the Area of circle,triangle and rectangle Without break statement ?
// // By if-else -if
var area = "Circle";
const PI = 3.142, l=4, b = 8, r= 4;
if(area == "Circle"){
    console.log("The area of the circle is : " + PI*r**2);
}else if(area == "Trianle"){
    console.log("The area of the triangle is :" + (l*b)/2);
}else if(area=="Rectangle"){
    console.log("The area of the rectangle is :" + (l*b));
}else{
  console.log("Please enter valid values.")
}

// // Switch
var area = "Circle";
const PI = 3.142, l=4, b = 8, r= 4, s= 6;
switch(area){
    case 'Circle':
        console.log("The area of the circle is : " + PI*r**2);
        break;
    case 'Traingle':
        console.log("The area of the triangle is :" + (l*b)/2);
        break;
    case 'Rectangle': 
        console.log("The area of the rectangle is :" + (l*b));
        break;
    case 'Square': 
        console.log("The area of the square is :" + (s*s));
        break;
    default:
        console.log("Please enter valid values.")
// }


// // While Loop
// // The while statement creats a loop that executes a specified statement as long as the test condition evalutes to true

var number = 1;
while(number<=10){
    console.log(number); // infinite loop
    number++;
}

// //  do while loop
var num = 0;
do{
    console.log(num);
    num++;
}while(num<=10);

// // for loop
//  >>> for(initializer; condition; iteration){ 
//              code of block
//         }
    for(var num=1; num<=10; num++){
        var table = 4;
        console.log(table +' * '+ num + ' = '+ table * num ); 
    }

// // Function : - It is a block of code designed to perform a perticular task.

// function funtionName(){
//     // statement
// }

function Sum(a,b){
    var total = a + b;
    console.log(total);

Sum(5,6);
Sum(7,9)
}

function Sum(a,b){
    return total  = a + b;
}
var Result =Sum(3,5);
console.log(Result)


var funExp = function(a,b){
    return total  = a + b;
}
var Sum1 =funExp(13,5);
var Sum2 =funExp(34,5);
console.log(Sum1 > Sum2 )


// ECMAScript 2015 / ES6
    // Let, Const, 
    // Template String,
    // Destructuring,
    // Object Properties,
    // Default Arguments,
    // Arrow Function, 
    // Rest Operators,
    // Spread Operators,

// Default Arguments,    
    function mult(a,b=5){
        return a * b;
    }
    console.log(mult(10))

// Fat Arrow Function ( => )
const Sum = ()=>{
    let a = 5, b= 10;
    let sum = a + b;
    return `The sum of the two numbers is ${sum}`;
}
console.log(Sum())

// // OR

const Sum = ()=>{
    let a = 5, b= 10;
    return `The sum of the two numbers is ${a + b}`;
}
console.log(Sum())
OR
const Sum = ()=>{
    return `The sum of the two numbers is ${(a= 6) + (b= 8)}`;
}
console.log(Sum())

// OR

const Sum = ()=>`The sum of the two numbers is ${(a= 6) + (b= 8)}`
console.log(Sum())


                    // >>>> Array  [] >>>>

// when we use var, we can store the only one value at a time.
// In array , we can store the multiple values at once in one variable instead of var .
// In javascript, we have an array class , and  arrays are the prototype of this class. 
// In array of javascript, we can store any dataType of values instead of other programming languages. 

// var indianCricketPlayers = ['MS Dhoni',36, male, 'Virat',29, male, 'Rohit Sharma', 'KL Rahul', false, true ]

// Travesal of an Array
// Searching and Filter in an Array
// How to Sort and Compare an Array
// How to Insert, Add, Replace and Delete Elements in Array (CRUD)
// Map(), Reduce(), Filter()

var names = ['Ram', 'shyam', 'mohan', 'sohan'];
console.log(names.length)
console.log(names.length -1)
console.log(names[names.length -1])

//   we use for loop to navigate 

var names = ['Ram', 'shyam', 'mohan', 'sohan','shefali','Rashmika'];

// for loop :=> it ruturns elements of an array
for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

//  >>> for in loop :->> it returns index number of an array
for(let elements in names){
    console.log(elements);
}

// for of loop :->> it returns elements of an array
for(let elements of names){
    console.log(elements);
}

// forEach loop
var names = ['Ram', 'shyam', 'mohan', 'sohan','shefali','Rashmika'];
names.forEach((element, index,array)=>{
    console.log(`${element} : ${index} `)
    // console.log(array)
})

        
//    >>> Searching and Filter in an Array 👈

var fruits = ['Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava','Apple']
console.log(fruits.indexOf()) // -1
console.log(fruits.indexOf('Plumb')) // 5
console.log(fruits.indexOf('Apple'))

                  // push()  :=> Add one or more elements to the end of the array 🙋🏼‍♂️

var fruits = ['Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava','Apple']
fruits.push('Berry')  // ['Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava','Apple','Berry']
console.log(fruits)

                       // pop () Method 🙋🏼‍♂️ -> Remove the last element of  an array

var fruits = ['Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava','Apple']
fruits.pop()  //  ['Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava']
console.log(fruits)

               // unshift() 🙋🏼‍♂️  :=> Add one or more elements to the begining of the array
fruits.unshift('Cucumbe') 
Output:- ['Cucumbe','Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava','Apple']
fruits.unshift(4,5)  /// [4, 5, 'Mango',  'Banana','Orange', 'Watermelon','Litchi', 'Plumb','Guava',  'Apple' ]
console.log(fruits)

               // shift() Method 🙋🏼‍♂️
//  Remove the first element from the array
var fruits = ['Mango', 'Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava','Apple']
fruits.shift()  
console.log(fruits)
// Output: -  ['Banana', 'Orange', 'Watermelon', 'Litchi','Plumb','Guava']



                             // 👉   // >>>>>  String >>>> // 👈
//                                ------------------------------
// A JavaScript strings is zero or more characters written inside quotes.
// You can use single or double quotes.
// Strings can be created as primitives.,from string literals, or objects, using the Strings() constructor.

let myName = "Gaurav Gupta";
let myChannelName = "CodewithFun";

let ytName= new String("Gaurav Gupta"); // Generate a string through constructor
console.log(myName);
console.log(ytName);


                 // Escape Character 🙋🏼‍♂️
let anySentence = "Hello! I am \"MERN\" Stack Developer."
console.log(anySentence);
// or
let anySentence = "Hello! I am 'MERN' Stack Developer.";
console.log(anySentence);
// // or 
let anySentence = "Hello! I am 'MERN' Stack Developer.";
console.log(anySentence);

//  Finding a string in a string 👈

                // indexOf(searchValue [,fromIndex])🙋🏼‍♂️

// The indexOf() method returns the index of (the position of) the first occurence of a specified text in a string

const myBioData = "Hello, My name is Gaurav Gupta.";
console.log(myBioData.indexOf("name")); // 10 
console.log(myBioData.indexOf("IS"));   // -1
console.log(myBioData.lastIndexOf("Gupta"));

                //  >>>> Search() method >>>> 🙋🏼‍♂️
// Searching for a string in a String for a specified value and returning
// returns the position/index number of the match

const myBioData = "Hello, My name is Gaurav Gupta.";
let SearchData = myBioData.search("name ") // 10
let SearchData = myBioData.search(" "); // 6
console.log(SearchData)

// Extracting String Parts
// There are 3 methods to extract string parts
// slice(start, end)
// substring(start, end)
// substr(start, length)

                // >>>> slice() Methods >>> 🙋🏼‍♂️
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

const str = 'She handed Dandy to Rob and Random to Aaron, introducing the horses by name.';

console.log(str.slice(20)); // output: Rob and Random to Aaron, introducing the horses by name.
console.log(str.slice(4, 15)); // output: handed Dand
console.log(str.slice(-8)); // output: by name.
console.log(str.slice(-15, -5)); //output: horses by

// Ques: -Display only 280 characters of a string like the one usd in Tweeter.

let myTweets = "The name Busiris in this legend may have been caught up merely at random by the early Greeks, or they may have vaguely connected their legend with the Egyptian myth of the slaying of Osiris (as king of Egypt) by his mighty brother Seth, who was in certain aspects a patron of foreigners."
let myActualTweet =myTweets.slice(0,280)
console.log(myActualTweet.length) 

// Return the Unicode pf the last character in a string.


                     // >>> substring() Method >>> 🙋🏼‍♂️
// subtring() is same to slice()
// The difference is that substring() cannot accept negative indexes.
const str = 'She handed Dandy to Rob and Random to Aaron, introducing the horses by name.'
let res = str.substring(3,7);
console.log(res);  //  han
let res = str.substring(3,-7);
console.log(res);  // she
 
                    // >>> substr(start ,length)  or substr(start) Method >>> 🙋🏼‍♂️
var aString = 'Godzilla';

console.log(aString.substr(0, 1));   // 'G'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Go'
console.log(aString.substr(20, 2));  // ''                    


                     // >>> split() or split(separator) or split(separator,limit) Method >>> 🙋🏼‍♂️

//  The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  
// const str = 'He turned Random back and headed for the camp.';

const words = str.split(' ');
console.log(words[3]);
// Output: "back"

const chars = str.split('');
console.log(chars[8]);
// Output: "d"

const strCopy = str.split();
console.log(strCopy);
Output: Array [ 'He turned Random back and headed for the camp.' ]
        

 // >>> trim() Method >>> 🙋🏼‍♂️
 let text1 = "Please visit Microsoft!";
let newText1 = text1.replace("Microsoft", "Google");
console.log(newText1);

let text2 = "Please visit Microsoft and Microsoft!";
let newText2 = text2.replace("Microsoft", "Google");
console.log(newText2); // Please visit Google and Microsoft!

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "Google");
console.log(newText); // Please visit Google and Google!

let text = "You are my good friend ";
let newText = text.replace("GOOD", "best");
console.log(newText);


let text1 = "hello gaurav";
let text2 = text1.toUpperCase();
console.log(text2);
let text3 = "HELLO GAURAV";
let text4 = text3.toLowerCase();
console.log(text4);


let word1 = "Hello";
let word2 = "World";
let word3 = word1.concat(" ", word2);
console.log(word3); // Hello World


let word = "hello coder";
let result = word.charAt(0).toUpperCase()
console.log(result);


// DATE and TIME 🙋🏼‍♂️
let date = new Date();
console.log(date.toString());

let date = new Date();
console.log(date.toLocaleString()); // 2/8/2022, 10:57:33 AM

console.log(Date.now()) // gives millisecond since 1st January 1970
console.log( new Date(2022,1,8).toLocaleString())

let date = new Date("February 8 2022 ");
console.log(date.toLocaleDateString()) // 2/8/2022        


















