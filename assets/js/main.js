$.ajax({
  url: 'http://restapi.fintegro.com/data.json',
  dataType: 'text',
  success: function(data) {
    var row = data.split('\n');
    var rowArr = [];

    for (var i = 0; i < row.length; i++) {
      rowArr.push(row[i].split(','));
    }

    for (var i = 0; i < rowArr.length; i++) {
      var div = document.createElement('div');

      for (var k = 0; k < rowArr[i].length; k++) {
        var span = document.createElement('span');

        $(span).append(rowArr[i][k]);
        $(div).append(span);
      }

      $('main').append(div);
    }
  }
});

var idInp = $('.id');
var firstNameInp = $('.first-name');
var lastNameInp = $('.last-name');
var emailInp = $('.email');
var genderInp = $('.gender');
var cytyInp = $('.city');


idInp.keyup(function() {
  var firstSpan = $('div:not(:first-child) span:first-of-type');

  firstSpan.each(function() {
    var dataArr = [];
    dataArr.push($(this).text().split(':'));

    var clearID = dataArr[0].slice(1);
    $(this).attr('data-id', clearID);

    if ($(this).attr('data-id') === idInp.val()) {
      $('div:not(:first-of-type)').not($(this)[0].parentElement).hide();
      $(this.parentElement)[0].style.display = 'flex';
    }

  })

  if ( !!idInp.val() === false ) {
    $('div').attr('style', 'display: none;').css('display', 'flex')
  }
});

(function() {
  alert('Реализовано только поиск по id')
})()
