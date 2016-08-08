const block = 'intro';
const classname = '.' + block;

const video = document.getElementById('avi-video');
const video2 = document.getElementById('avi-video2');

video.pause();
video2.pause();
setTimeout(function () {      
	video.play();
	video2.play();
}, 100);

export default function (direction, index, speed) {
	if ((direction === 'down' && index === 2) || 
			(direction === 'up' && index === 4)) {
		video2.pause();
		setTimeout(function () {      
			video2.play();
		}, 100);
	}

	if ((direction === 'down' && index === 1) || 
			(direction === 'up' && index === 3)) {
		video.pause();
		setTimeout(function () {      
			video.play();
		}, 100);
	}
}
