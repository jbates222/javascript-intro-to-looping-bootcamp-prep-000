var arr = [];
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      arr.push("I am 1 strange loop.");
      i++;
    }
    else {
      arr = [...arr, 'I am ${i} strange loops.'];
      i++;
    }
  }
  return arr;
}