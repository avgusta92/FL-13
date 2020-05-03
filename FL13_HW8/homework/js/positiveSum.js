function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result += arr[i];
    }
  }
  return result;
}

positiveSum([2, 4, 6, 8]);
positiveSum([0, -3, 5, 7]);
