var accordsClick = document.querySelector('#menu1').querySelectorAll('.accordion');

for (var i = 0; i < accordsClick.length; i++){
	accordsClick[i].addEventListener('click',openPanel);
}

accordsClick = document.querySelector('#menu2').querySelectorAll('.accordion');

for (var i = 0; i < accordsClick.length; i++){
	accordsClick[i].addEventListener('mouseenter',openPanel);
}

function openPanel(event) {
    var allAccords = this.parentElement.querySelectorAll('.accordion');
    
	for (var i=0; i<allAccords.length; i++){
	 	allAccords[i].classList.remove('active');
	 	allAccords[i].nextElementSibling.style.height = '0';
    }
    
	this.classList.add('active');
	this.nextElementSibling.style.height = '100px';
}
