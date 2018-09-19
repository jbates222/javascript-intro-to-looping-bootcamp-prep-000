var arr = [];
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i === 0) {
      arr.push('I am 0 strange loops.');
    }
    if (i == 1) {
      arr.push("I am 1 strange loop.");
    }
    else {
      arr = [...arr, 'I am ${i} strange loops.'];
    }
  }
  return arr;
}