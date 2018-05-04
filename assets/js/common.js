$( document ).ready(function() {
  $('.menu').find('.menu__item').css({
    listStyle: 'none',
    width: '280px',
    lineHeight: '2',
    backgroundColor: '#ccc',
    borderRadius: '5px',
    padding: '15px',
    marginBottom: '10px',
    fontSize: '16px',
    boxSizing: 'border-box'
  });

  $('.menu__item:first-child').next().css('background', 'lightskyblue');

  $('.menu__item:last-child').prev().css('background', 'lightcoral');

  $('.menu__item').parent().css('font-family', 'monospace');

  $('.menu__item').parents().css({
    margin: '0',
    padding: '0'
  });

  $('.menu').children(':first-child').css('background-color', 'palegreen');

  $('.menu__item').closest('.menu').css({
    width: '280px',
    margin: '20px auto'
  });

  $('.menu__item').append('<div>Lorem ipsum dolor sit.</div>');

  $('.menu__item').prepend('<b>Item Title</b>');

  $('.menu').before('<h1>Menu</h1>').parent().find('h1').css({
    display: 'block',
    marginTop: '20px',
    fontFamily: 'monospace',
    textAlign: 'center'
  });

  $('.menu').after('<h2>...</h2>').parent().find('h2').css({
    display: 'block',
    margin: '0',
    fontFamily: 'monospace',
    textAlign: 'center'
  });

  $('h2').text('---');

  $('h1, h2').html('');

  setTimeout("$('.menu__item').remove(':last-child')", 10000);

});
