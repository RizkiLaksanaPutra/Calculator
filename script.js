const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");
const equalButton = document.getElementById("equal");
const currentNumberScreen = document.getElementById("current-number");
const lastNumberScreen = document.getElementById("last-number");

let firstNumber = "";
let secondNumber = "";
let operator = null;
let shouldResetScreen = false;
let shouldResetOperation = false;

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function substract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function remainder(firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

function operate(operator, firstNumber, secondNumber) {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return substract(firstNumber, secondNumber);
    case "x":
      return multiply(firstNumber, secondNumber);
    case "÷":
      if (secondNumber === 0) return null;
      else return divide(firstNumber, secondNumber);
    case "%":
      return remainder(firstNumber, secondNumber);
    default:
      return null;
  }
}

function evaluate() {
  if (operator === null || shouldResetScreen) return;
  if (operator === "÷" && currentNumberScreen.textContent === "0") {
    alert("You can't divide by 0!");
    return;
  }
  secondNumber = currentNumberScreen.textContent;
  currentNumberScreen.textContent = roundResult(
    operate(operator, firstNumber, secondNumber)
  );
  lastNumberScreen.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  operator = null;
}

function setOperation(newOperator) {
  if (operator !== null) evaluate();
  firstNumber = currentNumberScreen.textContent;
  operator = newOperator;
  lastNumberScreen.textContent = `${firstNumber} ${operator}`;
  currentNumberScreen.textContent = "";
  shouldResetScreen = true;
  shouldResetOperation = false;
}

function deleteNumber() {
  currentNumberScreen.textContent = currentNumberScreen.textContent
    .toString()
    .slice(0, -1);
}

function resetScreen() {
  currentNumberScreen.textContent = "";
  shouldResetScreen = false;
}

function clear() {
  currentNumberScreen.textContent = "0";
  lastNumberScreen.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operator = null;
}

function appendNumber(number) {
  if (currentNumberScreen.textContent === "0" || shouldResetScreen)
    resetScreen();
  if (shouldResetOperation) {
    resetScreen();
    clear();
    currentNumberScreen.textContent = ""
    shouldResetOperation = false;
  }
  currentNumberScreen.textContent += number;
}

function appendDecimal() {
  if (shouldResetScreen) resetScreen();
  if (currentNumberScreen.textContent === "") {
    currentNumberScreen.textContent = "0";
  }
  if (currentNumberScreen.textContent.includes(".")) return;
  currentNumberScreen.textContent += ".";
}

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

equalButton.addEventListener("click", () => {
  evaluate();
  shouldResetOperation = true;
});
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
decimalButton.addEventListener("click", appendDecimal);
