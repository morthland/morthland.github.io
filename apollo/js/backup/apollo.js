//-- Parralax -->
$(document).ready(function(){
	$window = $(window);      
   $('#intro,#hero[data-type="background"]').each(function(){
     var $bgobj = $(this);      
      $(window).scroll(function() {							
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		var coords = '50% '+ yPos + 'px';
		$bgobj.css({ backgroundPosition: coords });
});
});	
}); 

//-- Image Gamma Gallery -->
$(function() {
	var GammaSettings = {
			// order is important!
			viewport : [ {
				width : 1169,
				columns : 5
			}, {
				width : 900,
				columns : 4
			}, {
				width : 500,
				columns : 3
			}, { 
				width : 320,
				columns : 2
			}, { 
				width : 0,
				columns : 2
			} ]
	};

	Gamma.init( GammaSettings, fncallback );

	var page = 0,
		items = ['']
		
	function fncallback() {

		$( '#loadmore' ).show().on( 'click', function() {

			++page;
			var newitems = items[page-1]
			if( page <= 1 ) {
				
				Gamma.add( $( newitems ) );

			}
			if( page === 1 ) {

				$( this ).remove();

			}

		} );

	}
	
});	

//-- Vertical Slider-->
$(function() {
		$('#va-accordion').vaccordion({
			accordionW		: "100%",
			expandedHeight	: 450,
			animSpeed		: 500,
			animEasing		: 'easeInOutBack',
			animOpacity		: 0.4,
		});
	});
	
	$(".va-slice").click(function(){
		 $(".va-slice h3").toggleClass("crew-yellow");
		 $(".va-slice").toggleClass("crew-opacity");
	});
	
//	$("#test").on('activate', function() {
//  	 $(".desktop-nav li").removeClass(".active");
//});

	/*$(".logo").click(function(){
		 $(".desktop-nav li").removeClass("inactive");
	});*/
			
//	$(".va-slice").click(function(){
// 		 $('.va-slice h3').removeClass('yellow');
//});

//-- Smooth Scroll -->
	$(document).ready(function() {
	// Click event for any anchor tag that's href starts with #
	$('a[href^="#"]').click(function(event) {
    // The id of the section we want to go to.
    var id = $(this).attr("href");
    var offset = 225;
    // Our scroll target : the top position of the
    // section that has the id referenced by our href.
    var target = $(id).offset().top - offset;
    $('html, body').animate({scrollTop:target}, 1800);
    //prevent the page from jumping down to our section.
    event.preventDefault();
     });
});

//-- Affix Nav -->
$('#nav-wrapper').height($("#nav").height());
	$('#nav').affix({
		offset: $('#nav').position()
});

<!-- FlexSlider -->
    //$(function(){
//      SyntaxHighlighter.all();
//    });
    $(window).load(function(){
      $('.flexslider').flexslider({
		slideshow: false,
        animation: "slide",
        animationLoop: false,
        itemWidth: 270,
        itemMargin: 30,
        minItems: 1,
        maxItems: 4,
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  $('.flexslider2').flexslider({
		slideshow: false,
        animation: "slide",
        animationLoop: false,
		itemWidth: '100%',
        minItems: 1,
        maxItems: 1,
	 });
});


<!-- Youtube Video Embed -->	 
    ;optimizeYouTubeEmbeds()
	
	//-- Active Navigation -->
//$(function(){
//    var sidebar = $('#nav .row-fluid');  // cache sidebar to a variable for performance
//	
//    sidebar.delegate('a.inactive','click',function(){
//        sidebar.find('.active').toggleClass('active inactive');
//        $(this).toggleClass('active inactive');
//		
//    });