$(document).ready(function(){

	createMenu(MenuJson, 1, $(".menu"));

	$('body').on('mouseenter','li', function(event){
		$(this).children('ul .level2.hasChild').animate(
			{ 
				height: 'show',
			},500
		);
		$(this).children('ul:not(.level1) .hasChild').animate(
			{ 
				left: '200px',
				height:'show'
			},
			500,
			function(){
				console.log('NOT! ', this);
			}
		);
		event.stopPropagation()

	});
	$('body').on('mouseleave','li', function(){
		$(this).children('ul .hasChild').animate(
			{
				height:'hide'

			},
			500,
			function(){
			}
		);
	});
	

});

function createMenu(objects, level, container) 
{
	var ul = $('<ul class="level' + level + '"></ul>');
	for (num in objects) {
		var obj = objects[num];
		var li = $('<li></li>');
		$(li).append('<a href="' + obj["href"] + '">' + obj['name'] + '</a>');
		$(ul).append(li)
		if (obj["children"]) {
			createMenu(obj['children'], level+1, li);
			$(li).children('ul').addClass("hasChild");
		}
		
	}
	$(container).append(ul);
}

