function isBigger(a, b) {
  return a > b;
}

function getDifference(c, d) {
  let result;
  if (isBigger(d, c) === true) {
    result = d - c;
  } else {
    result = c - d;
  }
  return result;
}

getDifference(5, 3);
getDifference(5, 8);
