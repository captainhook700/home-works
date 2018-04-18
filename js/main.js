var num1,
    num2,
    result,
    operation;

count();
function count() {
    var num1 = getNumber('first');
    var num2 = getNumber('second');
    var operation = getOperation();
    calculate(num1, num2, operation)
}

function getNumber(word) {
    var result;

    do {
        result = +prompt('введите ' + word, '');
    } while (!isNaN(result));

    return result;
}

function getOperation() {
    var result;

    do {
        result = +prompt('введите операцию', '');
    } while (checkOperation(result));

    return result;
}

function checkOperation(operation) {

    return operation === '+' || operation === '-';
}

function calculate(num1, num2, mark) {
    switch (mark) {
   case "*":
     return num1 * num2;
   case "+":
     return num1 + num2;
   case "-":
     return num1 - num2;
   case "/":
     if (num2 !== 0) {
       return num1 / num2;
     } else {
       return "не делится на нуль";
     }
 }
}