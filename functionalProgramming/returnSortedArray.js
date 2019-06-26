var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {

  let newArr = arr.concat().sort();
  return newArr;
  }
nonMutatingSort(globalArray);
