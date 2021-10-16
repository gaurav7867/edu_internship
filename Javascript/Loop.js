// Loops In JavaScript


for (initialExpression; condition; updateExpression) {
    // for loop body
}

// program to display text 5 times
const n = 5;
undefined
for (let i = 1; i <= n; i++) {
    console.log(`I love JavaScript.`);
}
// I love JavaScript.


// program to display numbers from 1 to 5
const n = 5;
for(i = 1; i<=n; i++){
    console.log(i);}
 /*
 1
 2
 3
 4
 5
 */

// program to display the sum of natural numbers
let sum = 0;
const n = 100;
undefined
for(let i = 1; i<=n; i++){
    sum = sum + i;
}
// 5050
console.log("Sum of n natural number is", sum);
//  Sum of n natural number is 5050



while (condition) {
    // body of loop
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let sum = 0;
let number = parseInt(prompt('Enter a number: '));

while(number >= 0) {
    sum += number;
    // take input again if the number is positive
    number = parseInt(prompt('Enter a number: '));
}

// display the sum
console.log(`The sum is ${sum}.`);

// The sum is 30


do {
    // body of loop
} while(condition)

let i =1;
const num = 6;
do {
    console.log(i);
    i++;
}
while(i <= num);
 /*
 1
 2
 3
 4
 5
 6
 6
 */

let i =1;
const num = 6;
do {
    console.log(i);
    i++;
}
while(i <num);
 /*
 1
 2
 3
 4
 5
 5
 */