import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'fullpage.js';
import track from '../blocks/track/';
import share from '../blocks/share/';

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
		}
	});
});
