(function(){
	$('.tab > li:not(.tab > li:last-child)').each(function(elem){
		var li = $(this);
		li.click(function(){
			$('.tab > li').removeClass('active');
			li.addClass('active');
			$('.tab_content').removeClass('active').eq(elem).addClass('active');
		})
	});
	$('.main_two > li').each(function(elem){
		var lis = $(this);
		lis.click(function(){
			$('.main_two > li').removeClass('active');
			lis.addClass('active');
			$('.tab_content').removeClass('active').eq(elem).addClass('active');
			$('.main_two > li').removeClass('active_s').eq(elem).addClass('active_s');;
		})
	});
	$('.tab > li:last-child').click(function(event){
		$('.main_two').fadeIn();
	});
	$('.tab > li:last-child').mouseleave(function(event){
		$('.main_two').fadeOut();
	});
})();
(function(){
	
    var tabContainers = $('.tab_content_two'); // получаем массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
	function main(one,two){
    $(one).click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('.main_main a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
	}
	main('.main_main a')
	main('.main_main_two a')
	$('.tab_two > li:last-child').click(function(event){
		$('.main_main_two').fadeIn();
	});
	$('.tab_two > li:last-child').mouseleave(function(event){
		$('.main_main_two').fadeOut();
		});
})();
$(function(){
	$('.tabs_main').tabs();
});
$(function(){
	function getRandomInt(min,max){
		return Math.floor(Math.random()*(max - min + 1) + min);
	}
	var  one =  getRandomInt(1,49);
	var two = getRandomInt(1,49);
	var result = one + two;
	
		$('#modal_moduls_capch input').attr('placeholder', one + '+' + two )
	
	$('#modal_moduls_capch').dialog({modal:true, autoOpen:true, buttons:{
		OK:function(){}
	}});
	$('#modal_moduls_capch input').on('keyup',function(){
		if($('#modal_moduls_capch input').val() == result){
			$('#modal_moduls_capch').dialog({buttons:{
		OK:function(){
			$(this).dialog('close');
		}
	}});
		}
		else{
			$('#modal_moduls_capch input').attr('placeholder', one + '+' + two )
		}
	});
});
(function(){
		$('#button').click(function(){
			$('#main_main_moduls').dialog(init())
		})
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
					$('.main_main').submit(function(){
						alert('Данные успешно отправлены')
					});
				}
			});
		 });
	}
})();

(function( $ ){

  $.fn.tooltip = function( options ) {  

    // Создаём настройки по-умолчанию, расширяя их с помощью параметров, которые были переданы
    var settings = $.extend( {
      color : '',
      backgroundColor : '',
	  borderTopLeftRadius : '',
	  borderTopRightRadius : ''
    }, options);
console.log('z')
    return this.css({
		backgroundColor:settings.backgroundColor,
		color: settings.color,
		borderTopLeftRadius : settings.borderTopLeftRadius,
	  borderTopRightRadius :  settings.borderTopRightRadius
		})
	
   

  };

	
	
$('#theme').click(function(){
	$('.tab_content').tooltip({
		color : 'white',
		backgroundColor : 'red',
		borderTopLeftRadius : 'none',
	  borderTopRightRadius : 'none'
	});
	
	$('.tab > li:not(.tab > li:last-child)').tooltip({
		color : 'white',
		backgroundColor : 'blue',
		borderTopLeftRadius : '20px',
	  borderTopRightRadius : '25px'
	});
	
	$('.tab_content_two').tooltip({
		color : 'blue',
		backgroundColor : 'orange',
		borderTopLeftRadius : '',
	  borderTopRightRadius : ''
	});
	$('.tab_two > li:not(.tab_two > li:last-child)').tooltip({
		color : 'white',
		backgroundColor : 'gray',
		borderTopLeftRadius : '20px',
	  borderTopRightRadius : '25px'
	});
});
$('#theme_standart').click(function(){
	$('.tab_content').tooltip();
	
	$('.tab > li:not(.tab > li:last-child)').tooltip();
	
	$('.tab_content_two').tooltip();
	$('.tab_two > li:not(.tab_two > li:last-child)').tooltip();
});
})( jQuery );

