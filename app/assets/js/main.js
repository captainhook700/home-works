var App = {
    wrapper: $('main'),

    init: (page) => {
      let template,
          context,
          htmlContent;

      $.get('assets/templates/' + page +'.hbs',  (response) => {
      template = Handlebars.compile(response);
      htmlContent = template(context);
      $(App.wrapper).html(htmlContent);
    });
  },

    getID:  () => {
      let login = $('.login');
      let pass = $('.pass');
      let email = $('.email');

      $.post('http://restapi.fintegro.com/registration', {
        login: login.val(),
        password: pass.val(),
        email: email.val()
      })
      .then(
        (response) => {
          console.log(response);
          alert('Вы успешно зарегистрировались, сейчас Вы будете перенаправлены на страницу авторизации.');
          App.init('login');
        }
      )
    },

    login: () => {
      let loginInp = $('.loginInp');
      let passInp = $('.passInp');

        $.post('http://restapi.fintegro.com/login', {
          username: loginInp.val(),
          password: passInp.val()
        })
        .then(
          (response) => {
            let token = response.token;
            localStorage.setItem('token', token);
            alert('Вы успешно авторизовались!')
          }
        ),
        (error) => console.log(JSON.parse(error.responseText));
    }
  }
