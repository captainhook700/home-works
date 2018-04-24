var accordsClick = document.querySelector('#menu1').querySelectorAll('.accordion');
for (var i=0; i<accordsClick.length; i++){
	accordsClick[i].addEventListener('click',openPanel);
}
accordsClick = document.querySelector('#menu2').querySelectorAll('.accordion');
for (var i=0; i<accordsClick.length; i++){
	accordsClick[i].addEventListener('mouseenter',openPanel);
}


function openPanel() {
	var allAccords = this.parentElement.querySelectorAll('.accordion');
	for (var i=0; i<allAccords.length; i++){
	 	allAccords[i].classList.remove('active');
	 	allAccords[i].nextElementSibling.setAttribute('hidden',true);
	}
	this.classList.add('active');
	this.nextElementSibling.removeAttribute('hidden');
}
