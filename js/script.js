//sticky menu
$(window).scroll(function(){
	if ($(window).scrollTop() >= 300) {
		$('nav').addClass('fixed-header');
		$('nav div').addClass('visible-title');
	}
	else {
		$('nav').removeClass('fixed-header');
		$('nav div').removeClass('visible-title');
	}
});
//mengubah menu aktiv
$(document).ready(function () {
	$(function () {
		$('ul li').click(function (e) {
			e.preventDefault();
			$('li').removeClass('active');
			$(this).addClass('active');
		});
	});
});
// Mobile Navigation
function myFunction() {
	var x = document.getElementById("myTopnav");
	var bars = document.getElementById("icon");
	if (x.className === "toggle") {
		x.className += " responsive";
		$('i').removeClass('fa-bars');
		$('i').addClass('fa-remove');
	} else {
		x.className = "toggle";
		$('i').removeClass('fa-remove');
		$('i').addClass('fa-bars');
	}
}
//scroll page
$('.page-scroll').on('click', function(e){
	var href = $(this).attr('href');
	var el = $(href);
	$('html, body').animate({
		scrollTop: el.offset().top - 70
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
});
//kembali ke top page
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
});
$('.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 1500, 'easeInOutExpo');
	return false;
});