const prompt = require('prompt-sync')();
const num = prompt("Enter a number")
let fact=1
if(num<0){
    console.log("number cannot be  negative")
} else if(num ==0 || num ==1){
    console.log("factorial is:",fact)
}
else{

for(i=2;i<=num;i++){
    fact = fact*i
}
console.log("factorial of a number is fact",fact)
}