$(document).ready(onDomContentLoaded);

function onDomContentLoaded() {
		var $testFind = $('.list').css({display: 'block'});

		$testFind.find('.child-item').css({
			background:'lightgreen',
			width: '200'		
		});

		setTimeout("$('.child-item').next().css({background: 'yellow',display: 'block', width: '200'})", 2000);


		setTimeout("$('.child-item').prev().css({background: 'lightskyblue',display: 'block', width: '200'})", 4000);
		

		setTimeout("$('.list').parent().css({display: 'block',background:'lightgreen'})", 8000);

		setTimeout("$('.list').parents().css({display: 'block',background:'lightgrey'})", 6000);

		setTimeout("$('.list').children().css({background:'lightgrey',display: 'block',	width: '300',border: 'solid 1px white',padding: '10'})", 10000);
		
		setTimeout("$('.list').closest('.list').css({display: 'block',color:'white'})", 12000);
		
		
		setTimeout("$('.child-item:last-child').append('<p>Text</p>').css({display: 'block',background: 'lightblue',width: '300',color:'orange',border: 'solid 1px black'})", 14000)
		// setTimeout("$('.child-item:last-child').append('<p>Text</p>').remove(':last-child')", 16000); 


		setTimeout("$('li').prepend('<b>Hello</b>').css({color: 'indigo'})", 18000); 

		setTimeout("$('.list').before('<h1>TEXT</h1>')",19000);

		setTimeout("$('.list').after('<h1>TEXT</h1>')",20000);

		setTimeout("$('li').text('lorem')",22000);

		setTimeout("$('.child-item').html('')",24000);

		setTimeout("$('.list').remove('')",26000);

		
			

		

}



// $(document).ready(onDomContentLoaded);

// function onDomContentLoaded() {
// 		var $parentlist = $('.list');

// 		console.log($testFind.find('.child-item'));

// 		$parentlist.mouseover(function(event) {
// 			console.log('Event target:', event.target);
// 			console.log('Event related target:', event.relatedTarget);
// 		})
			
// }

