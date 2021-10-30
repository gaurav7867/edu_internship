// A multidimensional array is an array that conatains another array.

const data = [[1,2,3], [4,5,6], [7,8,9]];

// Example 1
const studentData =  [['Jack', 25], ['Peter', 26], ['Sara', 23]];

// Example 2
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];
let studentsData = [student1, student2, student3];

// Access elements of an array.
// => access  the elements of multiple arrays by using indices.
let friends = [['Rishi', 24], ['Gaurav', 22], ['Sevina', 21] ];

    // access the first,second & third item 
    console.log(friends[0]);     // ["Rishi", 24]
    console.log(friends[1]);     // ["Gaurav",22]
    console.log(friends[2]);     // ["Sevina",21]

    // access the first item of the inner array
    console.log(friends[0][0]);      // Rishi
    console.log(friends[1][0]);     // Gaurav
    console.log(friends[2][0]);     // Sevina
    
    // access the second item of the third inner array
    console.log(x[2][1]);         // 21
    console.log(x[1][1]);         //22


// push()

// Adding elements to the outer array
let friends = [['Rishi', 24], ['Gaurav', 22], ['Sevina', 21] ];
    friends.push(['Tokyo', 24]);
    console.log(friends);  
 // Result   
    ['Rishi', 24] 
    ['Gaurav', 22]
    ['Sevina', 21]
    ['Tokyo', 24]

// Add elements to the inner array
let friends = [['Rishi', 24], ['Gaurav', 22], ['Sevina', 21] ];
friends[1][2] = 'Professor';
console.log(friends);        // ['Gaurav', 22, 'Professor']

friends[2].push('Raquel');
console.log(friends);       // ['Sevina', 21, 'Raquel']

// splice

friends.splice(4, 2, ['Rio', 23]);
console.log(friends);  
/*
['Rishi', 24]
['Gaurav', 22]
['Sevina', 21]
['Tokyo', 24]
['Rio', 23]
*/

// pop()
friends.pop();
console.log(friends);   // ['Rishi', 24] ['Gaurav', 22]

friends[1].pop();
22
console.log(friends);
 // ['Rishi', 24] ['Gaurav']


// splice()
let friends = [['Rishi', 24], ['Gaurav', 22], ['Sevina', 21]];
friends.splice(1,1);
console.log(friends);     // ['Rishi', 24] ['Sevina', 21]


// for Each()
let studentsData = [['Jack', 24], ['Sara', 23],];

// iterating over the studentsData
studentsData.forEach((student) => {
    student.forEach((data) => {
        console.log(data);
    });
});

/* Result
Jack
24
Sara
23
*/

// for() Of
let studentsData = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData) {
  for (let j of i) {
    console.log(j);
  }
}
/* Result
Jack
24
Sara
23
*/


// for loop 
let studentsData = [['Jack', 24], ['Sara', 23],];

for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;
    
    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}
/* Result
Jack
24
Sara
23
*/
