function modal() {
    var firstNum = prompt("Enter the number");

    if (firstNum === "") {
        alert("Is empty!");
        return modal();
    } else if (!!firstNum === false) {
      return;
    }

    switch(isNaN(firstNum)) {
        case true:
            alert("Not a number");
            modal();
            break;
        case false:
            var secondModal = function() {
                var secondNum = prompt("Enter the second number");

                if (secondNum === "") {
                    alert("Is empty!");
                    return modal();
                } else if (!!secondNum === false) {
                  return;
                }

                switch(isNaN(secondNum)) {
                    case true:
                        alert("Not a number");
                        modal();
                        break;
                    case false:
                        var operation = function() {
                            var operator = prompt("Enter operator");
                            var result = confirm("Display result?");

                            switch(operator || !!operator) {
                                case false:
                                  return;
                                  break;

                                case '+':
                                    if (result === true) {
                                        alert((+firstNum)+(+secondNum));
                                    } else {
                                        modal();
                                    }
                                    break;

                                case '-':
                                    if (result === true) {
                                        alert((+firstNum)-(+secondNum));
                                    } else {
                                        modal();
                                    }
                                    break;

                                case '*':
                                    if (result === true) {
                                        alert((+firstNum)*(+secondNum));
                                    } else {
                                        modal();
                                    }
                                    break;

                                case '/':
                                    if (secondNum === "0") {
                                        alert('Impossible');
                                        modal();
                                    } else if (result === true) {
                                        alert((+firstNum)/(+secondNum));
                                    } else if (result === false) {
                                        modal();
                                    }
                                    break;
                                default:
                                    alert("Unknown operator");
                                    modal();
                            }
                        }
                        operation();
                        break;
                }
            }
            secondModal();
            break;
    }
}

modal();
