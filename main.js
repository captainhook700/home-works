(function(){
		$('#button').click(function(){
			$('#main_main_moduls').dialog(init())
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
					var msg   = $('#main_main_moduls').serialize();
					var log = $('#login').val();
					var pass = $('#pass').val();
					var em = $('#mail').val();
						$.ajax({
						url: 'http://restapi.fintegro.com/registration',
						data:{login:log,
							  email:em,
							  password:pass
							},
						type: 'POST',
						success: function(response){
							 alert(response.id);
							 
							 
						},
						error: function(xhr, textStatus, errorThrown) {
							alert('Ошибка: ' + textStatus+' '+errorThrown);
						}
					})			
						
				}
			});
		 });
	}
})();

(function(){
		$('#button_vhod').click(function(){
			$('#main_main_moduls_vhod').dialog()
		});
		$('.submit_vhod').click(function(){
			var log = $('#login_vhod').val();
			var pass = $('#pass_vhod').val();
				$.ajax({
				url: 'http://restapi.fintegro.com/login',
				data:{username:log,
					  password:pass
					},
				type: 'POST',
				success: function(response){
					 alert(response.token + response.profile);
					 $('#main_main_moduls_vhod').dialog('close');
					 localStorage.setItem("token", response.token);
					 window.location.reload();
				},
				error: function(xhr, textStatus, errorThrown) {
				alert('Ошибка: ' + textStatus+' '+errorThrown);
				}
			})			
						
		});
})();