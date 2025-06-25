const prompt = require('prompt-sync')();
const num = prompt("Enter a Number:")
console.log("The number is:", replaceZeroWithOne(num));

function replaceZeroWithOne(num) {
    let result = 0;
    let place = 1;
    if(num == 0) return 1;
    while(num>0){
        let digit = num % 10
        if(digit == 0){
            digit =1
        }
        result=result+digit*place
        place = place*10
        num = Math.floor(num / 10);
    }
    return result;
}

