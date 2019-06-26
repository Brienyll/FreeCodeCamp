// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line
  this.forEach(el => {
    if (callback(el)) {
      newArray.push(el);
    }
  });
  // Add your code above this line
  console.log(newArray);
  return newArray;
};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});
