let login = $('.login');
let pass = $('.pass');
let email = $('.email');
let submit = $('.submit');

let loginInp = $('.loginInp');
let passInp = $('.passInp');
let submitBtn = $('.submitBtn');

submit.click( () => {
  $.post('http://restapi.fintegro.com/registration', {
    login: login.val(),
    password: pass.val(),
    email: email.val()
  })
  .then(
    (response) => console.log(response)
  )
});


submitBtn.click( () => {
  $.post('http://restapi.fintegro.com/login', {
    username: loginInp.val(),
    password: passInp.val()
  })
  .then(
    (response) => {
      let token = response.token;
      localStorage.setItem('token', token)
    }
  ),
  (error) => console.log(JSON.parse(error.responseText));
})
