let inputWord = prompt(`Please input a word`, ``);
const NUMBER2 = 2;
let placeCharacter = inputWord.length % NUMBER2;
let number = parseInt(inputWord.length / NUMBER2, 10);
let result;

if (!inputWord || inputWord.trim() === ``) {
  alert(`Invalid input data`);
} else if (placeCharacter === 0) {
  result = inputWord[number] + inputWord[number + 1];
  alert(result);
} else {
  result = inputWord[number];
  alert(result);
}
