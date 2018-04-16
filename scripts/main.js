
main();

function main() {
	var status;
	do {
		var num1 = getInputData('первое');
		var num2 = getInputData('второе');
		var result = getOperation(num1, num2);
		if (confirm('Хотите увидеть результат выполнения?')) {
			alert(result + "\n\n" + 'Для повторного запуска калькулятора нажмите F5');
			status = 0;
		}else{
			status = 1;
		}
	} while (status == 1)
}




function getInputData(strCountTxt) {
	var status = 0;
	while(status == 0) {
		var num = prompt('Введите ' + strCountTxt + ' число. ', 0);
		if (num != null && !isNaN(num) ) {
			status = 1;
		}	
	}
	return Number(num);
}

function getOperation(num1,num2) {
	do {
		var status = 1;
		var result = null;
		var operation = prompt('Введите имя операции из перечисленных: sum(+), diff(-), product(*), quotient(/)');
	
		switch(operation) {
			case 'sum':
			case '+':
				result = getSum(num1,num2);
				break;
			case 'diff':
			case '-':
				result = getDiff(num1,num2);
				break;
			case 'product':
			case '*':
				result = getProduct(num1,num2);
				break;
			case 'quotient':
			case '/':
				result = getQuotient(num1,num2);
				break;
			default:
				status = 0;
		}

	} while (status == 0);

	return result;
}

function getSum(num1, num2) {
	return num1+num2;
}

function getDiff(num1, num2) {
	return num1-num2;
}


function getProduct(num1, num2) {
	return num1*num2;
}

function getQuotient(num1, num2) {
	if (num2 === 0) {
		return 'На ноль делить нельзя :)';
	}
	return (num1/num2).toFixed(2);
}