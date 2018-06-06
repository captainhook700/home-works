(function(){
	$('main').tabs();
})();

(function(){
		$('#button_create_end').click(function(){
		var name = $('#text_create').val();
		var data = $('#data').val();
		var color =	$('#color').val();
		var color_text = $('#color_text').val();
		var texterea_create = $('#texterea_create').val();
				
		var html = '<div style="display:inline-block; margin-right:20px;margin-bottom:20px;"><h3>' + name + '</h3><div style="padding:10px;display:inline-block; margin-right:20px;margin-bottom:20px;border-radius:10px 40px 10px 40px; width: 100px; height:100px;font-size: 12px;text-align:center;background:'+ color +';color:'+color_text+'"title='+ texterea_create +'"><br><h5>'+ data +'</h5></div></div>' 
		$('#Album ul').append(html);
			});
})();

		
(function(){
		
		$('#main_main_moduls').dialog({
			modal:true, 
			autoOpen:true,
			function:init()
		});
		
		function init(){
		$('#main_main_moduls').each(function(){
			var form_1 = $(this);
			var submit_1 = $('.submit');
			$('.inputs').on('keyup',function(){
				var pass = form_1.find('#pass').val();
				var pass_2 = form_1.find('#pass_2').val();
				form_1.find('.inputs').each(function(){
					if($(this).val() != ''){
						$(this).removeClass('empty');
						$(this).css('border-bottom', '2px solid green');
						if(pass === pass_2){
							$('#pass').css('border-bottom', '2px solid green');
							$('#pass_2').css('border-bottom', '2px solid green');
						}
						else{
							$('#pass').css('border-bottom', '2px solid red');
							$('#pass_2').css('border-bottom', '2px solid red');
						}
					}
					else{
						$(this).addClass('empty');
						$(this).removeAttr('style');
					}
				});
				var size = $('.empty').length;
				console.log(size);
				if(size > 0){
					submit_1.addClass('disaster')
				}
				else{
					submit_1.removeClass('disaster')
				}
			});
			function light(){
				if($('.inputs').hasClass('empty')){
					$('.empty').css('border-bottom', '2px solid red');
				}
				setTimeout(function(){
					$('.empty').removeAttr('style');
				},500);
			}
			submit_1.click(function(){
				if(submit_1.hasClass('disaster')){
					light();
					return false;
				}
				else{
					$('#main_main_moduls').dialog('close');
					
				}
			});
		 });
	}
})();