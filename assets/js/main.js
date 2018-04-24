var accordeon = document.querySelectorAll('a')[1];

accordeon.addEventListener('click', function() {

  accordeon.style.background="#c8e0ec";

  var attribute = document.querySelector('li[hidden]');
  attribute.removeAttribute("hidden");

  var elStyles = document.querySelectorAll('li')[2].firstChild;
  elStyles.innerHTML = 'Какой нибудь замечательный текст...';
  elStyles.style.cssText = "line-height: 100px; font-size: 16px; text-align: left; font-style: italic; background: #f2f3f7;";

});
