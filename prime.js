const prompt = require("prompt-sync")();
const num = prompt("Enter a number");
let prime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    prime = false;
  }
}
if (prime) {
  console.log("Prime number");
} else {
  console.log("Not Prime");
}
