// objects data type
// An object data type in javascript is a data type that stores data in key value pairs

let person = {
    Name : "Samantha Mayaka",
    Age: 70,
    isRegistered: true
};

console.log("the Details of the person is", person)

// First method is by use oth th square brackets if you want to extract one of the details
console.log(person["Age"])

//second method is by use of the dot (.) notation
console.log(person.Name)

//check the data type
console.log(typeof(person))

//aRRAY DATA TYPE
// This refers to a collection of items that are on indexes
fruits = ["Mango", "Apple", "Banana", "pineapple", "Melon", "Lemon", "Grapes"]

console.log("The entire array of fruits is:",fruits)

// To access the items of the array we use index
console.log(fruits[3])

//you can slice items of an array
console.log(fruits.slice(2,5))




