(function(){		
	$.ajax({
	url:'http://restapi.fintegro.com/data.json',
	dataType: 'text',
	success:function(data){
		setTimeout(function(){
			$('.five').html('');
		},500)
		var dats = data.split('\n');var arr =[];
		for(var i = 0; i<dats.length; i++){
			
			arr.push(dats[i].split(','));
		}
		var table = document.createElement('table'), tr, td; 

		$(table).attr({ 
			border: 1,
			cellpadding: 5
		});
		var ars = [];
		String.prototype.capitalize = function() {
					return this.replace(/(^|\s)\S/g, function(a) { return a.toUpperCase(); });
				};
		for(i = 0; i < arr.length; i++) {
			tr = document.createElement('tr'); 
			var sum = [];
			for(j = 0; j < arr[i].length; j++) { 
				arr[i][j] = $.trim(arr[i][j]); 
				ars = arr[i][j].split('"');

				if(ars.length == 3 ){
					sum += ars[2].slice(1,4)
				}
				if(ars.length == 4 ){
					sum += ','+ars[2].capitalize()
				}
				if(ars.length == 5 ){
					sum += ','+ars[3].capitalize()
				}
				td = document.createElement('td');
				$(td).append(ars); 
				tr.append(td); tr
			}
			$(tr).attr({
			'data': sum,
			'hidden': true
			})
			table.append(tr); 
		}
		$('body').append(table);	
	  },
			
	error: function() {  
		$('body').append('<span style="color: red">There is some error!</span>');
			}	
	})
})();

(function(){
	var input_1 = document.getElementById('search');
	var tr = document.getElementsByTagName('tr');
	main(input_1,$('table'),tr);
	function hover(ids,uls){
		ids.mouseleave(function(event){
			uls.fadeOut();
		});
	}
	function main(inputs,ids,lis){
		inputs.oninput = function() {
			var result_val = inputs.value;
			//jquery
			var n = 0;
			var lower = result_val.toLowerCase();	  
			String.prototype.capitalize = function() {
				return this.replace(/(^|\s)\S/g, function(a) { return a.toUpperCase(); });
			};
			var string = lower.capitalize();
			//ids.innerHTML = 'вы ввели'+ ' ' + string;
			var li = lis;
				for(var i = 0; i<li.length;i++){
					var the = li[i];
					n++;
					var data = the.getAttribute('data')
					var data_split = data.split(',')
					data_split.forEach(function(elem,index){
							var a = elem.substr(0,string.length);
							var a_split = a.split(',');
							var index_1 = index;
							a_split.forEach(function(elem){
								var b =  string;
								if(b == elem && result_val != ''){
									var slice = data_split.splice(index + 1);
									$(the).removeAttr("hidden")
								}
								else{
									$(the).attr("hidden",'true')
									false
								}
							});	
					
					});
								
				}	
				
			}
			
			
	}

})();


		
		
		/*var xhr = new XMLHttpRequest();
				xhr.open('GET', 'http://restapi.fintegro.com/data.json',true);
				xhr.send();

				// 4. Если код ответа сервера не 200, то это ошибка
				xhr.onreadystatechange = function() { 
				if (this.status== 200 || this.readyState == 4) {
				var data = this.responseText;
				console.log(data.split('{ }'));
				} 

			}	*/