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
