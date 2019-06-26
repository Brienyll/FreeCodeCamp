function sliceArray(anim, beginSlice, endSlice) {
  let arr = anim.slice(beginSlice, endSlice);
  return arr;
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
