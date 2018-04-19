/* Lesson 3.
Домашнее задание. В папке с домашним заданием (Layout), в файле index.html есть меню:
All Website Logo UI kit Photo App Design
Написать функции для получения доступа к последнему пункту меню (App Design) различными способами:
*/
//1. По id (2 способа)
var LastA = document.getElementById('mobile');
console.log(LastA);
LastA = document.querySelector('#mobile');
console.log(LastA);

//2. Используя класс items-nav родительского элемента (требуется несколько действий)
var parentItem = document.getElementsByClassName('items-nav')[0];
var listOfLi = parentItem.getElementsByTagName('li');
lastA = listOfLi[listOfLi.length-1].getElementsByTagName('a')[0];
console.log(lastA);

//3. Используя исключительно имена тегов (требуется несколько действий)
var parentsUlTag = document.getElementsByTagName('ul');
for (var i=0; i<parentsUlTag.length; i++) {
	if (parentsUlTag[i].className == 	'items-nav') {
		var parentUlTag = parentsUlTag[i];
		break;
	}
}
lastA = parentUlTag.lastElementChild.firstElementChild;
console.log(lastA);

//4. Используя селекторы (в одно действие) - по id, по классу items-nav родителя, используя только теги.
//При получении доступа поменять элементу цвет шрифта и вывести в консоль его содержимое.
console.log(document.querySelector('#mobile'));
var parent = document.querySelector('.items-nav');
lastA = parent.lastElementChild.firstElementChild;
lastA.style.cssText = 'color:red;'
console.log(lastA);


var counter = counterForElements(document.querySelector('.items-nav'),'li');
console.log('Counter li in ul.items-nav:',counter);
var counter = counterForElements(document.body,'ul');
console.log('Counter ul in body:',counter);
console.log('Counter a in body:',counterForElements(document.body,'a'));
console.log('Counter p in body:',counterForElements(document.body,'p'));
console.log('Counter div in body:',counterForElements(document.body,'div'));

function counterForElements(parentNode, tag)
{
	var counter = 0;
	var countOfChilds = parentNode.children.length;
	for (var i=0; i<countOfChilds; i++){
		element = parentNode.children[i];
		if (element.nodeName.toUpperCase() === tag.toUpperCase()) counter++;
		if (element.children.length>0) {
			counter += counterForElements(element,tag);
		}
	}
	return counter;
}


/*
2. Написать функцию, при помощи которой мы можем посчитать, сколько
раз на странице используется элемент.
Пример:
Функция принимает 2 параметра:
1. DOM ссылка на элемент, с которого начинаем поиск (например если хотим начать с корня, то можно передать document.body или обратиться к конкретному элементу)
2. Название элемента, который мы ищем (div, a, p и так далее) 
Общий алгоритм (с применением рекурсии):
1. Создаём глобальный счётчик искомых элементов, равный 0 
2. Внутри функции, получаем количество потомков изначального элемента.
3. Создаём цикл, где количество итераций равно количеству потомков.
4. Проверяем - если текущий элемент соответствует искомому, увеличиваем счётчик на 1.
5. Далее проверяем, если у текущего элемента есть дети, снова вызываем нашу функцию (внутри самой себя), но уже передаём в неё текущий элемент в качестве изначального
6. В конце возвращаем результат счётчика (после этого можно например вывести его в консоль)
*/


