const prompt = require("prompt-sync")();
const num = prompt("Enter a number");
let a = 0,
  b = 1;
for (let i = 0; i < num; i++) {
  let c = a + b;
  console.log("fibonacci series is:", a);

  a = b;
  b = c;
}
