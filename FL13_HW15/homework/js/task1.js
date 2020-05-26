function assign() {
  let assignResult = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    let keysArr = Object.keys(arguments[i]);

    for (let y = 0; y < keysArr.length; y++) {
      let keyValue = keysArr[y];
      assignResult[keyValue] = arguments[i][keyValue];
    }
  }

  return assignResult;
}