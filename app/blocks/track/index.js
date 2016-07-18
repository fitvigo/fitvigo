import $ from 'jquery';

const block = 'track__';
const classname = block + 'data';

export default function (direction, index, speed) {
	if (direction === 'down' && index === 3) {
		setTimeout(() => {
			$('.' + classname).addClass(classname + '_visible');
		}, speed);
	}

	if (direction === 'up' && index === 4) {
		$('.' + classname).removeClass(classname + '_visible');
	}
}
