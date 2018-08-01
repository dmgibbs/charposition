function letterIndices(string) {
  newString = string.toLowerCase();
  charArray = newString.split("");

  var positions = {};
  for ( var i = 0; i < charArray.length; i++) {
    if ((charArray[i] !== " ") && !positions[charArray[i]]) {
      positions[charArray[i]] = [i];
    }
    else if ((charArray[i] !== " ") && positions[charArray[i]]) {
      positions[charArray[i]].push(i);
    }
  }
  return positions;
}

letterIndices("lighthouse in the house");