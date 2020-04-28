let login = prompt(`Please enter your login`);

const FOUR_SYMBOLS = 4;
const TWENTY = 20;

if (!login) {
  alert(`Canceled`);
} else if (login.length < FOUR_SYMBOLS) {
  alert(`I don't know any users having name length less than 4 symbols`);
} else if (login === `User` || login === `Admin`) {
  let password = prompt(`Please enter your password`);
  if (!password) {
    alert(`Canceled`);
  } else if (login === `User` && password === `UserPass`) {
    if (new Date().getHours() <= TWENTY) {
      alert(`Good day, dear User!`);
    } else if (new Date().getHours() >= TWENTY) {
      alert(`Good evening, dear User!`);
    }
  } else if (login === `Admin` && password === `RootPass`) {
    if (new Date().getHours() <= TWENTY) {
      alert(`Good day, dear Admin!`);
    } else if (new Date().getHours() >= TWENTY) {
      alert(`Good evening, dear Admin!`);
    }
  } else {
    alert(`Wrong password`);
  }
} else {
  alert(`I don’t know you`);
}
