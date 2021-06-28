 jQuery(document).ready(function($) {
	 
	/*Template type query for header selection(Video, Slideshow or none)*/
	if ( $( "body" ).hasClass( "slideshow" ) ) {
		
		$(".header").backstretch([
			// Images in the slideshow header
			"assets/img/noodle.jpg",
			"assets/img/pasta.jpg"
		], {
			// Options
			duration: 5000, 
			fade: 750
			});
			
	} else if ( $( "body" ).hasClass( "video" ) ) {
		var $videoBackground = $('header');

		if ($videoBackground.length > 0) {
			var BV = new $.BigVideo({
				container: $('header'),
				useFlashForFirefox: false
			});
			BV.init();
			BV.getPlayer().volume(0);
			BV.show(
				//Videos in the video header
				{ type: 'video/mp4',   src: 'assets/video/video.mp4', ambient:true },
				{ type: 'video/webm',  src: 'assets/video/video.mp4', ambient:true },
				{ type: 'video/ogg',   src: 'assets/video/video.mp4', ambient:true }
			);
		}
	} else {
		//Nothing nessessary
	}
	 
	/*-Heartbeat section height-*/
	$('#heartbeat').css({ 'height': $(window).height() });
	$(window).on('resize', function() {

		$('#heartbeat').css({ 'height': $(window).height() });
		$('body').css({ 'width': $(window).width() })
	});

	/*-Smooth scroll-*/
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	/*-Back to top-*/
	//Check to see if the window is top if not then display button
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

	/*-Date Picker & Time-*/
	$('.init-datepicker').datetimepicker({
        format: 'MMM Do YYYY',
        defaultDate: new Date()
    });
    
    $('.init-timepicker').datetimepicker({
        format: 'LT',
        stepping: 15
    });
	
	/*-Testimony Carousel-*/	
	$(".owl-carousel").owlCarousel({
		items:1,
		loop:true,
		autoplay:true,
		autoplayTimeout:10000,
		autoplayHoverPause:true
	});

});