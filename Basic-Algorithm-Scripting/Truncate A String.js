function truncateString(str, num) {
  // Clear out that junk in your trunk
  var strings;
  if (num == 2) {
    strings = (str.slice(0, num) +'...');
    return strings;
  } else if (str.length <= 3) {
    strings = (str.slice(0, num)+'...');
    return strings;
  } else if (str.length > num) {
    strings = (str.slice(0, num -3) +'...');
    return strings;
  } else if (num == 1) {
    strings = (str.slice(0, num - 2) +'...');
    return strings; 
  } else {
    strings = str.slice(0, num);
    return strings;
  }
}

/*
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

*/
