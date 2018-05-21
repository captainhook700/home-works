(function(){
	$('.main_main').each(function(){
		var form_1 = $(this);
		var submit_1 = $('.submit');
		function input(){
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
		}
		
		function light(){
			if($('.inputs').hasClass('empty')){
				$('.empty').css('border-bottom', '2px solid red');
			}
			setTimeout(function(){
				$('.empty').removeAttr('style');
			},500);
		}
		setInterval(function(){
			input();
			var size = $('.empty').length
			console.log(size);
			if(size > 0){
				submit_1.addClass('disaster')
			}
			else{
				submit_1.removeClass('disaster')
			}
		},500);
		submit_1.click(function(){
			if(submit_1.hasClass('disaster')){
				light();
				return false;
			}
			else{
				$('.main_main').submit(function(){
					alert('Данные успешно отправлены')
				});
			}
		});
	});
})();