// Functions with parameters
//Parameters are values that get passed as arguments when we invoke a function 
//They help us to crate functions that can be reusable through out a program 
// Functions with parameters can be utilised when you want to receive promotional messages


function greeting(name){
    console.log("Hello", name, "How have you been?")
}

greeting("Samantha")
greeting("Todd Kranes")

console.log("=================")
// Below isa function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("The sum of te number is ", sum)
}

addition(45, 60)
addition(90, 60)

console.log('================')
// by use of a function that accepts parameters , calculate the area of a a triangle whose base is 20 cm and height is 12cm

function area(number1, number2){
    answer = 0.5 * number1 * number2
    console.log("The area of the triangle is ", answer)
}

area(20, 12)


console.log("============")
// Given the principal as 50000, rate as 5% and time as 8 years find the simple interest

function simpleinterest(principal, rate, time){
    intrest = principal * rate* time
    console.log("The simple interest is:", intrest)
}

simpleinterest(50000, 0.05, 8)