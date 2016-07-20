import $ from 'jquery';

const block = 'protection__';
const classname = block + 'lock-head';

export default function (direction, index, speed) {
	if (direction === 'down' && index === 7) {
		setTimeout(() => {
			$('.' + classname).addClass(classname + '_closed');
		}, speed);
	}

	if (direction === 'up' && index === 8) {
		$('.' + classname).removeClass(classname + '_closed');
	}
}
