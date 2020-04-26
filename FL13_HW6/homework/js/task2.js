let inputWord = prompt(`Please input a word`, ``);
const NUMBER2 = 2;

if (!inputWord || inputWord === null || inputWord.trim() === ``) {
  alert(`Invalid input data`);
} else {
  let placeCharacter = inputWord.length % NUMBER2;
  let number = parseInt(inputWord.length / NUMBER2, 10);
  let result;

  if (placeCharacter === 0) {
    result = inputWord[number] + inputWord[number + 1];
  } else {
    result = inputWord[number];
  }

  alert(result);
}
