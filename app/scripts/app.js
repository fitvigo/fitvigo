import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'fullpage.js';
import track from '../blocks/track/';
import share from '../blocks/share/';
import protection from '../blocks/protection/';
import Habits from '../blocks/habits/';

$(() => {
	svg4everybody();

	const habits = new Habits();

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
		}
	});

	$('.js-scroll-down').click(event => {
		event.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
});
