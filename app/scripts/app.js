import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'fullpage.js';

$(() => {
	svg4everybody();

	const anchors = ['intro', 'vigo', 'about', 'investments', 'account', 'trade', 'footer'];

	$('#fullpage').fullpage({
		scrollbar: false,
		navigation: true,
		navigationPosition: 'index__fullpage-nav',
		css3: false,
		anchors
	});
});
