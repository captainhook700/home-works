$('.menu__item').click(function() {
  $(event.target.offsetParent).children('.submenu').toggleClass('hide')
})

$('.submenu__item').click(function() {
  $(this).children('.submenu').css({
    left: '100px',
    top: '10px'
  }).toggleClass('hide')
})

$('.submenu__item ul').click(function() {
  console.log($(this).toggleClass('hide'))
})
