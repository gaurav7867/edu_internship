/*
The continue statement is used to skip the current
iteration of the loop and the control flow 
of the program goes to the next iteration.
*/

// program to print the value of i

for (let i = 1; i <= 5; i++) {    
    if (i == 3) {
        continue;
    }
    console.log(i);
}

/*
1
2
4
5
 */

// program to calculate positive numbers only

let sum = 0;
let number = 0;

while (number>=0) {
    sum+= number;
    number = parseInt(prompt('Enter a number: '));
    if(isNaN(number)) {
        console.log('You entered a string');
        number = 0;
        continue;
    }
    
}

console.log(`The sum is ${sum}`);

/*
Enter a number: 1
Enter a number: 2
Enter a number: hello
You entered a string.
Enter a number: 5
Enter a number: -2
The sum is 8. 
 */