const prompt = require('prompt-sync')();
const num = prompt("Enter a number")
const rev = num.split("").reverse().join("")
if (num == rev){
    console.log(num,"is palindrom",rev)
}
else{
    console.log(num, "is not palindrome",rev)
}