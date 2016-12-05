/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!
*/

function factorialize(num) {
  var cnt =1;
  
  for (i=1; i<=num; i++){
    cnt *= i;
  }
  return cnt;
}

factorialize(5);
