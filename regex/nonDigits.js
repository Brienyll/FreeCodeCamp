let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/gi;
let result = numString.match(noNumRegex).length;
//24
