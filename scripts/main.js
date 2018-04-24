var calculate = {
    sum: function() {
    var resSum = 0;

    for (var i = 0; i < arguments.length; i++) {
    resSum += arguments[i];
    }
    return resSum;
},

    mult: function() {
    var resMult = 1;

    for (var i = 0; i < arguments.length; i++) {
    resMult *= arguments[i];
    }
    return resMult;
},

    div: function() {
    var resDiv = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
    resDiv /= arguments[i];
    }
    return resDiv;
},

    sub: function() {
    var resSub = arguments[0];

    for (var i = 1; i < arguments.length; i++) {
    resSub -= arguments[i];
    }
    return resSub;
},

    exp: function() {
    var resExp = arguments[0]**arguments[1];
    return resExp;
},

    fact: function() {
    if (arguments[0]) {
        return arguments[0] * this.fact(arguments[0] - 1)
    } else {
        return 1;
    }    

}
}
