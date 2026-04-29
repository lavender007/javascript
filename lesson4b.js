// Anonymus Functions in Javascript
// These are functions that exist without a name 

// Below is an example of suc functions :
// The below functon shall take the name of the variable they are contained in .

const greet = function(){
    console.log("Hello there , hope your Monday is fine ....")
}

greet();
// Below is another anonymus function of anonymus self - executed function 
(function(){
    console.log("Welcome to the world of programming ....")
})();