let Distance = 10000

if (Distance >=0 && Distance <=100){
    console.log("Pay 5 USD")
}
else if (Distance >=101 && Distance <=500){
    console.log("Pay 10 USD")
}
else if (Distance >= 501 && Distance <= 1000){
    console.log("Pay 20 USD")
}
else{
    console.log("Pay 40 USD")
}

// Triple equal sign 
//It compares value AND data type
// example 1 below:
console.log(7 === "7"); // false
console.log(true === 1); // false