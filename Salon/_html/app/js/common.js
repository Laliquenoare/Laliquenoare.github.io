$(function() {

	$('#my-menu').mmenu({
		extensions: [ 'theme-dark', 'effect-menu-slide', 'pagedim-black', 'position-right' ],
		navbar: {
			title: '<img src="img/logo.png" alt="Салон красоты Смитлер">'
		},

	});
	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function () {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function(){
		$('.hamburger').removeClass('is-active');
	});

	$('.carousel-services').on('initialized.owl.carousel', function(){
		setTimeout(function() {
			carouselService()
		}, 100);
	});
	$('.carousel-services').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}

	});


	function carouselService() {
		$('.carousel-services-item').each(function(){
			var ths = $(this),
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		})
	}carouselService();


	$('.carousel-services-composition .h3').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function(){
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize({
		onDropdownOpen: function() {if (navigator.userAgent.indexOf("Firefox") != -1){ $('.selectize-input > input').prop("disabled", true); }},
		onDropdownClose: function() {if (navigator.userAgent.indexOf("Firefox") != -1){ $('.selectize-input > input').prop("disabled", false); } }
	});

	$('.reviews').owlCarousel({
		loop:true,
		items: 1,
		smartSpeed: 700,
		nav: false,
		autoHeight: true
	});

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}

		}
	})


	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 2000);
		});
		return false;
		});



	// Resize Window
	function onResize() {
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onResize = function () {
		onResize()
	};
});
