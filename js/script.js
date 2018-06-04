$(document).ready(function() { 
  $(".country__input").on("keyup", function() { 
    var value = $(this).val().toLowerCase(); 
    $(".country > li").filter(function() { 
      $(this).toggle($(this).attr('data-country').toLowerCase().indexOf(value) > -1) 
    });
  });	
});