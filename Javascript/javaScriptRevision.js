var tomorrow = 'rain';
if(tomorrow == 'rain'){
    console.log("Take a raincoat.")
}else{
    console.log("No need to take a raincoat.")
}

// Write a program that works out of the leap year
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

// What is truthy and falsy values in JavaScript
// we've total 5 falsy values in JavaScript
// 0, " ", undefined,NaN,false is false and
if(NaN){
    console.log('OMG! we lose the game.')
}else{
    console.log("Yay, we won the game.")
}

// Conditional (ternary) operator
// The conditional operator is the only javascript operator that takes three operands
//  >>>  Variablename = (condition) ? value1 : value2  <<<
var age = 17;
if(age>= 18){
    console.log("Welcome!, You can vote.")
}else{
     console.log("Sorry!, You are not eligible to vote.")
}

// OR
var age = 17;
age >=18?console.log("Welcome!, You can vote."):console.log("Sorry!, You are not eligible to vote.");

// >>> Switch Statement  >>> 
// Evaluates an expression, matching the expression's value to a case clause and excutes statements associated with that case.

//  Ques:- find the Area of circle,triangle and rectangle Without break statement ?
// By if-else -if
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

// Switch
// var area = "Circle";
// const PI = 3.142, l=4, b = 8, r= 4, s= 6;

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
}


// While Loop
// The while statement creats a loop that executes a specified statement as long as the test condition evalutes to true

var number = 1;
while(number<=10){
    console.log(number); // infinite loop
    number++;
}

//  do while loop
var num = 0;
do{
    console.log(num);
    num++;
}while(num<=10);












