var menu = $('.menu');
var submenu = $('.submenu')
var tab = $('.menu__tab');
var addTab = $('.submenu__tab:last-child');
var modalBtn = $('.modal__btn');
var modalFirstInput = $('.modal__input:first-child');
var modalLastInput = $('.modal__input:last-of-type');

menu.click(function(e) {
  $(e.target).toggleClass('active');
  tab.not(e.target).removeClass('active');

  if ($(e.target).hasClass('active')) {
    $(e.target).next().fadeIn();
  } else {
    $(e.target).next().fadeOut();
  }

  if (e.target.className == 'submenu__tab') {
    $(e.target).next().fadeIn();
  }

  tab.not(e.target).next().hide()
  
});

addTab.click(function() {
  $( '.modal' ).dialog({
      autoOpen: true,
      show: {
        effect: "blind",
        duration: 500
      }
    });
});

modalBtn.click(function() {
  menu.append('<li class="menu__tab">' + modalFirstInput.val() + '</li>')
  .append('<p class="menu__tab__desc">' + modalLastInput.val() + '</p>')
});
