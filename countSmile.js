function countSmile(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    var smileCount = arr[i];

    if (smileCount.length === 2) {
      if (
        (smileCount[0] === ":") ||
        ((smileCount[0] === ";") && (smileCount[1]=== ")")) ||
        (smileCount[1]=== "D")
      ) {
        count++;
      }
    }

    if (smileCount.length === 3) {
      if (
        (smileCount[0] === ":") ||
        ((smileCount[0]) === ";") && ((smileCount[1]=== "-")) ||
        ((smileCount[0] === "~") && (smileCount[2] === ")")) ||
        (smileCount[2]=== "D")
      ) {
        count++;
      }
    }
    if (arr.length === 0) {
      count = 0;
    }
  }
  return count;
}
