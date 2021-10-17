for(let i= 1; i<=5; i++)
{
    if(i == 3)
    {
        break;
    } console.log(i);}   

 /*
 1
 2
 */


 // program to find the sum of positive numbers
let sum = 0, number;

while(true) {
    number = parseInt(prompt('Enter a number: '));
    if(number < 0) {
        break;
    }
    sum += number;
}
console.log(`The sum is ${sum}.`);

///Output 
/*
Enter a number: 1
Enter a number: 2
Enter a number: 3
Enter a number: -5
The sum is 6. 
*/


// nested for loops

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
          break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

/*
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 3, j = 1
i = 3, j = 2
i = 3, j = 3
 */