/*
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str) { // LBH QVQ VG!
  var characters = str.split('');
  
  return characters.map(function(letter){
    letter = letter.charCodeAt();
    if (letter >= 65 && letter <=77) {
      letter += 13;
    } else if (letter >= 78 && letter <= 90){
      letter -=13;
    }
    return String.fromCharCode(letter);
 }).join('');
  

}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
