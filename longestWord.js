const prompt = require('prompt-sync')();
const sentence = prompt("Enter a string")
function longestWord(sentence){
    let words = sentence.split("")
    let longestWords = ""
    for(const word of words){
        if(word.length > longestWords.length){
            longestWords = word
        }
        return longestWords
    }
}

console.log("largest word in the sentence:",longestWord(sentence))