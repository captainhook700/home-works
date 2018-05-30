(function(){
	//простой js
	var input_1 = document.getElementById('main');
	var id_1 = document.getElementById('one');
	var ul_1 = $('.one').find('li');
	
	var input_2 = document.getElementById('mark');
	var id_2 = document.getElementById('two');
	var ul_2 = $('.two').find('li');
	main(input_1,id_1,ul_1);
	main(input_2,id_2,ul_2);
	hover($('.one'),$('li'));
	hover($('.two'),$('li'));
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
				li.each(function(){
					var the = $(this);
					n++;
					var data = the.attr('data-cities')
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
								
				});	
				
			}
			
			
	}

})();

