function confirmEnding(str, target) {
  while (str.endsWith(target)) {
    return true;  
  }
    
  return false;
}

confirmEnding("Bastian", "n");
