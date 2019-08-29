//Return the sum of those two numbers plus the sum of all the numbers between them.

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let sum = 0
  for (let x = min; x <= max; x++) {
    sum += x;
  }
  return sum;
}

sumAll([1, 4]);
