let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function appendNumber(number) {
    if (currentInput === '0') currentInput = '';
    currentInput += number;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '') return;
    if (['+', '-', '*', '/', '%'].includes(currentInput.slice(-1))) {
        currentInput = currentInput.slice(0, -1);
    }
    currentInput += operator;
    display.textContent = currentInput;
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.textContent = currentInput;
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput.replace('%', '/100')).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}
