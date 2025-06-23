const prompt = require('prompt-sync')();
const num = prompt("Enter a number")
function factorial(n){
    if (n < 0){
        return console.log("cannot be negative")
    } else if (n == 0  || n == 1){
        return 1
    }
    return n * factorial(n-1)
}
console.log("factorial of a number is :",factorial(num))