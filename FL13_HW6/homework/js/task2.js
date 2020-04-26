let inputWord = prompt(`Please input a word`, ``);

if (!inputWord || inputWord.trim() === ``) {
  alert(`Invalid input data`);
} else {
  const NUMBER2 = 2;
  const placeCharacter = inputWord.length % NUMBER2;
  const number = parseInt(inputWord.length / NUMBER2, 10);
  let result;

  if (placeCharacter === 0) {
    result = inputWord[number] + inputWord[number + 1];
  } else {
    result = inputWord[number];
  }

  alert(result);
}
