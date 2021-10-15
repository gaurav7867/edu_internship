//if condition
if (condition) {
    // the body of if
}

const number = 2;
if (number > 0) {
    console.log("The number is positive.");
} else {
   console.log("The number is negative or zero.");
}
//  The number is positive.


//if...else condition
if (condition) {
    // block of code if condition is true
} else {
    // block of code if condition is false
}

// check if the number is positive or negative/zero
const number = prompt("Enter a number: ");
if (number > 0) 
{
  console.log("The number is positive");
}
else {
  console.log("The number is either a negative number or 0");
}
// Result is
//  The number is positive


if (condition1) {
    // code block 1
} else if (condition2){
    // code block 2
} else {
    // code block 3
}

// check if the number if positive, negative or zero
const number = prompt("Enter a number: ");
if (number > 0) {
    console.log("The number is positive");
}
else if (number == 0) {
  console.log("The number is 0");
}
else {
    console.log("The number is negative");
}

// Output
// The number is 0


// check if the number is positive, negative or zero
const number = prompt("Enter a number: ");

if (number >= 0) {
    if (number == 0) {
        console.log("You entered number 0");
    } else {
        console.log("You entered a positive number");
    }
} else {
    console.log("You entered a negative number");
}
// You entered a negative number