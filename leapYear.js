const prompt = require("prompt-sync")();
const year = prompt("Enter a number");
console.log("The year is:", leapYear(year));
function leapYear(year){
    if(year%4 ==0 && year%100 != 0 || year%400 ==0){
        return "Leap Year";
    }else{
        return "Not a Leap Year";
    }
}
