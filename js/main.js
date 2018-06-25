function validToken(){
	var cookies = document.cookie.split(',');
	var token;
	for(var i = 0; i<cookies.length; i++){
		if(cookies[i].indexOf('token') !== -1){
			token = cookies[i].split('=')[1];
			break;
		}
	}
	return token;
}

function getRandomInt(min,max){
		return Math.floor(Math.random()*(max - min + 1) + min);
	}

var sum;
var handle, context;
var html_content;
var app = {
	
	main : $('.main'),
 
	profil:function(){
		if(validToken()){
			var token = validToken();
			
			$.ajax({
				url:'http://restapi.fintegro.com/profiles',
				type:'GET',
				asyns:true,
				dataType: 'json',
				headers: {
                  bearer: token
                },  

				success:function(data){
					console.log('profil')
					console.log(data)
					console.log(data.profile.id)
					$.get('views/profile.hbs',function(response){
						
						handle= Handlebars.compile(response);
						context = {
                            firstName: data.profile.firstname,
                            lastName: data.profile.lastname
                        }
						html_content = handle(context);
						$(app.main).html(html_content)
					
					$(".first_name_profile").html(data.profile.firstname);
					$(".last_name_profile").html(data.profile.lastname);
					if(data.profile.quote != null){
						$(".quote").html(data.profile.quote)
					}
					if(data.profile.photo != null){
						console.log(data.profile.photo )
						$('.photo').css({
							'background':'url('+data.profile.photo+')',
							'background-size':'cover',
							'background-position':'center'
						});
					}
					$(".profile_all_data").attr('data',data.profile.id);
					
					});

				}
			});
		}else{
			$.get('views/login.hbs', function(response){
                handle = Handlebars.compile(response);
                html_content = handle(context);
               $(app.main).html(html_content)
            });
		}
	},
	sittings:function(){
		console.log('sittings')
		var name = $('.right_head > .first_name_profile').text()
		var idsd = $(".profile_all_data").attr('data');
		console.log(idsd)
		console.log(name)
		$.get('views/sittings.hbs', function(response){
            handle = Handlebars.compile(response);
            html_content = handle(context);
            $(app.main).html(html_content)
			$(".right_head > .first_name_profile").html(name)
        	$(".profile").attr('data',idsd)
        });	
	},
	sittings_put:function(){
		if($("#name").val() == ''){
			var name = 'username'
		}
		if($("#name").val() != ''){
			var name = $("#name").val();
		}
		if($("#lastnames").val() == ''){
			var lastnames = 'lastname'
		}
		if($("#lastnames").val() != ''){
			var lastnames = $("#lastname").val()
		}
		if($("#quote").val() == ''){
			var quotes = 'quotes'
		}
		if($("#quote").val() != ''){
			var quotes = $("#quote").val()
		}
		var datas = $(".profile").attr('data')
		
		var token = validToken();
		var form = $('#addPhotoField2').closest('form');
        var formData = new FormData($(form)[0]);
        $.ajax({
            url: 'http://restapi.fintegro.com/upload',
            method: 'POST',
            headers: {
                bearer: token
            },
            data: formData,
            crossDomain: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
        	console.log(response)
        	var link_1 = response.link
        	console.log(link_1)
        	 $(".profile").attr('data-http',link_1);
        	 console.log($(".profile").attr('data-http'))
        	 console.log(name)
        	 console.log(lastnames)
        	 console.log(quote)
        	 $.ajax({
					url: 'http://restapi.fintegro.com/profiles/'+datas+'',
					method: 'PUT',                
		            dataType: 'json', 
		            headers: {
		                  bearer: token
		                },  
					data:{
						firstname:name ,
						lastname:lastnames,
						quote:quotes,
						photo:$(".profile").attr('data-http')
					},
					success: function(response){
						 console.log(response)
						 app.profil();
					},
					 error: function(response, textStatus) {	
		                		console.log(textStatus)	
					}		
				});
    		}

		});
		debugger;
		
    			
	},
	show_ragistration:function(){
		console.log('show_ragistration')
		$.get('views/register.hbs', function(response){
            handle = Handlebars.compile(response);
            html_content = handle(context);
           $(app.main).html(html_content)
        });
	},
	
	logout: function() {
        document.cookie = "token=";
        app.profil();
    },
	
    login: function(){
    	console.log('login')
		$.ajax({
			url: 'http://restapi.fintegro.com/login',
			method: 'POST',                
            dataType: 'json', 
			data:{
				username:$('#login_form ').val(),
				password:$('#password_form ').val(),
				},
			
			success: function(response){
				 document.cookie = 'token=' + response.token;
				 console.log(response,document.cookie)
				 setTimeout(function(){
					 app.profil();
				 },3000)
			},
			 error: function(response, textStatus) {	
                console.log(response,textStatus);
			}		
		});
	},

	ragistration:function(){
		console.log('dads');
		var token = validToken();
		$.ajax({	
			 url: 'http://restapi.fintegro.com/registration', 
            method: 'POST',                
            dataType: 'json',              
            data: {
                login: $('.registration-form #user').val(),                    
                email: $('.registration-form #mail').val(),                    
                password: $('.registration-form #pass').val(),
                firstname: $('.registration-form #first').val(),
                lastname: $('.registration-form #last').val()
            },

			success:function(response){
					console.log(response)
					setTimeout(function(){	
					 app.profil();
				 },3000)
			},	
			error: function(xhr, textStatus, errorThrown) {
				 var errors = ($.parseJSON(xhr.responseText)).errors;
                console.log(errors);
                var errorsContainer = document.createElement('div');
                for(errorItem in errors) {
                    $(errorsContainer).append('<p>' + errors[errorItem] + '</p>');
                }
                console.log(errorsContainer);
			}
		})
	},
}





