let arr = [2,9,5,3]
function sumArray(arr){
    let sum = 0
    for(i=0;i<=arr.length-1;i++){
        sum = sum +arr[i]
    }
    return sum
}
let result = sumArray(arr)
console.log("sum of array is:",result)