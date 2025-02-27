const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const plus = document.getElementById("plus")

const currentNumber = document.getElementById("current-number");

const numberButtons = [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
];

let firstNumber = null;
let operator = null;

numberButtons.forEach((button, index) => {
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
