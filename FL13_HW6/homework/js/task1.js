let checkNumber = parseFloat(prompt(`Please input check number`, ``));
let tipPercent = parseFloat(prompt(`Please input tip percentage`, ``));
const NUMBER100 = 100;
let tipAmount = checkNumber * (tipPercent / NUMBER100);
let totalSum = checkNumber + tipAmount;

if (
  isNaN(checkNumber) ||
  isNaN(tipPercent) ||
  totalSum <= 0 ||
  tipPercent > NUMBER100 ||
  tipPercent <= 0
) {
  alert(`Invalid input data`);
} else {
  alert(`
  Check number: ${Math.round(checkNumber * NUMBER100) / NUMBER100}
  Tip: ${Math.round(tipPercent * NUMBER100) / NUMBER100}% 
  Tip amount: ${Math.round(tipAmount * NUMBER100) / NUMBER100}
  Total sum to pay: ${Math.round(totalSum * NUMBER100) / NUMBER100}
  `);
}
