	
// mobile();
(function lastelem() {
	var idMobile = document.getElementById('mobile');
		console.log( idMobile  );
		style = idMobile.style;

			style.paddingLeft = '50px';
	 		style.color = 'red';
	 		style.backgroundColor = 'lightgrey';
	 		style.textDecoration = 'none';
} )();
	
(function item() {
	var itemNav = document.getElementsByClassName( 'items-nav' );
	
	// var items = document.querySelectorAll('items-nav');
	console.log( itemNav );
} ) ();

(function tags() {
	var tagsItem = document.getElementsByTagName( 'items-nav' );

	// var items = document.querySelectorAll('items-nav');
	console.log( tagsItem );
} ) ();

// var tableElem = document.getElementById('age-table');
// var elements = tableElem.getElementsByTagName('input');
