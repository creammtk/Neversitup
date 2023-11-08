function findPermute(string) {
  if (string.length === 1) {
    return [string];
  }
  var permute = [];
  for (var i = 0; i < string.length; i++) {
    var fixedChar = string[i];
    let removeChar = string.slice(0, i) + string.slice(i + 1);
    let swapChar = findPermute(removeChar);

    for (let j = 0; j < swapChar.length; j++) {
        permute.push(fixedChar + swapChar[j]);
    }
  }

  return Array.from(new Set(permute));
}

module.exports = findPermute;

