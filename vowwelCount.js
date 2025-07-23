function CountVowwel(sentence) {
  const vowwels = "aeiou";
  let count = 0;
  for(const word of sentence.toLowerCase()){

    if(vowwels.includes(word)){
        count++
    }
  }
  return count
}

const sentence = "hi am a student";
console.log("vowwels are:",CountVowwel(sentence))
