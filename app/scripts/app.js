import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'fullpage.js';

$(() => {
	svg4everybody();

	const anchors = ['intro', 'exchange', 'create', 'investments', 'account', 'trade', 'footer'];

	$('#fullpage').fullpage({
		scrollbar: false,
		navigation: true,
		navigationPosition: 'index__fullpage-nav',
		anchors
	});
});
