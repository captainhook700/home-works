var calc = {
	testingNumber: function(args) 
	{
		for (var i=0; i<args.length;i++){
			if (isNaN(args[i])) return false;
		}
		return true;
	},
	plus : function()
	{
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		var length = arguments.length;
		var result = (length === 0) ? 'No input data' : arguments[0];
		for (i=1;i<length;i++){
			result+=arguments[i];
		}
		return result;
	},
	minus: function() 
	{
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		var length = arguments.length;
		var result = (length === 0) ? 'No input data' : arguments[0];
		for (i = 1; i < length; i++){
			result -= arguments[i];
		}
		return result;
	},
	multiply: function() 
	{
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		var length = arguments.length;
		var result = (length === 0) ? 'No input data' : arguments[0];
		for (i = 1; i < length; i++){
			result *= arguments[i];
		}
		return result;
	},
	div: function() 
	{
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		var length = arguments.length;
		var result = (length === 0) ? 'No input data' : arguments[0];
		for (i = 1; i < length; i++){
			if (arguments[i] === 0) return 'Division by Zero';
			result /= arguments[i];
		}
		return (typeof result === 'string') ? result : result.toFixed(2);
	},
	pow: function(base, exponent) {
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		return (!base || !exponent) ? 'No input data' : Math.pow(base, exponent);
	},
	factorial: function(n) 
	{
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		return n ? n * this.factorial(n - 1) : 1;
	}
}

console.log('%c03-КАЛЬКУЛЯТОР', 'font-weight:bold;font-size:200%;');
console.log('%cTesting correct input data', 'font-weight:bold;');
console.log('PLUS 1,2,3,4,5,6,7,8,9,10:',calc.plus(1,2,3,4,5,6,7,8,9,10));
console.log('MINUS 1,2,3,4,5,6,7,8,9,10:',calc.minus(1,2,3,4,5,6,7,8,9,10));
console.log('MULTIPLY 1,2,3,4,5,6,7,8,9,10:',calc.multiply(1,2,3,4,5,6,7,8,9,10));
console.log('DIV 100,2,3,4,5:',calc.div(100,2,3,4,5));
console.log('DIV:',calc.div(0,2,3,1,5));
console.log('DIV:',calc.div(100,'2',3,1,5));
console.log('POW 2,5:',calc.pow(2,5));
console.log('FACTORIAL 5:',calc.factorial(5));

console.log('%cTesting invalid input data', 'font-weight:bold;');
console.log('PLUS:',calc.plus(1,2,3,4,5,6,7,undefined,9,10));
console.log('MINUS:',calc.minus(1,null,'sdas',4,5,6,7,8,9,10));
console.log('MULTIPLY:',calc.multiply(1,2,'sdfsdf',4,5,6,null,8,9,10));
console.log('DIV:',calc.div(0,2,'sfdgasdfsd',1,5));
console.log('DIV:',calc.div(100,2,3,0,5));
console.log('POW:',calc.pow('dasdas',1));
console.log('FACTORIAL:',calc.factorial('sdfasf'));

console.log('%cTesting clean input data', 'font-weight:bold;');
console.log('PLUS:',calc.plus());
console.log('MINUS:',calc.minus());
console.log('MULTIPLY:',calc.multiply());
console.log('DIV:',calc.div());
console.log('POW:',calc.pow());
console.log('FACTORIAL:',calc.factorial());

