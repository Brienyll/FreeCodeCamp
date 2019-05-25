let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w+]/ig;
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)
