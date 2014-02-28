$(document).ready(function() {
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: false,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
		play: 7500,
		pause: 2500
	});
	$('.slides').slides({
		generatePagination: false,
		generateNextPrev: false,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 250,
		play: 7500,
		pause: 2500
	});
	$('.review .gallery .slide').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slideSpeed: 250,
		slideEasing: 'easeInOutCubic',
		play: 7500,
		pause: 2500
	});
	$('.carousel').jcarousel({
		scroll: 1,
		animation: 250,
		easing: 'easeInOutCubic'
	});
	$('.header > .menu > li.sub').hover(
		function() {
			$(this).stop(true, true).children('div').slideDown(0);
			$(this).addClass('active');
		},
		function() {
			$(this).stop(true, true).children('div').slideUp(0);
			$(this).removeClass('active');
		}
	);
	$('.header > .menu > li > div > div > .model').append('<span class="arrow"></span>');
	$('.header > .menu > li > div > div > .line ul li a').click(function() {
		var target = $(this).attr('href');
		var arrowleft = $(this).parent().position().left-130;
		$('.header > .menu > li > div > div > .model').slideUp(0);
		$('.header > .menu > li > div > div').find('.model.'+target).slideToggle(0);
		$('.header > .menu > li > div > div').find('.model.'+target+' .arrow').css({'left': arrowleft+'px'});
		return false;
	});
	$('.carousel .jcarousel-clip-horizontal').append('<span class="shadowleft"></span><span class="shadowright"></span>');
	$('.review .configuration table tbody tr:first-child').show();
	$('.review .configuration table tbody:first tr').show();
	$('.review .configuration table tbody tr:first-child th').click(function() {
		$(this).parents('tbody').find('tr').not(':first').slideToggle(0);
		return false;
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.review .benefits > div > div:nth-child(2n)').css({'padding': '18px 517px 0 7px'});
	$('.review .benefits > div > div:nth-child(2n) img').css({'float': 'right', 'margin': '-18px -517px 16px 0'});
	$('.news ul li:last-child').css({'font-size': '13px', 'margin': '1px 0 0 6px'});
	$('.news ul li:last-child a').css({'color': '#9c9da0'});
});