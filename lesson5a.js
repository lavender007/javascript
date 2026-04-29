// Arrow functions => This is a function that was introduced by the ECMA script  6 and tey give us the latest/modern way of defining functions in a compact manner.
//At times the arrow function can be said to be anonymus functions why? This is because they use the names of the variables they are contained in

const sayHello = () => {
    console.log("This is an arrow function .")
}


sayHello();

console.log("===============")
// create an arrow function that is able to find the product of three numbers

const product = () => {
    let num1 = 3
    let num2 = 4
    let num3 = 6
    answer = num1* num2* num3
    console.log("The product is:", answer)
}

product();