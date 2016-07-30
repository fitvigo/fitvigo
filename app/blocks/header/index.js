import $ from 'jquery';

class Header {
	constructor() {
		this.selectors = {
			nav: '.js-navigations',
			status: '.js-burger-status'
		};

		this.classes = {
			navVisible: 'header__navigations_visible'
		};

		$(this.selectors.status).on('change', this.toggleNav.bind(this));
	}

	toggleNav(e) {
		const $status = $(e.currentTarget);
		const $nav = $(this.selectors.nav);
		if ($status.is(':checked')) {
			$nav.addClass(this.classes.navVisible);
		} else {
			$nav.removeClass(this.classes.navVisible);
		}
	}
}

export default Header;
