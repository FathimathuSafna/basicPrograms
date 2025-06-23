const prompt = require("prompt-sync")();
const num = prompt("Enter a number");
let rev = "";
for (let i = num.length - 1; i >= 0; i--) {
  rev += num[i];
}
if (num === rev) {
  console.log(num, "is palindrome:", rev);
} else {
  console.log(num, "is not palindrome:", rev);
}
