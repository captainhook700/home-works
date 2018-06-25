(function(){
	
		$($('.wrapper')[0]).find('.button').click(function(){
			$($('.wrapper')[0]).attr('hidden',true);
			$($('.wrapper')[1]).removeAttr('hidden')
		});
		$($('.wrapper')[1]).find('.button').click(function(){
			$($('.wrapper')[1]).attr('hidden',true);
			$($('.wrapper')[2]).removeAttr('hidden')
		});
		
		$($('.wrapper')[2]).find('.button_back').click(function(){
			$($('.wrapper')[2]).attr('hidden',true);
			$($('.wrapper')[1]).removeAttr('hidden')
		});
		$($('.wrapper')[1]).find('.button_back').click(function(){
			$($('.wrapper')[1]).attr('hidden',true);
			$($('.wrapper')[0]).removeAttr('hidden')
		});
})()