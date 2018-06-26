$('.menu').click(function() {
    $(event.target.offsetParent).children('.submenu').toggleClass('hide')
  })
  
  $('.submenu').click(function() {
    $(this).children('.submenu').css({
      left: '100px',
      top: '10px'
    }).toggleClass('hide')
  })
  
  $('.submenu ul').click(function() {
    console.log($(this).toggleClass('hide'))
  })
  
