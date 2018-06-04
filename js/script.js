$(function(){

	$(".tabs__caption").on("click", ".tab", function(){

		var tabs = $(".tabs__caption .tab"),
		    cont = $(".tabs__content");

		tabs.removeClass("active");
		cont.removeClass("active");
		$(this).addClass("active");
		cont.eq($(this).index()).addClass("active");

		return false;
	});
});

  $(function(){
    $('.tabs_pod').hide();
    $('.third').on("click",  function() {
      $(".tabs_pod").show();
        });
    $('.q').on("click",  function() {
      $(".tabs_pod").hide();
        });
  });

var wrap = $('#wrapper'),
btn = $('.open-modal-btn'),
modal = $('.cover, .modal, .content');

btn.on('click', function() {
$('.cover').css('background', '#000');
$('.cover').css('opacity', '0.6');
modal.fadeIn();
});

$('.modal').click(function() {
wrap.on('click', function(event) {
 var select = $('.content');
 if ($(event.target).closest(select).length)
   return;
 modal.fadeOut();
 wrap.unbind('click');
});
});

$('#modal_close').click( function(){ 
  $('.modal').css('display', 'none');
  $('.cover').css('opacity', '0');
      }
    );

$('.open-modal-btn2').click( function(){ 
  $('.modal').css('display', 'none');
  $('.cover').css('opacity', '0');
      }
    );

$(".w").keyup(function() {
  $('.s').css('display', 'block');
  $('#contenInput').text($(".w").val());
});

$(".t").keyup(function() {
  $('#contenInput2').text($(".t").val());
});

