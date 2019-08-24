/*global $,  document, window*/

$(document).ready(function () {
    
    //Navbar SlideToggle
     $('.the-toggler').on('click', function () {
      
       $('.navbar').slideToggle();
   });

    // Dropdown Menu -- Navbar
    $('.navbar-nav .dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(500);
    });
    
     // Caching The ScrollTop Element
    var scrollButton = $('.fixed-button');
    
    $(window).scroll(function () {
       
        if($(this).scrollTop() >= 600) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    scrollButton.click(function() {
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });
    
    
     // Add Class Scrolled in navbar
	$(window).scroll(function () {
		
		var navbar = $('.navbar');
		
		if ($(window).scrollTop() >= navbar.height()) {
			
			navbar.addClass('scrolled');
			
		} else {
			
			navbar.removeClass('scrolled');
		}
    });
    
    
     //Light Slider  
	$("#lightSlider").lightSlider({

		item: 5,
		autoWidth: false,
		slideMove: 2, // slidemove will be 1 if loop is true
		slideMargin: 18,
		rtl: false,
		loop: true,
        slideEndAnimation: true,
        speed: 2000,
        auto: true,
        pause: 3000,
        
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:4,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                  }
            }
        ]
        
    });


    //Second Light Slider  
	$("#secondlightSlider").lightSlider({

		item: 3,
		autoWidth: false,
		slideMove: 2, // slidemove will be 1 if loop is true
		slideMargin: 18,
		rtl: true,
		loop: true,
        slideEndAnimation: true,
        speed: 2500,
        auto: true,
        pause: 5000,
        
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:6,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]
        
    });
    

    // Nice Scroll
    $("html").niceScroll({
            
        cursorcolor: "#d32f2e",
        cursorwidth: "10px",
        cursorheight: "100px",
        cursorborder: "2px solid #d32f2e",
        cursorborderradius: "15px",
        scrollspeed: "50",
        horizrailenabled: false
    });

     // Nice Scroll
     $(".about-tabs").niceScroll({
            
        cursorcolor: "#d32f2e",
        cursorwidth: "5px",
        cursorheight: "100px",
        cursorborder: "2px solid #d32f2e",
        cursorborderradius: "15px",
        scrollspeed: "50",
        horizrailenabled: false
    });

    //Marqueee
    $('.news_move').easyTicker({
        direction: 'up', // up or down
        easing: 'swing', // easing function
        speed: 'slow', // the speed of transition
        interval: 5000, // the time for the next transition to take place. 
        height: 'auto', // the height of the elements
        visible: 5, // the number of visible elements of the list
        mousePause: 1, // pause on mouse hover
        controls:{ // assign the elements which control the transition. 
            up: '',
            down: '',
            toggle: ''
            }
        });

    // Add Class Scrolled On Navbar
    
    
    // Create Blink Warning
	
	blinkWarning();
	
	function blinkWarning () {
		
		$('.blink-warning').fadeOut(1000, function () {
			
			$(this).fadeIn(1000); 
			blinkWarning();			
		});
		
    }
    
    
});


/*
  // Fast-News
  $(document).ready(function() {
    setTimeout(function() {
        $(".content-news").fadeIn(1500);
    }, 3000);


    $( ".hide" ).click(function() {
    $( ".content-news" ).hide( "slow", function() {
    });
});

});
*/