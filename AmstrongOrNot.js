const prompt = require("prompt-sync")();
const num = prompt("Enter a number");
function isArmstrong(num) {
    const length = num.toString().length;
    let sum = 0
    while(num > 0){
            let digit = num%10
            sum = sum +digit**length
            num = Math.floor(num / 10);
}
return sum
}
console.log("The number is:", isArmstrong(num));
if (isArmstrong(num) == num) {
    console.log(num, "is an Armstrong number");
}else {
    console.log(num, "is not an Armstrong number");
}