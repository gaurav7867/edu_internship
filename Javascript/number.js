/*
>> isNaN()              => determines whether the passed value is NaN
>> isFinite()           => determines whether the passed value is a finite number
>> isInteger()          => determines whether the passed value is an integer
>> isSafeInteger()      => determines whether the passed value is a safe integer
>> parseFloat(string)   => converts the numeric floating string to floating-point number
>> toFixed(digits)	    => returns a string value for a number in fixed-point notation
>> toPrecision()        => returns a string value for a number to a specified precision
>> toString([radix])    => returns a string value in a specified radix(base)
>> valueof()	        => returns the numbers value
>> toLocaleString()	    => returns a string with a language sensitive representation of a number
>> parseInt(string, [radix])       => converts the numeric string to integer
>> toExponential(fractionDigits)   => returns a string value for a number in exponential notation
*/

const num = 5e9;
console.log(num);
// 5000000000

const num2 = 5e-5;
console.log(num2);
//  0.00005

const a =7 + 8;
console.log(a);
//  15

const a ='9' + 9;
console.log(a);
//  99

const num3 = 86;
console.log(parseInt(num3));
//  86

const num3 = 4050.859;
console.log(parseInt(num3));
//  4050

const n4 = 89;
console.log(parseFloat(n4));
//  89


// When a numeric string is used with other numeric operations, the numeric string is converted to a number.
const a = '4' - 2;
console.log(a);   //  2

const a = '4' / 2;
console.log(a);    //  2

const a = '4' * 2;
console.log(a);    //  8

const a = 4 - 'hello';
console.log(a);   // NaN

const a = 4 - 'hello';
console.log(a);            // NaN
console.log(typeof a);    // "number"

const a = 2 / 0;
console.log(a);            // Infinity

const a = -2 / 0;
console.log(a);           // -Infinity


const a = 45;
// creating a number object
const b = new Number(45);

console.log(a); // 45
console.log(b); // 45

console.log(typeof a); // "number"
console.log(typeof b); // "object"

// check if a is integer
const a = 12;
console.log(Number.isInteger(a)); // true

// check if b is NaN
const b = NaN;
console.log(Number.isNaN(b)); // true

// display upto two decimal point
const d = 5.1234;
console.log(d.toFixed(2)); // 5.12


// The Number() function is used to convert various data types to numbers.
const a = '23'; // string
const b = true; // boolean

//converting to number
const result1 = Number(a);
const result2 = Number(b);

console.log(result1); // 23
console.log(result2); // 1