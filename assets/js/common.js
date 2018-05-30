var input = $('.auto__input');
var brand = $('.auto__brand');
var data = 'data-city';

input.keyup(function() {

  brand.each(function() {
    var dataValue = $(this).attr(data);

    for (var i = 0; i < input.val().length; i++) {

      var dataValueCharAt = dataValue[i];
      var inputValueCharAt = input.val().toLowerCase()[i];

      var total = (dataValueCharAt == inputValueCharAt) ?
      $(this).show() : $(this).hide();
    }

    if (input.val() === '') {
      brand.css('display', 'block')
    }

  });

});

var input2 = $('.city__input');
var brand2 = $('.city__brand');
var data2 = 'data-brand';

input2.keyup(function() {

  brand2.each(function() {
    var dataValue = $(this).attr(data2);

    for (var i = 0; i < input2.val().length; i++) {

      var dataValueCharAt = dataValue.toLowerCase()[i];
      var inputValueCharAt = input2.val().toLowerCase()[i];

      var total = (dataValueCharAt == inputValueCharAt) ?
      $(this).show() : $(this).hide();
    }

    if (input2.val() === '') {
      brand2.css('display', 'block')
    }

  });

})
