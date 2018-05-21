$(document).ready(function(){
    $('#email').on('blur', emailValidation);
    
    $('#password').on('keyup', passwordValidation);
    $('#password').on('keyup', confirmValidation);

    $('#confirm').on('keyup', confirmValidation);

    $('input[type="submit"]').prop('disabled', true);
    $('input[type="submit"]').on('click', submitForm);

    var firstNum = Math.floor(Math.random() * (10 - 1)) + 1;
    var secondNum = Math.floor(Math.random() * (10 - 1)) + 1;
    resultCaptcha = firstNum+secondNum;
    $('#captcha').attr('placeholder',firstNum + '+' + secondNum);
    $('#captcha').on('keyup', captchaValidation);

});
var resultCaptcha = 0;
var Invalid = {
    email: 0,
    password: 0,
    confirm: 0,
    captcha: 0
}

var Validation = {
    status : {
        0: "OK",
        1: "Captcha not valid",
        2: "Пустое поле email",
        3: "Пустое поле password",
        4: "Пустое поле confirm password",
        5: "Пароль должен быть длиннее 6 символов",
        6: "Пароль и подтверждение не совпадают",
        7: "Введите корректный email",
        8: "Введите капчу!"

    },
    email : function(input_email) {
        email = $(input_email).val();
        var result = 2;
        if (email != '') {
             var pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
            result = (pattern.test(email)) ? 0 : 7;
        }
        Invalid['email'] = result;
        this.requirements(input_email, result);
    },

    password : function(input_password) {
        var pass = $(input_password).val();
        var result = 3;
        if (pass != '') {
            result = (pass.length > 5) ? 0 : 5;
        }
        Invalid['password'] = result;
        this.requirements(input_password, result);
    },

    confirm(pass, input_confirm) {
        var confirm = $(input_confirm).val()
        var result = 4;
        if (confirm !== '') {
            result = (pass === confirm) ? 0 : 6;
        }
        Invalid['confirm'] = result;
        this.requirements(input_confirm, result);
    },

    captcha : function(input_captcha){
        var result = 8;
        var captcha = $(input_captcha).val()
        if (captcha != ""){
            result = (+captcha == resultCaptcha) ? 0 : 1;
        }
        Invalid["captcha"] = result;
        this.requirements(input_captcha, result);
    },

    requirements: function(input, error_text) {
        $(input).addClass((!error_text) ? 'inputValid' : 'inputInvalid').removeClass((!error_text) ? 'inputInvalid' : 'inputValid');
        var requirements =  $(input).next('.requirements');
        if (error_text) {
            requirements.html(this.status[error_text]);
            requirements.addClass('visibleRequirements');
        }else{
            requirements.removeClass('visibleRequirements');
        }
        this.stateToSend();
    },

    stateToSend : function(){
        if (!Object.values(Invalid).reduce(function(sum, val) { return sum + val; })) {
            $('input[type="submit"]').removeAttr('disabled');
            return true;
        }
        return false;
    }
};


function emailValidation(event) {
    Validation.email(this);
}

function passwordValidation(event) {
    Validation.password(this);
}

function confirmValidation(event) {
    var password = $("#password").val();
    var confirm = $("#confirm");
    Validation.confirm(password, confirm);
}

function captchaValidation(event) {
    Validation.captcha(this);
}

function submitForm(event){
    if (Validation.stateToSend()) {
        alert("Данные отправлены");    
    }else{
        $('input[type="submit"]').prop('disabled', true);
        return false;
    }
    
}
