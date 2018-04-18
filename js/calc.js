var firstValue,
     secondValue,
     operation,
     result,
     showResult;
 
 calculate();
 
 function calculate() {
     var onceAgain;
 
     firstValue = getValue(firstValue, 'первое');
     secondValue = getValue(secondValue, 'второе');
 
     do {
         operation = prompt('Имя операции: ', 'сложение, вычитание, произведение, деление');
 
         if (!checkOperation(operation)) {
             alert('Такая операция недопустима!');
         }
     } while (!checkOperation(operation));
 
     result = getResult(operation);
 
     if (result !== false) {
         showResult = confirm('Хочешь увидеть результат?');
         if (showResult) {
             alert('Результат: ' + result);
         } else {
             alert('Как хочешь... :)');
         }    
     }
 
     onceAgain = confirm('Ещё раз?');
 
     if (onceAgain) {
         calculate();
     } else {
         alert("До свидания.")
     }
 }
 
 function getValue(value, whichValue) {
 
     do {
         value = prompt('Введите ' + whichValue + ' значение:', whichValue + ' значение');
 
         if (!checkValue(value)) {
             alert('Это не похоже на число');
         } else {
 
             return Number(value);
         }
             
     } while (!checkValue(value));    
 }
 
 function checkValue(value) {
     value = Number(value);
 
     return !isNaN(value) && value !== Infinity;
 }
 
 function checkOperation(operation) {
 
     return operation === 'сложение' || operation === 'вычитание' || operation === 'произведение' || operation === 'деление';
 }
 
 function getResult(operation) {
     switch (operation) {
         case 'сложение':
             return firstValue + secondValue;
         case 'вычитание':
             return firstValue - secondValue;
         case 'произведение':
             return firstValue * secondValue;
         case 'деление':
 
             if (secondValue === 0) {
                 alert('На ноль делить нельзя!');
                 return false;
             } else {
                 return firstValue / secondValue;
             }
         default:
             alert('Такая операция недопустима!')
     }
 }