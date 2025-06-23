const prompt = require("prompt-sync")();
const num = prompt("Enter a number");
function fibonacci(n) {
  if (n < 0) return "invalid input";
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

for (let i = 0; i < num; i++) {
    console.log(fibonacci(i))
}

