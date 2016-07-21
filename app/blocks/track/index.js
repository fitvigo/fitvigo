import $ from 'jquery';

const block = 'track__';
const classname = block + 'data';
const product = block + 'product';

export default function (direction, index, speed) {
	if (direction === 'down' && index === 3) {
		setTimeout(() => {
			$('.' + classname).addClass(classname + '_visible');
		}, speed);
	}

	if ((direction === 'down' && index === 5) || index === 6 || index === 7) {
		const delayInc = 300;
		let delay = delayInc;
		$('.' + product).each((i, item) => {
			setTimeout(() => {
				$(item).addClass(product + '_visible');
			}, delay);
			delay += delayInc;
		});
	}

	if (direction === 'up' && index === 6) {
		$('.' + product).removeClass(product + '_visible');
	}

	if (direction === 'up' && index === 4) {
		$('.' + classname).removeClass(classname + '_visible');
	}
}
