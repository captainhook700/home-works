var element = document.getElementsByClassName('menu-item');

for (var i = 0; i < element.length; i++) {
	
	element[i].addEventListener('click', function() {
		
		if (!(this.children[1].classList.toggle('acc'))) {
			this.style.background='lightblue';
		} else {
			this.style.background='linear-gradient(to top, #e9e9e9, #fbfdfc)';
		}
		
		var style = this.children[1].style;
		
		style.paddingLeft='25px';
		style.fontSize='16px';
		style.fontStyle='italic';
		style.background='#f2f3f7';
		style.lineHeight='100px';
		style.borderTop='solid 1px #ccc';
		style.color='#7a7a7a';

	});
}

