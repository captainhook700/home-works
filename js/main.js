// var getLiByID = document.getElementById('mobile');
// console.log(getLiByID);

// var getLiByID = document.querySelector('#mobile');
// console.log(getLiByID);

// var getLiByParent = document.getElementsByClassName('items-nav');
// console.log(getLiByParent[0].childNodes[11].children[0]);

// var getLiByTag = document.getElementsByTagName('li')[10].getElementsByTagName('a')[0];
// console.log(getLiByTag);

// var getLiMyMix = document.getElementsByClassName('items-nav')[0].getElementsByTagName('li')[5].querySelector('#mobile').style.color="tomato";
// console.log(document.getElementsByClassName('items-nav')[0].getElementsByTagName('li')[5].querySelector('#mobile').innerHTML);




// var parser = function(link, elem) {
//
// 	var result = 0;
//
// 	for (var i = 0; i < link.children.length; i++) {
//
// 		var linkChildren = link.children;
//
// 		if (linkChildren[i].nodeName == elem.toUpperCase()) {
// 			result++
// 		} else if (linkChildren.length) {
// 			result += parser(linkChildren[i], elem);
// 		}
// 	}
//
// 	return result;
// }
//
// console.log(parser(document.body, 'ul'));




// Проще вариант:
//
// var checker = function(link, elem) {
//
// 	var result = link.querySelectorAll(elem);
//
// 	return result.length;
// }
//
// console.log("Second method: " + checker(document.body, 'ul'));
