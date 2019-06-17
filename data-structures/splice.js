function sumOfTen(arr) {
  // removes 2 elements starting at index 2
  arr.splice(2, 2);

  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
// 10

