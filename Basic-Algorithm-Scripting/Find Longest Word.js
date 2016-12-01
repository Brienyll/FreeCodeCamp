/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  //create array of strings breaking up every space
  var arrayOfString = str.split(' ');
  //temporary placeholder for the longest string
  var longest = '';
  // iterate through the array and compare the strings
  for(i=0; i < arrayOfString.length; i++) {
    if(longest.length < arrayOfString[i].length){
      longest = arrayOfString[i];
    }
      
  }
  str = longest;
  
  return str.length;
}
