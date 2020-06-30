import { arr } from "./items";

let winResults = 0;
let rounds = 1;

let headerText = document.getElementById("header-text");
let contentStart = document.getElementById("content-start");
let contentChoice = document.getElementById("content-choice");
let contentResult = document.getElementById("content-result");
let gamerChoiceImg = document.getElementById("gamer-choice-img");
let rundomChoiceImg = document.getElementById("random-choice-img");
let textResultOfRound = document.getElementById("text-result-of-round");
let roundNumber = document.getElementById("round-number");
let textContentResult = document.getElementById("text-content-result");

//BUTTONS
const buttonStartLetsPlay = document.getElementById("button-start-lets-play");
const buttonChoiceRock = document.getElementById("button-choice-rock");
const buttonChoicePaper = document.getElementById("button-choice-paper");
const buttonChoiceScissors = document.getElementById("button-choice-scissors");
const buttonResetGame = document.getElementById("button-reset-game");
const buttonResultPlayAgain = document.getElementById(
  "button-result-play-again"
);

buttonStartLetsPlay.onclick = () => {
  headerText.innerHTML = "Please make your choice:";

  contentStart.style.display = "none";
  contentChoice.style.display = "flex";
};

function buttonChoiceFunc() {
  if (rounds < 3) {
    const selectedItemName = this.id.split("-")[2];
    const selectedItem = arr.find((item) => item.name === selectedItemName);

    gamerChoiceImg.style.backgroundImage = selectedItem.img;

    let random = rundomChoiceFunc();

    fightingFunc(selectedItem, random);

    rounds++;
    roundNumber.innerHTML = `#${rounds}`;
  } else {
    mainResultFunc();
  }
}

function rundomChoiceFunc() {
  let randomChois = Math.floor(Math.random() * 3);

  rundomChoiceImg.style.backgroundImage = arr[randomChois].img;

  return arr[randomChois];
}

function fightingFunc(selectedItem, random) {
  let selectWord =
    selectedItem.name.charAt(0).toUpperCase() + selectedItem.name.slice(1);
  let rundomWord = random.name.charAt(0).toUpperCase() + random.name.slice(1);

  if (selectedItem.win === random.name) {
    textResultOfRound.innerHTML = `Round ${rounds},  ${selectWord} vs. ${rundomWord}, You’ve WON!`;
    winResults++;
  } else {
    textResultOfRound.innerHTML = `Round ${rounds},  ${selectWord} vs. ${rundomWord}, You’ve LOST!`;
  }
}

function mainResultFunc() {
  contentChoice.style.display = "none";
  contentResult.style.display = "flex";

  headerText.innerHTML = "Your result:";
  textContentResult.innerHTML =
    winResults >= 2 ? `Congratulation! You’ve WON!` : `Sorry! You’ve LOST!`;
}

function playAgainFunc() {
  winResults = 0;
  rounds = 1;
  roundNumber.innerHTML = `#${rounds}`;

  headerText.innerHTML = "Press on the button for start play";

  contentResult.style.display = "none";
  contentStart.style.display = "flex";

  textResultOfRound.innerHTML = "The results of game will be here.";
}

textResultOfRound.innerHTML = "The results of game will be here.";

headerText.innerHTML = "Press on the button for start play";

buttonChoiceRock.onclick = buttonChoiceFunc;
buttonChoicePaper.onclick = buttonChoiceFunc;
buttonChoiceScissors.onclick = buttonChoiceFunc;

buttonResultPlayAgain.onclick = playAgainFunc;
buttonResetGame.onclick = playAgainFunc;
