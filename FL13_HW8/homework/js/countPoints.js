function isBigger(a, b) {
  return a > b;
}

function countPoints(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i][0];
    let y = arr[i][2];
    if (isBigger(x, y)) {
      result += 3;
    } else if (isBigger(y, x)) {
      result += 0;
    } else {
      result += 1;
    }
  }
  return result;
}

countPoints([
  "3:1",
  "1:0",
  "0:0",
  "1:2",
  "4:0",
  "2:3",
  "1:1",
  "0:1",
  "2:1",
  "1:0",
]);
countPoints([
  "1:1",
  "1:2",
  "2:0",
  "4:2",
  "0:1",
  "2:3",
  "1:1",
  "0:1",
  "1:1",
  "3:0",
]);