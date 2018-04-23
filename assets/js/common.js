var calc = {
sum: function() {
var totalSum = 0;

for (var i = 0; i < arguments.length; i++) {
totalSum += arguments[i];
}
return totalSum;
},
mult: function() {
var totalMult = 1;

for (var i = 0; i < arguments.length; i++) {
totalMult *= arguments[i];
}
return totalMult;
},
div: function() {
var totalDiv = arguments[0];

for (var i = 1; i < arguments.length; i++) {
totalDiv /= arguments[i];
}
return totalDiv;
},
sub: function() {
var totalSub = arguments[0];

for (var i = 1; i < arguments.length; i++) {
totalSub -= arguments[i];
}
return totalSub;
},
exp: function() {
var totalExp = arguments[0]**arguments[1];
return totalExp;
},
fact: function() {
return (arguments[0]) ? arguments[0] * this.fact(arguments[0] - 1) : 1;

}
}
console.log(calc.sum(5,5));
