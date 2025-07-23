const array = [2, 6, 12, 90];
function largestAmongArray(array) {
  let largest = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
      return largest;

}

console.log("largest among array is:", largestAmongArray(array));
