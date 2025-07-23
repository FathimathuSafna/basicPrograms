const sentence = "i am a teacher"

function capitalize(sentence){

let words = sentence.toLowerCase().split(" ")
let capitalizeEach = words.map(word =>{
    return word.charAt(0).toUpperCase()+word.slice(1)
})
return capitalizeEach.join(" ")
}

console.log(capitalize(sentence))