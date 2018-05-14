(function() {
	$block();
	$drag();
}());

function $drag(){	
	var ball = $(document).find('section');

	ball.on('mousedown', function(e) { 
		var target = event.target
  
		target.style.position = 'absolute';
		moveAt(e);
		var shiftX = e.pageX - getCoords(target).left;
		var shiftY = e.pageY - getCoords(target).top;
		
			function getCoords(elem) {   
			var box = elem.getBoundingClientRect();
			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			};
		}
 
		target.style.zIndex = 1000; 
		ball.append(target);
  
		function moveAt(e) {
			target.style.left = event.pageX - shiftX- 55 + 'px';
			target.style.top = event.pageY - shiftY-20 + 'px';
		}

		$(document).on('mousemove', function(e) {
			moveAt(e);
		});
  
		ball.on('mouseup',function() {
			$(document).off('mousemove');
			ball.off('mouseup');	
		});
	});
}	

function $block(){
	$('button').click(function(e) {        
		var container = $('.container');             	
		var containerStart = container.offset();                
		console.log('Координаты начала контейнера:', container.offset());
		
		console.log('Отступ слева:', containerStart.left);
		console.log('Отступ сверху:', containerStart.top);       
		console.log('Ширина и высота контейнера:', container[0].clientWidth, container[0].clientHeight);
		console.log('координаты конца:');
		
		var start_left = containerStart.left;
		var start_top = containerStart.top;
		var cont_width =container[0].clientWidth;
		var cont_height =container[0].clientHeight;
		
		var top_last_containar = containerStart.top + container[0].clientHeight;
		var left_last_containar = containerStart.left + container[0].clientWidth;
		console.log(top_last_containar);
		console.log(left_last_containar);
		
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
		
		var squareWidth = getRandomInt(10, cont_width);
		var squareHeight = getRandomInt(10, cont_height);
		
		function rand(squareWidth_1,squareHeight_1,RandomInt_l_1,RandomInt_1,RandomInt_2,RandomInt_3,RandomInt_4,RandomInt_5,RandomInt_6,RandomInt_7){
			if(squareHeight <= cont_height / 11.46){
				console.log('squareHeight <= 50');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1 + 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_1 + 'px""></div>';
			}
			else if(squareHeight >= cont_height / 11.46 && squareHeight <= cont_height / 5.73){
				console.log('squareHeight >= 50 && squareHeight <= 100');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1 + 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_2 + 'px""></div>';
			}
			else if(squareHeight >= cont_height / 5.73 && squareHeight <= cont_height / 2.865 ){
				console.log('squareHeight >= 100 && squareHeight <= 200 ');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1 + 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_3 + 'px""></div>';
			}
			else if(squareHeight >= cont_height / 2.865 && squareHeight <= cont_height / 1.91){
				console.log('squareHeight >= 200 && squareHeight <= 300');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1+ 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_4 + 'px""></div>';
			}
			else if(squareHeight >= cont_height / 1.91 && squareHeight <= cont_height / 1.4325){
				console.log('squareHeight >= 300 && squareHeight <= 400');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1 + 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_5 + 'px""></div>';
			}
			else if(squareHeight >= cont_height / 1.4325 && squareHeight <= cont_height / 1.146){
				console.log('squareHeight >= 400 && squareHeight <= 500');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1 + 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_6 + 'px""></div>';
			}
			else if(squareHeight >= cont_height / 1.146 && squareHeight <= cont_height / 1.0418){
				console.log('squareHeight >= 500 && squareHeight <= cont_height');
				return square = '<div style="width: ' + squareWidth_1 + 'px;background: rgb(' + getRandomInt(0, 255)  + "," + getRandomInt(0, 255) +"," + getRandomInt(0, 255) + '); position: absolute; left: ' + RandomInt_l_1 + 'px; height: ' + squareHeight_1 + 'px;top: ' + RandomInt_7 + 'px""></div>';
			}
		}
		
		if(squareWidth <= cont_width/6.15){
			console.log('squareWidth <= 200');
			rand(squareWidth,squareHeight,getRandomInt(0, cont_width / 1.194),getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		else if(squareWidth >= cont_width/6.15 && squareWidth <= cont_width / 3.075){
			console.log('squareWidth >= 200 && squareWidth <= 400');
			rand(squareWidth,squareHeight,getRandomInt(0, cont_width / 1.4819),getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		else if(squareWidth >= cont_width / 3.075 && squareWidth <= cont_width / 2.05){
			console.log('squareWidth >= 400 && squareWidth <= 600');
			rand(squareWidth,squareHeight,getRandomInt(0, cont_width / 1.9523),getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		else if(squareWidth >= cont_width / 2.05 && squareWidth <= cont_width / 1.5375){
			console.log('squareWidth >= 600 && squareWidth <= 800');
			rand(squareWidth,squareHeight,getRandomInt(0, cont_width / 2.86),getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		else if(squareWidth >= cont_width / 1.5375 && squareWidth <= cont_width / 1.23){
			console.log('squareWidth >= 800 && squareWidth <= 1000');
			rand(squareWidth,squareHeight,getRandomInt(0, cont_width / 5.3478),getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		else if(squareWidth >= cont_width / 1.23 && squareWidth <= cont_width / 1.025){
			console.log('squareWidth >= 1000 && squareWidth <= 1200');
			rand(squareWidth,squareHeight,getRandomInt(0, cont_width / 40.99),getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		else if(squareWidth >= cont_width / 1.025){
			console.log('squareWidth >= 1000 && squareWidth <= cont_width');
			rand(squareWidth,squareHeight,0,getRandomInt(start_top,getRandomInt(0,cont_height / 1.0956)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.2114)),getRandomInt(start_top,getRandomInt(0,cont_height / 1.53619)),getRandomInt(start_top,getRandomInt(0,cont_height / 2.098901)),getRandomInt(start_top,getRandomInt(0,cont_height / 3.31209)),getRandomInt(start_top,getRandomInt(0,cont_height / 7.84931)),getRandomInt(start_top,getRandomInt(0,cont_height / 24.9)));
		}
		container.append(square);
	});
}		




