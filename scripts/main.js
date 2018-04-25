var accordsClick = document.querySelector('#menu1').querySelectorAll('.accordion');

for (var i = 0; i < accordsClick.length; i++){
	accordsClick[i].addEventListener('click',openPanel);
}

accordsClick = document.querySelector('#menu2').querySelectorAll('.accordion');

for (var i = 0; i < accordsClick.length; i++){
	accordsClick[i].addEventListener('mouseenter',openPanel);
}

accordsClick = document.querySelector('#menu3').querySelectorAll('.accordion');

for (var i = 0; i < accordsClick.length; i++){
	accordsClick[i].addEventListener('click',openPanelMoreOpened);
}

function openPanel(event) {
	var allAccords = this.parentElement.querySelectorAll('.accordion');
	for (var i=0; i<allAccords.length; i++){
	 	allAccords[i].classList.remove('active');
	 	allAccords[i].nextElementSibling.setAttribute('hidden',true);
	}
	this.classList.add('active');
	this.nextElementSibling.removeAttribute('hidden');
}

function openPanelMoreOpened(event) {
	this.classList.toggle('active');
	if (this.nextElementSibling.hasAttribute('hidden')) {
		this.nextElementSibling.removeAttribute('hidden');
	}else{
		this.nextElementSibling.setAttribute('hidden',true);
	}
}
