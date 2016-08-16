const video = document.getElementById('avi-video');

if (video) {
	video.pause();

	setTimeout(function() {
		video.play();
	}, 100);

	video.onpause = function() {
		setTimeout(function() {
			video.play();
		}, 100);
	};
}