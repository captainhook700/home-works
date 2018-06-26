$(document).ready(function() {
    $('.menu').find('.menu__item').css({
      listStyle: 'none',
      width: '280px',
      lineHeight: '2',
      backgroundColor: '#B0E0E6',
      borderRadius: '5px',
      padding: '15px',
      marginBottom: '10px',
      fontSize: '16px',
      boxSizing: 'border-box'
    });
  
    $('.menu__item:first-child').next().css('background', '#FFB6C1');
  
    $('.menu__item:last-child').prev().css('background', '#FF7F50');
  
    $('.menu__item').parent().css('font-family', 'fantasy');
  
    $('.menu__item').parents().css({
      margin: '0',
      padding: '0'
    });
  
    $('.menu').children(':first-child').css('background-color', '#EE82EE');
  
    $('.menu__item').closest('.menu').css({
      width: '480px',
      margin: '10px auto'
    });
  
    $('.menu__item').append('<div>Welcome, have a good luck.</div>');
  
    $('.menu__item').prepend('<b>Hello!</b>');
  
    $('.menu').before('<h1>Menu</h1>').parent().find('h1').css({
      display: 'block',
      marginTop: '20px',
      fontFamily: 'fantasy',
      textAlign: 'center'
    });
  
    $('.menu').after('<h2>...</h2>').parent().find('h2').css({
      display: 'block',
      margin: '0',
      fontFamily: 'fantasy',
      textAlign: 'center'
    });
  
    $('h2').text('---');
  
    $('h1, h2').html('');
  
    setTimeout("$('.menu__item').remove(':last-child')", 10000);
  
  });
  