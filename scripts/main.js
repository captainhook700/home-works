$(document).ready(main);

var dragFigure = [];
var shiftX, shiftY = 0;

function main()
{
	$('.btnAddFigure').on('click', AddRandomFigure);

}

function AddRandomFigure(event)
{
	var $cont = $('.container');
	var contStart = $cont.offset();
	var widthNewFigure = Math.floor(Math.random() * $cont[0].clientWidth - 0) * 0.4;
	var posX  = Math.floor(Math.random() * $cont[0].clientWidth - contStart.left) + contStart.left;
	var posY  = Math.floor(Math.random() * $cont[0].clientHeight - contStart.top) + contStart.top;
	var colorFigure = '#'+Math.floor(Math.random()*16777215).toString(16);
	var newFigure = $("<div class='rndFigure'></div>");

	newFigure.css({
		'position': 'absolute',
		'top' : posY,
		'left': posX,
		'width' : widthNewFigure,
		'height' : widthNewFigure,
		'background': colorFigure,
	});

	newFigure.on('mousedown', mouseDownFigure);

	$($cont).append(newFigure);
}

function mouseDownFigure(event) {
	dragFigure = this;
	shiftY = event.pageY - dragFigure.getBoundingClientRect().top + pageYOffset;
	shiftX = event.pageX - dragFigure.getBoundingClientRect().left + pageXOffset;

	$(this).css({
  		'position':'absolute',
  		'zIndex': 1000,
  	});

  	$('.container').on('mousemove', mouseMoveFigure);
  	$('.container').on('mouseup', mouseUpFigure);
}

function mouseMoveFigure(event){
   	$(dragFigure).css({
	  	'top':   event.pageY - $('.container').offset().top - shiftY + 'px',
     	'left':  event.pageX - $('.container').offset().left - shiftX + 'px',
	});
}

function mouseUpFigure(event){
	$(dragFigure).css({
  		'position':'absolute',
  		'zIndex': 1,
  	});
  	dragFigure = [];
	$('.container').off('mousemove', mouseMoveFigure);
	$('.container').off('mouseup', mouseUpFigure);
}