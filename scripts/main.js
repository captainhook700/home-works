do {
    do {
        var number1 = +prompt("Первое число?");
        } while (isNaN(number1));

    do {
        var number2 = +prompt("Второе число?");
        } while (isNaN(number2));

    // do {
    //     var action = prompt("Какое действие выполнить? Возможные значения + - / * ");
    //     } while (action !== "+");

var action = prompt("Какое действие выполнить? Возможные значения + - / * ");
var res = confirm("Вы хотите увидеть результат?");
} while (res != true) ;

if (res == true) {
    switch (action) {
        case "+" :
            alert(number1 + number2);
            break;
        case "-" :
            alert(number1 - number2);
            break;
        case "/" :
            if (number2 !== 0) {
            alert(number1 / number2);
            break;
            } else {
            alert("не делится на ноль");}
            break;
        case "*" :
            alert(number1 * number2);
            break;
        default :
            alert("не то");
            break;
    }
}
