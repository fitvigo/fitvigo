import $ from 'jquery';
import 'jquery.scrollto';

const block = 'products';
const classname = '.' + block;

export default function (direction, index, speed) {
	if ((direction === 'down' && index === 9) || 
			(direction === 'up' && index === 10)) {
		$(classname).scrollTo(0);
	}
}
