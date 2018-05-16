var $item = $('.menu-item');
var $active = $('p');

$item.on('click', function() {
	$(this).find('p').toggleClass('active');
	
	if ($active.hasClass('active')) {
		$(this).css('background', 'lightblue');
		
	} else {
		$(this).css('background', 'linear-gradient(to top, #e9e9e9, #fbfdfc)');
	}
})
