function add(a, b){
    return a + b ;
}

// add(6,7)
// 13
// add(233, 3244)
// 3477

function toCelcius(f)
{
    return (5/9) * (f - 32);
    
}
// toCelcius(77);
// 25
// toCelcius(50);
// 10

function toFahernheit(C){
    return (C*9/5) + 32;
}    

// toFahernheit(50);
// 122
// toFahernheit(100);
// 212
// toFahernheit(300);
// 572

function greet(){
    console.log("Hello Friends!");
}   
greet();
//  Hello Friends!

// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);
// display the result
console.log("The sum is " + result);

// The sum is 18.8

// program to find the square of a number
// function is declared inside the variable
let x = function (num) { return num * num };
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);
// 16
// 9
console.log(x(5));
//  25


// program to count down numbers to 1
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);
 /*
 4
 3
 2
 1
 */
undefined
// program to find the factorial of a number
function factorial(x) {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// calling factorial() if num is non-negative
if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}
// output
//  The factorial of 3 is 6

