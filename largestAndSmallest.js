let arr = [2,5,9,3]
function arraySearching(arr){
    let largest = arr[0]
    let smallest = arr[0]
for(let i = 0;i <= arr.length-1 ; i++){
   if(arr[i] >largest){
    largest = arr[i]
   }
   if(arr[i]< smallest){
    smallest = arr[i]
   }
    }
return {largest,smallest}
}
 

let result = arraySearching(arr)
console.log("largest is:",result.largest)
console.log("smallest is:",result.smallest)