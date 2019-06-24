function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (let i=0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  let strF = splitStr.join(' ');
  return strF;
}

titleCase("sHoRt AnD sToUt");
