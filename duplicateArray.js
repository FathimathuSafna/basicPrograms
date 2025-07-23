let array = [2,7,9,7,3]
function sameElement(array){
    return [...new Set(array)]

    //convert the array into set which replaces all the dupliactes into unique value which set only alllow unique values 
    //and return back to an array
}

result = sameElement(array)
console.log(result)