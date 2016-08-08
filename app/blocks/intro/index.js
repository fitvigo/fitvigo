import $ from 'jquery';
import 'jquery.scrollto';

const block = 'intro';
const classname = '.' + block;

const video = document.getElementById('avi-video');
const video2 = document.getElementById('avi-video2');

setTimeout(function () {      
	video.play();
	video2.play();
}, 10);

export default function (direction, index, speed) {
	if ((direction === 'down' && index === 2) || 
			(direction === 'up' && index === 4)) {
		setTimeout(function () {      
			video2.play();
		}, 10);
	}

	if ((direction === 'down' && index === 1) || 
			(direction === 'up' && index === 3)) {
		setTimeout(function () {      
			video.play();
		}, 10);
	}
}
