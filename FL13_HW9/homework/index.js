function convert() {
  let result = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === `string`) {
      result.push(parseInt(arguments[i]));
    } else if (typeof arguments[i] === `number`) {
      let x = `` + arguments[i];
      result.push(x);
    }
  }
  return result;
}

function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

function mapArray(arr, func) {
  let result = [];
  function newFunc(el) {
    result.push(func(parseInt(el)));
  }
  executeforEach(arr, newFunc);
  return result;
}

function filterArray(arr, func) {
  let result = [];
  function newFunc(el) {
    if (func(el)) {
      result.push(el);
    }
  }
  executeforEach(arr, newFunc);
  return result;
}

function containsValue(arr, value) {
  let resultTrue = 0;
  function newFunc(el) {
    if (el === value) {
      resultTrue++;
    }
  }
  executeforEach(arr, newFunc);
  return resultTrue > 0;
}

function flipOver(str) {
  let result = ``;
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function makeListFromRange(arr) {
  let result = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    result.push(i);
  }
  return result;
}

function getArrayOfKeys(arr, key) {
  let result = [];
  function newFunc(el) {
    result.push(el[key]);
  }
  executeforEach(arr, newFunc);
  return result;
}

function substitute(arr) {
  let result = [];
  const NUMBER20 = 20;
  const NUMBER10 = 10;
  function func(el) {
    if (el >= NUMBER20 || el <= NUMBER10) {
      result.push(el);
    } else {
      result.push(`*`);
    }
  }
  mapArray(arr, func);
  return result;
}

function getPastDay(a, b) {
  let result = new Date(a);
  result.setDate(result.getDate() - b);
  return result.getDate();
}

function formatDate(a) {
  let result = ``;
  const NUMBER10 = 10;
  let date = a.getDate();
  let year = a.getFullYear();
  let month = a.getMonth() + 1;
  let hours = a.getHours();
  let minutes = a.getMinutes();
  if (hours < NUMBER10) {
    hours = `0` + hours;
  }
  if (minutes < NUMBER10) {
    minutes = `0` + minutes;
  }
  result = `${year}/${month}/${date} ${hours}:${minutes}`;
  return result;
}
