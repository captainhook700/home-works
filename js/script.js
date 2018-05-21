var form = document.querySelector('.formWithValidation');
var validateBtn = form.querySelector('.validateBtn');
var email = form.querySelector('.email');
var password = form.querySelector('.password');
var passwordConfirmation = form.querySelector('.passwordConfirmation');
var fields = document.querySelectorAll('.field');

var generateError = function (text) {
  var error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.innerHTML = text;
  return error;
}

var checkPasswordMatch = function () {
  if (password.value !== passwordConfirmation.value) {
    console.log('not equals');
    var error = generateError('Password doesn\'t match');
    passwordConfirmation.parentElement.insertBefore(error, passwordConfirmation);
  } else {
    form.submit();
  }
}

// var checkFieldsPresence = function () {
//   for (var i = 0; i < fields.length; i++) {
//     if (!fields[i].value) {
//       console.log('field is blank', fields[i]);
      
//       var error = generateError('Cant be blank');
//       form[i].parentElement.insertBefore(error, fields[i]);
//     }
//   }
// }

// function checkParams() {
//   if(fields.length != 0) {
//       $('.validateBtn').removeAttr('disabled');
//       console.log(checkParams());
//   } else {
//       $('.validateBtn').attr('disabled', 'disabled');
//       console.log(checkParams());
//   }
// }

form.addEventListener('submit', function (event) {
  event.preventDefault();

  checkPasswordMatch();

  // checkParams();

  // checkFieldsPresence();
  
})