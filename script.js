const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const currentNumber = document.getElementById("current-number");

let firstNumber = null;
let operator = null;

[...numberButtons].reverse().forEach((button, index) => {
  button.addEventListener("click", () => {
    currentNumber.textContent += index;
    firstNumber = Number(currentNumber.textContent);
    console.log(firstNumber);
  });
});

function add(firstNumber, SecondNumber) {
  return firstNumber + SecondNumber;
}

function substract(firstNumber, SecondNumber) {
  return firstNumber - SecondNumber;
}

function multiply(firstNumber, SecondNumber) {
  return firstNumber * SecondNumber;
}

function divide(firstNumber, SecondNumber) {
  return firstNumber / SecondNumber;
}

function operate(operator, firstNumber, SecondNumber) {
  switch (operator) {
    case "add":
      return add(firstNumber, SecondNumber);
      break;
    case "substract":
      return substract(firstNumber, SecondNumber);
      break;
    case "multiply":
      return multiply(firstNumber, SecondNumber);
      break;
    case "divide":
      return divide(firstNumber, SecondNumber);
      break;
  }
}
