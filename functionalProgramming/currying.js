function add(x) {
  return (y) => {
    return (z) => {
      return x + y + z;
    }
  }
}
add(10)(20)(30);
