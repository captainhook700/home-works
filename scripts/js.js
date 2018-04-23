
var sum_main,
	min_main,
	pow_main,
	fuk_main;
	
var calkulator = {
suma: sum_main, //!!!!
minus: min_main,
pow: pow_main,
fuk: fuk_main
}

function sum(){
	alert("Мы проводим суммирование");
	var n = prompt("задайте количество аргументов. Стандартное количество ","2");
	var der = 0, res;
	for(var i = 0; i < n; i++){ 
		arguments[i] = +prompt("введите аргумент",);
		alert("Вы ввели аргумент" + " " + arguments[i]); 
		var ser = arguments[i];
		der = +der + +ser;
	}
	return der;
}

function min(){
	var n = +prompt("задайте количество аргументов. Стандартное количество ","2");
	var dez = +prompt("задайте аргумент от которого отнимаем",);
	var res;
	for(var i = 0; i < n; i++){ 
		arguments[i] = +prompt("введите аргумент",);
		alert("Вы ввели аргумент" + " " + arguments[i]); 
		var ser = arguments[i];
		res = +dez - +ser;	
	}
	return res;
}

function pow(){
	alert("Мы проводим возведения в степень");
	var n = +prompt("Задайте значение основания","2");
	var b = +prompt("Задайте значение показателя","2");
	var result;
	return result = Math.pow(n,b);
}

function fuk(){
	alert("Мы проводим вычисление факториала");
	var num = +prompt("","5");
	var res = [];
	var result;
	for(var i = 1; i <= num; i++){
		res[i] = i; 
	}
	alert(res);
	var fak = 1,q;
	for(var j = 0; j < num; j++){
		res[q] = res[j+1];
		result = res[q];
		fak = fak * result;
	}
	alert(fak);
}

alert("привет! вас привествует калькулятор, у нас есть возможность провести расчет:")
for(; ;){

	var result = prompt("sum, minus, pow, fuk","sum"), res;
	if(result == "sum"){
		sum_main = sum();
		alert(this.calkulator.suma);
		res = confirm("Еще вычисления делать будем?");
		if(res = true){
			continue;
		}
		else{
			break;
		}
	}
	else if(result == "minus"){
		min_main = min();
		alert(this.calkulator.suma);
		res = confirm("Еще вычисления делать будем?");
		if(res = true){
			continue;
		}
		else{
			break;
		}
	} 
	else if(result == "pow"){
		pow_main = pow();
		alert(this.calkulator.pow);
		res = confirm("Еще вычисления делать будем?");
		if(res = true){
			continue;
		}
		else{
			break;
		}
	} 
	else if(result == "fuk"){
		fuk_main = fuk();
		alert(this.calkulator.fuk);
		res = confirm("Еще вычисления делать будем?");
		if(res = true){
			continue;
		}
		else{
			break;
		}
	} 
	else{
		alert("вводим снова");
	}
}

/*function(){
	var res = +prompt("Какие вычисления вы хотите произвести",);
	var res2;
	if(res = "1"){
		alert(calkulator.suma);
		res2 = confirm("Хотите сделать новые вычисления");
		if(res2 = true){
			result();
		}
		else{
			
		}
	}
	else if(res = "2"){
		alert(calkulator.minus);
		res2 = confirm("Хотите сделать новые вычисления");
		if(res2 = true){
			result();
		}
		else{
			break;
		}
	}
	else{
		result();
	}
}*/















