// It's non-primitive data type that allows you to store multiple collections of data.

const Student = {
    firstname: 'Tokyo', 
    lastname: 'Doe',
    age: 26
}

// Object creation
const person = {name: 'Denver', age:30} 

// Accessing the object properties
console.log(person.name);  // Denver
console.log(person.age);   // 30

//using bracket notation
console.log(person["name"]);  //Denver

//Nested Objects
const student = {
    name: 'Berlin', 
    age:   35, 
    marks: {
        science:80,
        maths:87,
        physics:85
    }
}

console.log(student.marks);       // {science: 80, maths: 87, physics: 85}
console.log(student.marks.maths); // 87

// >>> Object Methods >>> an object can also contain function

const person={
    name: 'Sam',
    age: 34,
    greet: function(){
        console.log('Hello');
    }
}
person.greet(); // Hello
person.name;    // 'Sam'

//>>> Built-in methods >> parseInt():=> used to convert numeric string value to an integer value.
let number = '78.98';
let result = parseInt(number);
console.log(result);   // 78


// Adding a number
let student = {};
student.name = 'John';
student.greet = function(){
    console.log('Hello');
}
student.greet(); 

// this keyword
// To access a property of an object from within a method of the same object 

const person ={
    name: 'John',
    age: 30,
    greet: function(){
        console.log('The name is' + ' ' + this.name);
    }
};
person.greet();  // The name is John

const person ={
    name: 'John',
    age: 30,
    greet: function(){
        let surname = 'Doe';
        console.log('The name is' + ' ' + this.name + ' ' + surname);
    }
};
person.greet();  // The name is John Doe

/// Constructor function 
//Used to create a Objects.

function Person(){
    this.name = 'John',
    this.age = 24
}
const person = new Person();


/// Create Multiple Objects with constructor function 
function Person(){
    this.name = 'John',
    this.age = 23,
    this.greet =function(){
        console.log('Hello');
    }
}
const person1 = new Person();
const person2 = new Person();

console.log(person1.name); // John
console.log(person2.name); // John

///With Parameters
function Person(person_name, person_age, person_gender){
    this.name = person_name;
    this.age = person_age;
    this.gender = person_gender;
    this.greet =function(){
         return('Hi' + '' + this.name);
        }
}
const person1 = new Person('Gaurav', 22, 'male');
const person2 = new Person('Sam', 25, 'female');

console.log(person1.name); // Gaurav
console.log(person2.name); //Sam