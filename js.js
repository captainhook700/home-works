(function(){
	

	$('.inline_list_main > li').mouseenter(function(event){	
		if($('.inline_list_1').prop('style',"display: none")){
			
			$('.inline_list_3').fadeOut();
			$('.inline_list_2').fadeOut();
			console.log('main');
		}
		$(this).find('.inline_list_1').toggle(true);
	setTimeout(function(event){	
		
		$('.inline_list_1').fadeOut();

		},3000);
	});	

		$('.inline_list_1 > li').click(function(event){
			if($('.inline_list_2').prop('style',"display: none")){
			$(this).find('.inline_list_2').toggle(true); 
			console.log('one_one');	
			}
		});
		$('.inline_list_2 > li').click(function(event){
			if($('.inline_list_3').prop('style',"display: none")){
			 $(this).find('.inline_list_3').toggle();
			console.log('three');
			}
		});
			
		
		 
})();
