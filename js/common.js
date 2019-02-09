$(function() {

	$('.gallery-slides').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
		mobileFirst:true,
		responsive: [
			{
				breakpoint: 0,
				settings: {
				  centerMode: false,
				  centerPadding: '0',
				  slidesToShow: 1,
				  variableWidth: false
				}
			  },
			{
			  breakpoint: 480,
			  settings: {
				centerMode: false,
				centerPadding: '0',
				slidesToShow: 3,
				variableWidth: false
			  }
			},
			{
				breakpoint: 768,
				settings: {
				  centerMode: false,
				  centerPadding: '0',
				  slidesToShow: 4,
				  variableWidth: false
				}
			  },
			  {
				breakpoint: 992,
				settings: {
				  centerMode: false,
				  centerPadding: '0',
				  slidesToShow: 6,
				  variableWidth: false
				}
			  }
			]
	  });

});
