var arr = [];
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      arr.unshift("I am 1 strange loop.");
    
    }
    else {
      var num = i;
      arr.push('I am ${num} strange loops.');
      
    }
    return arr;
  }
  return arr;
}