// Exporting modules
//We export modules so that we can use / utilise them in other files / modules in our program

export const calculator = (x, y) =>{
    let difference = x - y

    console.log("The difference of the two numbers is:", difference)
};


export const simpleInterest = (principal, rate, time) =>{
    let si = (principal * rate * time)
    console.log("The simple interst is:", si)
};


const bmi = (weight, height) => {
    let answer = weight / (height ** 2)

    console.log("The bmi is:", answer)
};

export {bmi}

