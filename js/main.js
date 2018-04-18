var num1,
	num2,
	result,
	operation;
 /*есть переменные(которые выше) и должны
	быть функции на каждое действие,
	и я так понимаю что должна быть одна функция
	в которой все остальные функции
	выполняют свою работу, как то так? */
count();
function count() {                 			 //тут запросы на числа и
								   			 // и скорей всего тут же можно и 
	var num1 = prompt('choose number1', '')  // проверить числа
		
	if (num1 != isNaN) {
		alert('NO NUMBER')
	} else if {
		return (count);
	} else if {						
		var num2 = prompt('choose number2', '') // незнаю можно ли тут дальше
	}											//корректно описать num2  или
												// нужно отдельную функию создавать?
}

 function getnum() {    // функция определяет введенное первое 
 						//и второе число	
 							// тут мне не понятно как и чем забрать
 							// введенные чила

 }

 function operation() { //проверка + - * и её вычесление
 	switch (mark) {
    case "*":
      return num1 * num2;
    case "+":                     //тут я не доконца разобрался с проверкой на 
    							  //введенный оператор и опять таки чем и как его забрать
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
 }

 function result() { 	//результат

 }

 
 function checknum () {  // проверка на ввод числа или буквы
 	 
 }