"use strick";
//кальккулятор простых операций
function main_calculator_simple(){
	var	num_1;
	for(i = 0; i < 10000000000000;i++){
		num_1 = +prompt("Введите первое число", );
		if(num_1 >= 0 || num_1 <= 0){
			alert("Вы ввели ЧИСЛО = " + num_1);
			break;
		}
		else{
			alert("Введите еще раз число 1");
		}
	}

	var	num_2;
	for(j = 0; j < 10000000000000;j++){
		num_2 = +prompt("Введите второе число", );
		if(num_2 >= 0 || num_2 <= 0){
			alert("Вы ввели ЧИСЛО = " + num_2);
			break;
		}
		else{
			alert("Введите еще раз число 2");
		}
	}

	alert("Калькулятор поможет вам сделать такие математические операции! 1)сложение, 2)отнимание, 3)умножение, 4)деление(на 0 делится не будет)");
	
	var plus_one = +num_1 + +num_2;
	var plus_two = +num_2 + +num_1;
	
	var minus_one = +num_1 - +num_2;
	var minus_two = +num_2 - +num_1;
		
	var multiplication_one = +num_1 * +num_2;
	var multiplication_two = +num_2 * +num_1;
	
	var division_one;
		if(num_2 == 0){
			division_one = "бесконечность";
		}
		else{
			division_one = +num_1 / +num_2;
		}
	var division_two = +num_2 / +num_1;
	
	for(c = 0; c < 10000000000000;c++){
		var equally;
		var calculator = prompt("Выбетите операцию!(Введите название или номер операции)");
		if(calculator == "plus" || calculator == "Plus" || calculator == "плюс" ||calculator == "Плюс" || calculator == "сложение" || calculator == "+" || calculator == "приплюсовать" || calculator == "1" || calculator == "1)" ||  calculator == "Приплюсовать"){
			var plus_plus = prompt("сложение провести в каком порядке? 1)число-1 + число-2 или 2)число-2 + число-1? введите число операции!(пример 1) )",);
			equally = confirm("Вы хотите увидеть результат");
			if(equally == true){
				if(plus_plus == "число-1 - число-2" || plus_plus == "1" || plus_plus == "1)"){
					alert(plus_one);
					break;
				}
				else{
					alert(plus_two);
					break;
				}	
			}	
			else{
				break;
			}
		}
		
		else if(calculator == "minus" || calculator == "минус" || calculator == "-" || calculator == "Минус" || calculator == "Minus" || calculator == "отнимание" || calculator == "Отнимание" || calculator == "отнимание" || calculator == "2" || calculator == "2)"){
			var minus_minus = prompt("отнимание провести в каком порядке? 1)число-1 - число-2 или 2)число-2 - число-1? введите число операции!(пример 1) )",);
			equally = confirm("Вы хотите увидеть результат");
			if(equally == true){
				if(minus_minus == "число-1 + число-2" || minus_minus == "1" || minus_minus == "1)"){
					alert(minus_one);
					break;
				}
				else{
					alert(minus_two);
					break;
				}
			}	
			else{
				break;
			}	
		}
		
		else if(calculator == "multiplication" || calculator == "Multiplication" || calculator == "*" || calculator == "Умножение" || calculator == "умножение" || calculator == "3" || calculator == "3)"){
			var multiplication_multiplication = prompt("умножение провести в каком порядке? 1)число-1 * число-2 или 2)число-2 * число-1? введите число операции!(пример 1) )",);
			equally = confirm("Вы хотите увидеть результат");
			if(equally == true){
				if(multiplication_multiplication == "число-1 * число-2" || multiplication_multiplication == "1" || multiplication_multiplication == "1)"){
					alert(multiplication_one);
					break;
				}
				else{
					alert(multiplication_two);
					break;
				}
			}	
			else{
				break;
			}		
		}
		
		else if(calculator == "multiplication" || calculator == "Multiplication" || calculator == "*" || calculator == "Умножение" || calculator == "умножение" || calculator == "4" || calculator == "4)"){
			var division_division = prompt("деление провести в каком порядке? 1)число-1 / число-2 или 2)число-2 / число-1? введите число операции!(пример 1) )",);
			alert("Внимание делить на 0 нельзя");
			equally = confirm("Вы хотите увидеть результат");
			if(equally == true){
				if(division_division == "число-1 / число-2" || division_division == "1" || division_division == "1)"){
					alert(division_one);
					break;
				}
				else{
					alert(division_two);
					break;
				}
			}	
			else{
				break;
			}	
		}
	}
}

//кальккулятор сложных операций
function main_calculator_hard(){
 var hard = +prompt("Мы можем посчитать: 1) корень или  2) число в степени",)
	switch(hard){
			case 1:
				var	number;
				for(e = 0; e < 10000000000000;e++){
				number = +prompt("Введите число", );
				if(number >= 0 || number <= 0){
					alert("Вы ввели число = " + number);
					break;
				}
				else{
					alert("Введите еще раз число");
				}
			}
				var sqrt_1 = Math.sqrt(number);
				var sqrt_main = confirm("Показать результат");
				if(sqrt_main == true){
					alert(sqrt_1);
					break;
				}
				else{
					break;
				}
				break;
			case 2:
			
				var	number_1;
				for(u = 0; u < 10000000000000;u++){
				number_1 = +prompt("Введите основание", );
				if(number_1 >= 0 || number_1 <= 0){
					alert("основание = " + number_1);
					break;
				}
				else{
					alert("Введите еще раз основание");
				}
			}
				var	number_2;
				for(p = 0; p < 10000000000000;p++){
				number_2 = +prompt("Введите показатель степени", );
					if(number_2 >= 0 || number_2 <= 0){
					alert("Вы ввели поазатель степени  = " + number_2);
					break;
				}
				else{
					alert("Введите еще раз показатель степени");
				}
			}
				var pow_1 = Math.pow(number_1, number_2);
				var pow_main = confirm("Показать результат");
				if(pow_main == true){
					alert(pow_1);
					break;
				}
				else{
					break;
				}
				break;
			default:
				alert("Повторите цыфру")
		}
	
}

//вызов калькулятора(вцелом)
function main_calculator(){
	alert("Вы хотите превести: 1)простые мат. операции с 2-я числами или 2)сложные математические операции одного числа?");
	var main_calculator_1 = +prompt("какие вы хотитите провести операции? Введите номер операций (1 или 2)")
	switch(main_calculator_1){
		case 1:
			main_calculator_simple();
			break;
		case 2:
			main_calculator_hard();
			break;
		default:
			alert("Повторите цыфру")
	}
}	
alert("Привет");
alert("Меня зовут Вискас");
var name = prompt("А вас как зовут?");
alert("Приятно познакомится"  + " " + name);
alert("И так приступим");
alert("Поприветсвуйте калькулятор!!");
main_calculator();
//повтор вычислений
var cycle_main_calculator = confirm("Нужно вам воспроизвеси новые вычесления");
if(cycle_main_calculator == true){
	for(r = 0; r < 10000000000000; r++){
		if(cycle_main_calculator == true){
			main_calculator();
		}
		else{
			break;
		}
	}
}
alert("Спасибо за использование калькулятора :)");
	


















