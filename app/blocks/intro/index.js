const video = document.getElementById('avi-video');
const video2 = document.getElementById('avi-video2');

if (video && video2) {
	video.pause();
	video2.pause();

	setTimeout(function() {
		video.play();
		video2.play();
	}, 100);

	video.onpause = function() {
		setTimeout(function() {
			video.play();
		}, 100);
	};

	video2.onpause = function() {
		setTimeout(function() {
			video2.play();
		}, 100);
	};
}