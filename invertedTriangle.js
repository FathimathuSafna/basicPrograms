const prompt = require('prompt-sync')();
const rows = prompt("Enter a number")
for(let i = 1 ;i <= rows ; i++)
{
    let stars = " "
    for(let j=rows;j>=i;j--){
        stars += '*'
        stars += " "
    }
    console.log(stars)
}