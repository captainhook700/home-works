$(document).ready(function(){
	var ul = $(document).find(".first")[0];
	$(ul).css({
		background: 'lightgray',
		color: 'black',
		fontWeight: 'bold',
		padding: '5px',
		borderLeft: '3px solid blue',
		listStyleType: 'none',
		margin: '0px',
		width:'500px',
		borderRadius: '15px'
	});
	var li = $(ul.children);
	
	//1)
	for(var i = 0; i < li.length;i++){
	var ask = prompt('number',);
	var html_li = $(li[i])[0].innerHTML=ask;
	$(li[i]).css({
		marginTop: '5px'
	});
		console.log(html_li)
	}
	
	//2)
	var asks = prompt('Как хотите назвать свой список', 'LIST');
	var new_elem = $(document.createElement('div'));
	$(new_elem[0]).html("<h1>"+asks+"</h1>").css({
		fontStyle: 'italic'
	});
	$(ul.prepend(new_elem[0]));

	var new_elem1 = $(new_elem.clone());
	$(new_elem1[0]).html("<div>the end</div>").css({
		marginTop: '10px',
		fontStyle: 'none'
	});
	$(ul.append(new_elem1[0]));
	
	//3)
	var new_elements = $(document.createElement('li'));
	var htm = $(new_elements.text('light'));
	console.log(htm[0]);
	$(li[2].after(htm[0]));
	//$(li[3].before(htm[0]));
	
	//4)
	var finds = $(document).find('.second')[0].children;
var child = $(finds[0]).html('Внимание!');
$(child).next().html('Этот список удалится через заданое время');
	console.log(child);
	

	setTimeout(function(){
		$(new_elem1[0].remove());
		$(new_elem[0].remove());
		$(htm[0].remove());
		$(document).find('.second')[0].remove();
	var new_elemento = $(document.createElement('div'));
	new_elemento[0].innerHTML = "<h1>NEW NAME LIST</h1>"
	console.log(new_elemento[0]);
	$(ul.prepend(new_elemento[0]));
	},10000);
});