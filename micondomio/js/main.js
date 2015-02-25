

$(document).ready(function(){

	$('#about-btn').click(function (e) {
		e.preventDefault()
		$('.info-section').addClass('hidden-md hidden-lg');
		$('.about').removeClass('hidden-md hidden-lg');
	});

	$('#faq-btn').click(function (e) {
		e.preventDefault();
		$('.info-section').addClass('hidden-md hidden-lg');
		$('.faq').removeClass('hidden-md hidden-lg');
	});

	$('#privacy-policy-btn').click(function (e) {
		e.preventDefault();
		$('.info-section').addClass('hidden-md hidden-lg');
		$('.privacy-policy').removeClass('hidden-md hidden-lg');
	});

	$('#security-policy-btn').click(function (e) {
		e.preventDefault();
		$('.info-section').addClass('hidden-md hidden-lg');
		$('.security-policy').removeClass('hidden-md hidden-lg');
	});

	$('#terms-conditions-btn').click(function (e) {
		e.preventDefault();
		$('.info-section').addClass('hidden-md hidden-lg');
		$('.terms-conditions').removeClass('hidden-md hidden-lg');
	});
});