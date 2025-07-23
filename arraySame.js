let array = [2,7,9,7,3]
function sameElement(array){
    for(let i = 0; i <=array.length-1 ; i++){
        if(array[i] === "_") continue
        for(let j = i+1 ; j<= array.length-1;j++){
            if (array[i] === array[j]){
                array[j] = "_"
            }
        }
    } return array
}

result = sameElement(array)
console.log(result)