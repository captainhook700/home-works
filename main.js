$(document).ready(function(){
	one();
	//two();
});

function one(){
	$('div').hide();
	$('li').click(function(e){
		$('div').hide();
		$(this).next().toggleClass('active');
		$(this).next().show();
		setTimeout(function(){
			if($(this).next().show()){
				$('div').hide();
			}
		},2000);
	});
	
}

function two(){
	$('li').click(function(e){
		$(this).next().toggleClass('active');
		if($(this).next().attr('hidden')){
			return $(this).next().removeAttr('hidden')
		}
		$(this).next().attr('hidden',true);
	});$('div').attr('hidden',true);
}
