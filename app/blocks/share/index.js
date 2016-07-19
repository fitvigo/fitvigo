import $ from 'jquery';

const block = 'share__';
const classname = block + 'icons';

export default function (direction, index, speed) {
	if (direction === 'down' && index === 8) {
		setTimeout(() => {
			$('.' + classname).addClass(classname + '_visible');
		}, speed);
	}

	if (direction === 'up' && index === 9) {
		$('.' + classname).removeClass(classname + '_visible');
	}
}
