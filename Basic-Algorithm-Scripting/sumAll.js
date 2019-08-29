//Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0
  for (let x = min; x <= max; x++) {
    sum += x;
  }
  return sum;
}

sumAll([1, 4]);
