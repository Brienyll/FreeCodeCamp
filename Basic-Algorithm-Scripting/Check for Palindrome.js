function palindrome(str) {
  // replace to lowercase
  var changeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  //reverse string
  var checkPalindrome = changeChar.split("").reverse().join("");
  //check if palindrome
  if (changeChar === checkPalindrome) {
  return true;
  } else {
    return false;
  }
}
