/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a 

two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  var counter = 0;
  
  while (counter <arr.length) {
    newArray.push(arr.slice(counter, counter+size));
    counter += size;
    }
  return newArray;
}
