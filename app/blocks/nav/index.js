import $ from 'jquery';

class Nav {
	constructor() {
		this.selectors = {
			link: '.nav__link',
			subnav: '.nav__list_subnav'
		};

		this.classes = {
			subnavVisible: 'nav__list_subnav_visible'
		};

		$(this.selectors.link).on('click', this.toggleSubnav.bind(this));
	}

	toggleSubnav(e) {
		const $link = $(e.currentTarget);
		const $subnav = $link.nextAll(this.selectors.subnav);
		if ($subnav.length === 0) {
			return;
		}

		$subnav.toggleClass(this.classes.subnavVisible);
	}
}

export default new Nav();
