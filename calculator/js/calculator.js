

let [...numbers] = document.getElementsByClassName('key-number');
let [...operations] = document.getElementsByClassName('key-operation');

let execute = document.getElementById('equal');
let result = document.querySelector('#result');
let showResult = document.querySelector('#result');

let mathOperations = ['+', '-', '/', 'x', '=', 'C'];
let resultOperation = [];

let number = '';
export function listElements(element) {
    element.map((el) => {
        el.addEventListener('click', (e) => {
            let targetValue = e.target.getAttribute('value');

            if (result.innerHTML === '0') {
                result.innerHTML = '';
            }
            result.innerHTML += targetValue;
            number += targetValue;

            if (mathOperations.includes(targetValue)) {
                number = getNumberFromString(
                    number.substring(0, number.length - 1)
                );
                resultOperation.push(number);
                resultOperation.push(targetValue);
                number = '';

                if (targetValue === 'C') {
                    resetValues(result);
                }

                if (targetValue === '=') {
                    resultOperation.pop();

                    result.innerHTML = solveList(resultOperation);
                }
            }
        });
    });
}

function resetValues(result) {
    resultOperation = [];
    result.innerHTML = '0';
    showResult.innerHTML = '0';
}


function getNumberFromString(string) {
    return parseFloat(string);
}

function solveList(list) {
    console.log(list);
    while (list.includes('/')) {
        let operationIndex = list.indexOf('/');
        let result = divide(list[operationIndex - 1], list[operationIndex + 1]);
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }
    while (list.includes('x')) {
        let operationIndex = list.indexOf('x');
        let result = multiply(
            list[operationIndex - 1],
            list[operationIndex + 1]
        );
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }
    while (list.includes('-')) {
        let operationIndex = list.indexOf('-');
        let result = subtract(
            list[operationIndex - 1],
            list[operationIndex + 1]
        );
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }
    while (list.includes('+')) {
        let operationIndex = list.indexOf('+');
        let result = add(list[operationIndex - 1], list[operationIndex + 1]);
        list[operationIndex] = result;
        list.splice(operationIndex - 1, 1);
        list.splice(operationIndex, 1);
    }

    return list[0];
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b > 0) {
        return a / b;
    }
}
function multiply(a, b){
    return a * b;
}

listElements(numbers);
listElements(operations);
console.log('😄');

