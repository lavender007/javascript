//Resarch on arrow function javascript, functions with parameters and annonymus functions in javascript
//Do page 28 and 30 of the JS BOOK
//create a for loop that is able to print out all the leap years from 2000 to 2026



for(let i = 2000; i <=2026; i++ ){
    if((i % 4 == 0 && i % 100 !== 0)|| i % 400 === 0){
        console.log(i);
    }
}

// page 28
// task 1
for(let e = 1; e <= 19; e += 2){
    console.log(e);
}

console.log("======================")
// task 2

for(let e = 10; e>= 1; e--){
    console.log(e);
}

console.log("===================")
// task 3
let numbers = [10, 20, 4, 45, 99, 1]



// page 30
for(let i = 1; i <= 19; i+=2){
    console.log(i);
}

console.log("=================")
for(let e = 10; e >= 1; e--){
    console.log(e);
}

// Example of map
console.log("==================")
const users = [
    {name: 'Sam', age: 25},
    {name: 'kyle', age: 30},
    {name: 'Tod', age: 15},
];

const names = users.map(user => user.name);
console.log(names);
console.log(typeof(names));