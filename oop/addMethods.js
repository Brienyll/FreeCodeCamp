function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log('eating');
  },
  describe: function() {
    console.log('happy');
  }
};
