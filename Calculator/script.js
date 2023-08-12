let resultElement = document.getElementById('result');
let currentInput = '';

function appendToResult(value) {
  currentInput += value;
  resultElement.innerText = currentInput;
}

function clearResult() {
  currentInput = '';
  resultElement.innerText = '0';
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    resultElement.innerText = currentInput;
  } catch (error) {
    resultElement.innerText = 'Error';
  }
}
