function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n-1));
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
