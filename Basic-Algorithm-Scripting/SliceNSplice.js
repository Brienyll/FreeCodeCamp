function frankenSplice(arr1, arr2, n) {
  let arrT = arr2.slice();
  for (let i=0; i < arr1.length; i++) {
    arrT.splice(n, 0,arr1[i]);
    n++;
  }
  return arrT;
}

frankenSplice([1, 2], ["a", "b"], 1);
//a,1,2,b
