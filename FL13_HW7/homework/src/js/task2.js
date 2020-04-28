let startGame = confirm(`Do you want to play a game?`);

if (startGame) {
  const NUMBER1 = 1;
  const NUMBER2 = 2;
  const NUMBER3 = 3;
  const NUMBER5 = 5;
  const NUMBER25 = 25;
  const NUMBER50 = 50;
  const NUMBER100 = 100;

  let leftAttempts = [NUMBER3, NUMBER2, NUMBER1];
  let enteredNumber;
  let randomNumber;
  let event;
  let nextLevel;
  let restartGame;

  do {
    let level = 1;
    let rangeNumber = 5;
    let userPrize = 0;
    let possiblePrize = [NUMBER100, NUMBER50, NUMBER25];

    do {
      // Данные для 2 уровня и выше
      if (level >= NUMBER2) {
        rangeNumber = rangeNumber + NUMBER5;
      }

      // Определяем рандомное число
      randomNumber = parseInt(Math.random() * rangeNumber);

      event = 0;

      // Угадываем рандомное число
      do {
        nextLevel = false;
        possiblePrize =
          level === 1 ? possiblePrize : possiblePrize.map((i) => i * NUMBER2);
        enteredNumber = parseInt(
          prompt(`
Choose a roulette pocket number from 0 то ${rangeNumber}
Attempts left: ${leftAttempts[event]}
Total prize: ${userPrize}$
Possible prize on current attempt: ${possiblePrize[event]}$`)
        );
        if (enteredNumber === randomNumber) {
          userPrize = userPrize + possiblePrize[event];
          nextLevel = confirm(`
Congratulation, you won! Your prize is: ${userPrize}$. 
Do you want to continue?`);
        }
        event++;
      } while (event < NUMBER3 && enteredNumber !== randomNumber);

      level++;
    } while (nextLevel);

    alert(`Thank you for your participation. Your prize is: ${userPrize}$`);
    restartGame = confirm(`Do you want to play again?`);
  } while (restartGame);
} else {
  alert(`You did not become a billionaire, but can`);
}
