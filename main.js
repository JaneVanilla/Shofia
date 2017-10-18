$(document).ready(function() {
      $('.bar-btn').click(function() {
    $(".header-nav").slideToggle();
    });



	$('.owl-carousel').owlCarousel ({
         items: 3,
         autoHeight: true,
         nav: true,
         navText: ['<i class="fa fa-angle-left nav-btn" aria-hidden="true"></i>','<i class="fa fa-angle-right nav-btn" aria-hidden="true"></i>'],
	});

});