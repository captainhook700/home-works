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
		return result;
	},
	pow: function(base, exponent) {
		if (!this.testingNumber(arguments)) return 'Invalid input data';
		return Math.pow(base, exponent);
	}


}