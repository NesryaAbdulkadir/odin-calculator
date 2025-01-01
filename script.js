let firstNumber = null;
let secondNumber = null;
let operator = null;
const buttonNumber = document.querySelectorAll(".num");
const display = document.querySelector(".display");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
  display.innerText = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
});

buttonNumber.forEach((number) => {
  number.addEventListener("click", populateDisplay);
});

function add(firstNumber, secondNumber) {
  return Math.trunc(firstNumber + secondNumber);
}
function subtract(firstNumber, secondNumber) {
  return Math.trunc(firstNumber - secondNumber);
}
function multiply(firstNumber, secondNumber) {
  return Math.trunc(firstNumber * secondNumber);
}
function divide(firstNumber, secondNumber) {
  if (secondNumber === 0) return "Error";

  return Math.trunc(firstNumber / secondNumber);
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "*":
      return multiply(firstNumber, secondNumber);
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return "Please enter a valid value.";
  }
}

equal.addEventListener("click", () => {
  if (firstNumber !== null && secondNumber !== null && operator) {
    const result = operate(
      operator,
      parseFloat(firstNumber),
      parseFloat(secondNumber)
    );
    display.innerText = result;
    firstNumber = result;
    secondNumber = null;
    operator = null;
  }
});

buttonNumber.forEach((number) => {
  number.addEventListener("click", populateDisplay);
});
equal.addEventListener("click", operate);

function populateDisplay(e) {
  const content = e.target.textContent;

  if (["+", "-", "*", "/"].includes(content)) {
    if (firstNumber !== null && operator !== null) {
      return;
    }
    operator = content;
    display.innerText += `${content} `;
  } else {
    if (operator === null) {
      firstNumber = firstNumber === null ? content : firstNumber + content;
    } else {
      secondNumber = secondNumber === null ? content : secondNumber + content;
    }
    display.innerText += content;
  }
}
