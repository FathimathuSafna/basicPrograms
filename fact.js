const prompt = require('prompt-sync')();
const num = prompt("Enter a number")
let fact=1
for(i=2;i<=num;i++){
    fact = fact*i
}
console.log("factorial of a number is fact",fact)