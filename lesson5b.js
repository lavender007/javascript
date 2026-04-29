// Arrow functions with parameters
//The purpose of the semicolons is

const greet = (name) => {
    console.log("Hello" , name ,"How have you been i trust that you have been good.")
}

greet("James");
greet("Jeremiah");

console.log("========")

// Below is a function to find an area of a circle
const CircleArea = (pi, radius) =>{
    let area = pi * radius * radius
    console.log("The area of the circle is:", area)
}
CircleArea(3.142, 7);

console.log("===============")
//come up with your own example of an arrow function that utilises 3 parameters

const SimpleInterest = (principal, rate, time) => {
    let interest = principal * rate * time;
    console.log("The interest is:", interest);
};

SimpleInterest(40000, 0.07, 4);