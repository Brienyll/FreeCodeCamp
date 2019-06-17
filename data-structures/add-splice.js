function htmlColorNames(arr) {

  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')

  return arr;
} 
 
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
//["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurqoise", "FireBrick"]