var all_photoes = {
	albums:function(){
		var token = validToken();
		var name = $('.right_head > .first_name_profile').text()
		$.ajax({
			 url: 'http://restapi.fintegro.com/albums', 
            method: 'GET',                
            dataType: 'json',              
           dataType: 'json',
				headers: {
                  bearer: token
                },
            success:function(response){
            	console.log('albums')

            	var names = response.albums;
				var count = response.albums.length;	
				console.log(response.albums)
				var idsd = $(".profile_all_data").attr('data');
				console.log(idsd)
				 $.get('views/albums.hbs', function(response){
		            handle = Handlebars.compile(response);
		            html_content = handle(context);
		            var albom_container;
		            if(count > 0){
			            for(var i = 0; i <count;i++ ){
				            albom_container += '<div class="plus_photo" data="'+names[i].id+'" style="background:rgb('+ getRandomInt(50,255)+','+getRandomInt(50,255)+','+getRandomInt(50,255)+')"><h5 style="background:rgba(0,0,0,0.5); padding: 10px; margin-top: 0px; color:white; border-top-left-radius:20px;border-top-right-radius:20px;" class="plus_photo_h5">'+names[i].name  +'<input type="button" name="removs" class="removs" value="remove"></h5></div>'; 
				            
			        	}
			        	var new_albom_container = albom_container.slice(9)	 
			        	$(app.main).html(html_content).find('.set_albums').append(new_albom_container);
			        	$('.count_albums').html(count);
			        }
			        else if(count == 0){
		       		    $(app.main).html(html_content);
		       		    $('.count_albums').html(count);
			        }
			        $(".right_head > .first_name_profile").html(name)
			        $(".profile").attr('data',idsd)
		       });
			},
			 error: function(response, textStatus) {
                console.log(response,textStatus);
			},

		});
	},

	albums_create:function(){
		
		var token = validToken();
		
		$.ajax({
			  url: 'http://restapi.fintegro.com/albums', 
            method: 'POST',                
            dataType: 'json',  
            headers: {
                  bearer: token
                },            
            data: {
                name: $('#text_modal').val(),                    
            },
            success:function(response){
	
				$('.dark').attr('hidden',true);
				$('.modals').attr('hidden',true);
				 all_photoes.albums();
			},
			error: function(textStatus) {
                console.log(textStatus);
			},

		});		
	},

	albums_remove:function(datas){
		var token = validToken();
		$.ajax({
		    url: 'http://restapi.fintegro.com/albums/'+ datas+'', 
	        method: 'DELETE',               
	        dataType: 'json',  
	        headers: {
	              bearer: token
	        }, 
	        success:function(response){
				all_photoes.albums();
			},
			error: function(textStatus) {
                console.log(textStatus);
                all_photoes.albums();
			},
		});	 
	},

	create_photo:function(datas){
		var token = validToken();
		var form = $('#addPhotoField').closest('form');
        var formData = new FormData($(form)[0]);
        $.ajax({
            url: 'http://restapi.fintegro.com/upload',
            method: 'POST',
            headers: {
                bearer: token
            },
            data: formData,
            crossDomain: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
            	var token = validToken();
				$.ajax({
					 url: 'http://restapi.fintegro.com/photos', 
		            method: 'POST',                             
		           dataType: 'json',
						headers: {
		                  bearer: token
		                },
		                data:{
		                	album_id:datas,
		                	url: response.link
		                },
		                success:function(response){
						$('.dark').attr('hidden',true);
						$('.modals_photo').attr('hidden',true);
						 all_photoes.album($('body').find('.name_album').text(),datas);
					},
					error: function(textStatus) {
		                console.log(textStatus);
					},

				});		
			},
			error: function(textStatus) {
                console.log(textStatus);
			},
		});		
	},

	remove_photo:function(datas){
		var token = validToken();
		$.ajax({
		    url: 'http://restapi.fintegro.com/photos/'+ datas+'', 
	        method: 'DELETE',               
	        dataType: 'json',  
	        headers: {
	              bearer: token
	        }, 
	        success:function(response){
				 all_photoes.album($('body').find('.name_album').text(),$('body').find('.my_album ').attr('data'));
			}
	    });  
	},

	modal_photos:function(datas){
		console.log('modal_photos')
		 var token = validToken();
		$.ajax({
		    url: 'http://restapi.fintegro.com/photos/'+ datas+'', 
            method: 'GET',                            
            dataType: 'json',
				headers: {
                  bearer: token
                },
                success:function(response){
            	
            	console.log(response.photo.url)
            	$('.modals_photo_open').css({
				"top" : window.pageYOffset+40+"px"
			})
				$('.modals_photo_open').find('.photo_open').html('<img src="'+response.photo.url+'" width="100%" height="100%">');
					debugger;
				$('.modals_photo_open').removeAttr('hidden');
				debugger;
				
			}
		});
	},

	album:function(datas,number){
		console.log('album')
		var idsd = $(".profile").attr('data');
		console.log(idsd)
		var name = $('.right_head > .first_name_profile').text()
		$.get('views/one_album.hbs', function(response){
            handle = Handlebars.compile(response);
            html_content = handle(context);
           $(app.main).html(html_content).find('.my_album').attr('data',number).find('.name_album').append(datas);
        })
        var token = validToken();
		$.ajax({
		    url: 'http://restapi.fintegro.com/photos', 
            method: 'GET',                            
            dataType: 'json',
				headers: {
                  bearer: token
                },
                data:{
                	album_id:number
                },
            success:function(response){
            	for(var i =0; i<response.photos.length;i++){
					$('body').find('.set_photo').append('<div class="photo_by_albums" style="width:240px; height:260px; border:1px solid white; border-raius:5px;background:url('+response.photos[i].url+') ;background-size: cover; display: inline-block; margin-right:10px; margin-bottom:10px; margin-left:1px;" data="'+response.photos[i].id+'"><input type="button" id="photo_by_albums_remove" style="border-radius: 10px;padding:5px; background:black; color: white" value="remove"></div>')
				}
				$(".right_head > .first_name_profile").html(name)
				$(".profile").attr('data',idsd)
			}
		});
	},
}
 
		
		
	


