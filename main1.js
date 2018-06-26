/*  var a = document.getElementsByClassName('.title')

for (var step = 0; step < a.length; step++) {
	a[step].addEventListener('click', accord);
	console.log('a');
  }


function accord(){
	if (this.nextElementSibling.hasAttribute('hidden')){
		return this.nextElementSibling.removeAttribute('hidden')
	}
	else (this.nextElementSibling.setAttribute('hidden', true ))
};
 */


 



var a = document.querySelector('#accordion').querySelectorAll('.title')
console.log(a[1].nextElementSibling.hasAttribute('hidden'));
for(var step = 0; step < a.length; step++) {
	console.log(step);
	a[step].addEventListener('click',accord);
	
  }


function accord(){
	console.log(this.hasAttribute('hidden'))
	if (this.nextElementSibling.hasAttribute('hidden')) {
		this.nextElementSibling.removeAttribute('hidden');
	}else{
		this.nextElementSibling.setAttribute('hidden',true);
	}
};






























