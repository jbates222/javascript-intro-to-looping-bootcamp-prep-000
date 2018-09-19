var arr = [];
function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i == 0) {
      arr[0] = "I am 1 strange loop.";
    
    }
    if (i == 1) {
      arr[0] = "I am 1 strange loop.";
    
    }
    else {
      arr = [...arr, 'I am ${i} strange loops.'];
      
    }
  }
  return arr;
}