import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'fullpage.js';
import track from '../blocks/track/';
import share from '../blocks/share/';
import protection from '../blocks/protection/';
import products from '../blocks/products/';
import '../blocks/habits/';
import '../blocks/header/';
import '../blocks/nav/';
import 'slick-carousel';

function getDevice() {
	const isMobile = $('.js-detectors .only-mobile').is(':visible');
	const isTablet = $('.js-detectors .only-tablet').is(':visible');
	const isDesktop = $('.js-detectors .only-desktop').is(':visible');
	let device = 'desktop';
	if (isMobile) {
		device = 'mobile';
	} else if (isTablet) {
		device = 'tablet';
	}

	return device;
}

function initSlick() {
	const device = getDevice();
	if (device === 'mobile') {
		$('.js-mobile-slick:not(.slick-inited)')
			.addClass('slick-inited')
			.slick({
				'slidesToShow': 1,
				'slidesToScroll': 1,
				'dots': true,
				'arrows': false
			});
	} else {
		$('.js-mobile-slick.slick-inited')
			.removeClass('slick-inited')
			.slick('unslick');
	}
}

$(() => {
	svg4everybody();

	const anchors = [
		'intro',
		'vigo',
		'about',
		'track',
		'track-details',
		'track-products',
		'habits',
		'protection',
		'share',
		'products'
	];

	const mobileAt = 600;

	const scrollingSpeed = 1000;

	$('#fullpage').fullpage({
		scrollbar: false,
		navigation: true,
		navigationPosition: 'index__fullpage-nav',
		css3: false,
		scrollingSpeed,
		anchors,
		onLeave: (index, nextIndex, direction) => {
			track(direction, index, scrollingSpeed);
			share(direction, index, scrollingSpeed);
			protection(direction, index, scrollingSpeed);
			products(direction, index, scrollingSpeed);
		}
	});

	$('.js-scroll-down').click(event => {
		event.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});

	initSlick();
	$(window).resize(() => {
		initSlick();
	});

	$('.js-slick-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		adaptiveHeight: true
	});

});
