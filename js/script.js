

$(document).ready(function(){
	// Cover Full Screen
 
    $( "#main" ).each(function(){
        var $this = $(this);
        $this.css({'min-height':($(window).height())+'px'});
 
        /*Recalculate on window resize*/
        $(window).resize(function(){
            $this.css({'min-height':($(window).height())+'px'});
        });
    });

     // Navbar affix

	$('#nav-wrapper').height(
		$("#home-navbar").height()
	);
    
    $('#home-navbar').affix({
        offset: { top: $('#home-navbar').offset().top }
    });

     // Scroll Down Buttons


	$("#learn").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#home-navbar").offset().top
	   		}, 1000);
		});

	$("#home").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#main").offset().top
	   		}, 1000);
		});

	$("#about").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#who").offset().top
	   		}, 1000);
		});

	$("#services").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#what").offset().top
	   		}, 1000);
		});

	$("#clients").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#work").offset().top
	   		}, 1000);
		});

	$("#contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#footer").offset().top
	   		}, 1000);
		});

});