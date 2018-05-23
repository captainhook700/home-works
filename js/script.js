$(document).ready(function(){
  var menu = $("#menu");
  $('li', menu).hover(function() {
          $('>ul',this).slideDown();
      },
      function(){
          $('>ul',this).slideUp();
      }
  );
});