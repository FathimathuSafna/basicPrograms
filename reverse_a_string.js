const prompt = require('prompt-sync')();
const num = prompt("Enter a String")
const rev = num.split("").reverse().join("")
console.log("The reverse is:",rev)