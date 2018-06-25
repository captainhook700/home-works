(function(){
	app.profil();
	$('body').on('click','.least', function(){
		app.profil();
	})
	$('body').on('click', '#start_ragistration', function(){
		app.show_ragistration();
	});

	$('body').on('click', '#sign', function(){
		app.login();
	
	});

	$('body').on('click', '.logout', function(){
		app.logout();
	
	});

	$('body').on('click', '#registration_ok', function(){
		app.ragistration();
	});

	$('body').on('click', '.photoes', function(){
		all_photoes.albums();
	});
    /* переходы в альбоме*/

    $('body').on('click','.add_albums',function(){
			$('.dark').removeAttr('hidden')
			$('.modals').removeAttr('hidden')
		})
		$('body').on('click','.reset_modal',function(){
			$('.dark').attr('hidden',true)
			$('.modals').attr('hidden',true)
		})
		
		
		$('body').on('click','.button_modal_submit',function(){
			if($('#text_modal').val() != ''){
				all_photoes.albums_create();
			}
			else{
				$('.modals').find('#text_modal').css({'border': '1px solid red'});
				setTimeout(function(){
					$('.modals').find('#text_modal').css({'border': '1px solid lightgray'}).fadeIn();
				},3000)

			}
		})

		var index_main = 0;
		$('body').on('click','.removs',function(){
			var datas = $(this).parent().parent().attr('data');
			all_photoes.albums_remove(datas);
		});


		/*albums photo*/


		$('body').on('click','.plus_photo',function(){
			var datas = $(this).find('.plus_photo_h5').text();
			var number = $(this).attr('data');
			console.log(number)
			all_photoes.album(datas,number)
		})

	    $('body').on('click','.add_photo',function(){
				$('.dark').removeAttr('hidden')
				$('.modals_photo').removeAttr('hidden')
			})

	    $('body').on('click','.reset_modal_photo',function(){
				$('.dark').attr('hidden',true)
				$('.modals_photo').attr('hidden',true)
			})

	    $('body').on('click','.button_modal_submit_photo',function(){
	    	var datas = $(this).parent().parent().parent().find('.my_album').attr('data');
	    	debugger
	    	var form = $('#addPhotoField').closest('form');
	        var formData = new FormData($(form)[0]);
				all_photoes.create_photo(datas)
		})	

		 $('body').on('click','#photo_by_albums_remove',function(event){
		 	event.stopPropagation()
				var datas = $(this).parent().attr('data');
				all_photoes.remove_photo(datas);
			})

		  $('body').on('click','.photo_by_albums',function(e){
		  	var datas = $(this).attr('data');
		  	console.log(datas)
		  	$('.dark').css({
				"top" : window.pageYOffset+40+"px"
			})
			$('.dark').removeAttr('hidden')
			$('body').css({
				"overflow": "hidden"
			})
			all_photoes.modal_photos(datas);
			})
		  $('body').on('click','.dark',function(){
		  		$('.modals_photo_open').find('.photo_open').html('')
				$('.dark').attr('hidden',true);
				console.log(window.pageYOffset)
				$('.modals_photo_open').attr('hidden',true);
				$('body').css({
					"overflow": "scroll"
				})
			})
		   $('body').on('click','.close_photo',function(){
		  		$('.modals_photo_open').find('.photo_open').html('')
				$('.dark').attr('hidden',true);
				$('.modals_photo_open').attr('hidden',true);
				$('body').css({
					"overflow": "scroll"
				})
			})
		   $('body').on('click','.click_a',function(){
		  		all_photoes.albums();
			})

		    $('body').on('mouseenter','.dark',function(){
		  		$('.modals_photo_open').find('.close_photo').css({
		  			'color':'red'
		  		})
			})
			$('body').on('mouseleave','.dark',function(){
		  		$('.modals_photo_open').find('.close_photo').css({
		  			'color':'white'
		  		})
			})
		 /* конец переходы в альбоме*/
		 /*head*/
		 $('body').on('click','.right_head > .first_name_profile',function(){
		  		$('.profile_menu').removeAttr('hidden')
			})
		 $('body').on('mouseleave','.profile_menu',function(){
		    	setTimeout(function(){
			  		$('.profile_menu').attr('hidden',true)
			    },500)
			})
/*settings*/
$('body').on('click','.settings',function(){
		  		app.sittings();
			})
			$('body').on('click','#edit',function(){
		  		app.sittings_put();
			});

			


})();